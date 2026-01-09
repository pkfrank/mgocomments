// ==UserScript==
// @name         MGoBlog Comment Enhancer
// @namespace    https://mgoblog.com/
// @version      2.10.0
// @description  Makes MGoBlog comments more compact and readable with thread collapsing and keyboard navigation
// @author       You
// @match        https://mgoblog.com/*
// @match        https://www.mgoblog.com/*
// @exclude      https://mgoblog.com/comment/*
// @exclude      https://www.mgoblog.com/comment/*
// @exclude      https://mgoblog.com/*/reply/*
// @exclude      https://www.mgoblog.com/*/reply/*
// @icon         https://mgoblog.com/favicon.ico
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-idle
// ==/UserScript==

(function() {
  'use strict';

  const CONFIG = {
    compactMode: true,
    storageKey: 'mgoblog-collapsed',
    borderColors: ['#00274c', '#ffcb05', '#888'],
    currentSort: 'oldest' // 'oldest', 'newest', 'top'
  };

  // Collapsed state management
  const collapsedState = {
    items: new Set(),

    load() {
      try {
        const saved = typeof GM_getValue !== 'undefined'
          ? GM_getValue(CONFIG.storageKey, null)
          : localStorage.getItem(CONFIG.storageKey);
        if (saved) {
          const data = typeof saved === 'string' ? JSON.parse(saved) : saved;
          this.items = new Set(Array.isArray(data) ? data : []);
        }
      } catch (e) {}
    },

    save() {
      try {
        const data = JSON.stringify([...this.items]);
        if (typeof GM_setValue !== 'undefined') {
          GM_setValue(CONFIG.storageKey, data);
        } else {
          localStorage.setItem(CONFIG.storageKey, data);
        }
      } catch (e) {}
    },

    toggle(id) {
      if (this.items.has(id)) this.items.delete(id);
      else this.items.add(id);
      this.save();
    },

    isCollapsed(id) {
      return this.items.has(id);
    }
  };

  // Extract comment data from a DOM article element
  function extractCommentData(article) {
    const footer = article.querySelector('footer.comment__meta');
    const content = article.querySelector('.comment__content');

    // Get nesting level by counting parent .indented elements
    let level = 0;
    let parent = article.parentElement;
    while (parent) {
      if (parent.classList && parent.classList.contains('indented')) level++;
      parent = parent.parentElement;
    }

    // Avatar - in footer .profile img
    const avatarImg = footer?.querySelector('.profile img');
    const avatar = avatarImg?.src || '/sites/default/files/default_images/dude.jpg';

    // Author - in content .comment__author a.username
    const authorLink = content?.querySelector('.comment__author a.username');
    const author = authorLink?.textContent?.trim() || 'Anonymous';
    const authorUrl = authorLink?.getAttribute('href') || '#';

    // Time - in content .comment__time a
    const timeLink = content?.querySelector('.comment__time a');
    const time = timeLink?.textContent?.trim() || '';
    const timeUrl = timeLink?.getAttribute('href') || '#';

    // Body - find the text-formatted div
    const bodyDiv = content?.querySelector('.text-formatted, .field--type-text-long');
    const body = bodyDiv?.innerHTML || '';

    // Extract vote count from original widget
    const voteWidget = content?.querySelector('.mgo-vote-wrapper, .field--name-field-votes, .rate-widget');
    const voteCountEl = voteWidget?.querySelector('.mgo-vote__count, .rate-number-up-down-rating');
    const voteCount = parseInt(voteCountEl?.textContent?.trim() || '0', 10);

    // Get numeric comment ID for API calls
    const numericId = article.id?.replace('comment-', '') || '';

    // MGoPoints and Join date
    const pointsEl = content?.querySelector('.mgopoints');
    const points = pointsEl?.textContent?.replace(/[^\d]/g, '') || '';
    const joinedEl = content?.querySelector('.joined');
    const joined = joinedEl?.textContent?.replace('Joined:', '').trim() || '';

    // Reply link
    const replyLink = content?.querySelector('a[href*="/reply/"]');
    const replyUrl = replyLink?.getAttribute('href') || '#';

    // Is staff/author?
    const isStaff = article.classList.contains('by-node-author');

    // Comment ID
    const id = article.id || `comment-${Math.random().toString(36).substr(2, 9)}`;

    return { id, level, avatar, author, authorUrl, time, timeUrl, body, voteCount, numericId, points, joined, replyUrl, isStaff };
  }

  // Get Drupal view configuration from page
  function getDrupalViewConfig() {
    const viewEl = document.querySelector('.view-article-comments');
    if (!viewEl) return null;

    const domIdClass = Array.from(viewEl.classList).find(c => c.startsWith('js-view-dom-id-'));
    const viewDomId = domIdClass?.replace('js-view-dom-id-', '');
    if (!viewDomId) return null;

    try {
      const settingsScript = document.querySelector('script[data-drupal-selector="drupal-settings-json"]');
      if (!settingsScript) return null;
      const settings = JSON.parse(settingsScript.textContent);
      return settings.views?.ajaxViews?.[`views_dom_id:${viewDomId}`];
    } catch (e) {
      console.error('Failed to parse Drupal settings:', e);
      return null;
    }
  }

  // Get total number of comment pages
  function getTotalPages() {
    const lastLink = document.querySelector('.pager__item--last a');
    if (!lastLink) return 1;
    try {
      const lastPage = new URL(lastLink.href).searchParams.get('page');
      return lastPage ? parseInt(lastPage, 10) + 1 : 1;
    } catch (e) {
      return 1;
    }
  }

  // Fetch comments from additional pages
  async function fetchAdditionalPages(viewConfig, totalPages, updateStatus) {
    const additionalComments = [];

    for (let page = 1; page < totalPages; page++) {
      updateStatus(`Loading comments... (${page + 1}/${totalPages} pages)`);

      const params = new URLSearchParams({
        _wrapper_format: 'drupal_ajax',
        view_name: viewConfig.view_name,
        view_display_id: viewConfig.view_display_id,
        view_args: viewConfig.view_args,
        view_path: viewConfig.view_path,
        view_dom_id: viewConfig.view_dom_id,
        pager_element: viewConfig.pager_element || 0,
        page: page,
        _drupal_ajax: 1
      });

      try {
        const response = await fetch(`/views/ajax?${params}`, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json, text/javascript, */*; q=0.01'
          },
          credentials: 'same-origin'
        });

        if (!response.ok) continue;

        const data = await response.json();
        // Find the insert command with HTML content
        const insertCmd = data.find(d => d.command === 'insert' && d.data);
        if (insertCmd?.data) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(insertCmd.data, 'text/html');
          const articles = doc.querySelectorAll('article.comment');
          articles.forEach(article => {
            additionalComments.push(extractCommentData(article));
          });
        }
      } catch (e) {
        console.error(`Failed to fetch page ${page}:`, e);
      }
    }

    return additionalComments;
  }

  // Build thread structure: group replies under their parent comments
  function buildThreads(comments) {
    // First pass: identify top-level comments and build a map
    const threads = [];
    const replyBuffer = [];

    comments.forEach(comment => {
      if (comment.level === 0) {
        // Start a new thread
        threads.push({
          parent: comment,
          replies: []
        });
      } else {
        // It's a reply - add to current thread
        if (threads.length > 0) {
          threads[threads.length - 1].replies.push(comment);
        } else {
          // Orphan reply (shouldn't happen but handle gracefully)
          replyBuffer.push(comment);
        }
      }
    });

    return threads;
  }

  // Flatten threads back to a single array
  function flattenThreads(threads) {
    const result = [];
    threads.forEach(thread => {
      result.push(thread.parent);
      result.push(...thread.replies);
    });
    return result;
  }

  // Sort comments while keeping threads intact
  function sortComments(comments, sortType) {
    const threads = buildThreads(comments);

    switch (sortType) {
      case 'newest':
        // Sort threads by parent's numeric ID (higher = newer)
        threads.sort((a, b) => {
          const idA = parseInt(a.parent.numericId, 10) || 0;
          const idB = parseInt(b.parent.numericId, 10) || 0;
          return idB - idA;
        });
        break;

      case 'top':
        // Sort threads by parent's vote count (higher = better)
        threads.sort((a, b) => {
          return (b.parent.voteCount || 0) - (a.parent.voteCount || 0);
        });
        break;

      case 'oldest':
      default:
        // Sort threads by parent's numeric ID (lower = older)
        threads.sort((a, b) => {
          const idA = parseInt(a.parent.numericId, 10) || 0;
          const idB = parseInt(b.parent.numericId, 10) || 0;
          return idA - idB;
        });
        break;
    }

    return flattenThreads(threads);
  }

  // Render a single comment with inline styles
  function renderComment(data, isCompact) {
    const borderColor = CONFIG.borderColors[Math.min(data.level, 2)];
    const indent = data.level * 24;
    const bgColor = data.level === 0 ? '#fafafa' : '#fff';
    const isCollapsed = collapsedState.isCollapsed(data.id);

    const avatarSize = isCompact ? 56 : 64;
    const fontSize = isCompact ? 15 : 16;
    const padding = isCompact ? '14px 18px' : '18px 24px';
    const gap = isCompact ? 16 : 20;
    const marginBottom = isCompact ? 14 : 18;

    return `
      <div class="mgo-comment ${isCollapsed ? 'mgo-collapsed' : ''}" data-id="${data.id}" data-level="${data.level}" style="
        position: relative;
        margin-left: ${indent + 38}px;
        margin-bottom: ${marginBottom}px;
        background: ${bgColor};
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        ${data.level > 0 ? `border-left: 4px solid ${borderColor};` : ''}
        padding: ${padding};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <span class="mgo-collapse-btn" style="
          position: absolute;
          left: -32px;
          top: ${isCompact ? 8 : 12}px;
          width: 28px;
          height: 28px;
          background: #00274c;
          color: #ffcb05;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          user-select: none;
          line-height: 1;
        ">${isCollapsed ? '+' : '−'}</span>
        <div class="mgo-comment-inner" style="display: flex; gap: ${gap}px; ${isCollapsed ? 'opacity: 0.6;' : ''}">
          <img src="${data.avatar}" style="
            width: ${avatarSize}px;
            height: ${avatarSize}px;
            border-radius: 50%;
            object-fit: cover;
            flex-shrink: 0;
            border: 2px solid #e0e0e0;
          ">
          <div style="flex: 1; min-width: 0;">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: ${isCompact ? 2 : 4}px;">
              <a href="${data.authorUrl}" style="
                font-size: ${fontSize}px;
                font-weight: 600;
                color: #00274c;
                text-decoration: none;
              ">${data.author}</a>
              ${data.isStaff ? '<span style="color: #ffcb05; font-size: 14px;">★</span>' : ''}
              <span style="font-size: 12px; color: #888;">
                ${data.points ? `${Number(data.points).toLocaleString()} pts` : ''}${data.points && data.joined ? ' · ' : ''}${data.joined ? `Since ${data.joined}` : ''}
              </span>
              <a href="${data.timeUrl}" style="font-size: 12px; color: #aaa; text-decoration: none; margin-left: auto;">${data.time}</a>
            </div>
            <div class="mgo-body" style="
              line-height: ${isCompact ? 1.4 : 1.5};
              font-size: ${fontSize}px;
              ${isCollapsed ? 'display: none;' : ''}
            ">${data.body}</div>
            <div class="mgo-footer" style="
              display: flex;
              align-items: center;
              gap: 12px;
              margin-top: 8px;
              font-size: 13px;
              ${isCollapsed ? 'display: none;' : ''}
            ">
              <div class="mgo-votes" data-comment-id="${data.numericId}" style="display: flex; align-items: center; gap: 4px;">
                <button class="mgo-vote-btn mgo-upvote" data-action="upvote" style="
                  background: none; border: none; padding: 3px 6px; cursor: pointer; color: #666; font-size: 15px;
                " title="Upvote">▲</button>
                <span class="mgo-vote-count" style="font-weight: 600; min-width: 20px; text-align: center; color: #00274c; font-size: 14px;">${data.voteCount}</span>
                <button class="mgo-vote-btn mgo-downvote" data-action="downvote" style="
                  background: none; border: none; padding: 3px 6px; cursor: pointer; color: #666; font-size: 15px;
                " title="Downvote">▼</button>
              </div>
              <a href="${data.replyUrl}" style="color: #00274c; text-decoration: none; font-size: 13px; font-weight: 500;">reply</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Inject minimal styles (only for control panel and highlighting)
  function injectStyles() {
    const css = `
      /* Only widen the comments area, not the whole page */

      /* Vote button styling */
      .mgo-vote-btn:hover {
        color: #00274c !important;
        transform: scale(1.2);
      }
      .mgo-vote-btn.mgo-voted {
        color: #00274c !important;
      }
      .mgo-vote-btn:disabled {
        opacity: 0.5 !important;
        cursor: not-allowed !important;
      }
      .mgo-upvote:hover { color: #2a2 !important; }
      .mgo-downvote:hover { color: #a22 !important; }

      /* Control panel */
      .mgo-control-panel {
        position: fixed !important;
        top: 70px !important;
        right: 15px !important;
        background: white !important;
        border: 1px solid #ccc !important;
        border-radius: 6px !important;
        padding: 12px !important;
        z-index: 10000 !important;
        box-shadow: 0 3px 15px rgba(0,0,0,0.15) !important;
        font-size: 13px !important;
        min-width: 180px !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      }
      .mgo-control-panel.mgo-minimized {
        padding: 8px 12px !important;
        min-width: auto !important;
      }
      .mgo-control-panel.mgo-minimized .mgo-panel-content { display: none !important; }
      .mgo-control-panel h4 {
        margin: 0 0 10px 0 !important;
        font-size: 14px !important;
        color: #00274c !important;
        border-bottom: 2px solid #ffcb05 !important;
        padding-bottom: 6px !important;
        cursor: pointer !important;
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
      }
      .mgo-control-panel.mgo-minimized h4 {
        margin: 0 !important;
        border: none !important;
        padding: 0 !important;
      }
      .mgo-control-panel label {
        display: block !important;
        margin: 6px 0 !important;
        cursor: pointer !important;
      }
      .mgo-control-panel input[type="checkbox"] { margin-right: 6px !important; }
      .mgo-control-panel .mgo-buttons {
        margin-top: 10px !important;
        display: flex !important;
        gap: 6px !important;
      }
      .mgo-control-panel button {
        flex: 1 !important;
        padding: 6px 10px !important;
        background: #00274c !important;
        color: white !important;
        border: none !important;
        border-radius: 4px !important;
        cursor: pointer !important;
        font-size: 11px !important;
        font-weight: 500 !important;
      }
      .mgo-control-panel button:hover { background: #003d73 !important; }
      .mgo-control-panel .mgo-shortcuts {
        margin-top: 12px !important;
        padding-top: 10px !important;
        border-top: 1px solid #eee !important;
        font-size: 11px !important;
        color: #666 !important;
        line-height: 1.8 !important;
      }
      .mgo-control-panel .mgo-shortcuts kbd {
        background: #f0f0f0 !important;
        padding: 2px 5px !important;
        border-radius: 3px !important;
        font-family: monospace !important;
        font-size: 11px !important;
        border: 1px solid #ddd !important;
      }
      .mgo-minimize-btn { font-size: 18px !important; color: #999 !important; }
      .mgo-minimize-btn:hover { color: #00274c !important; }

      /* Status indicator */
      .mgo-status {
        position: fixed !important;
        bottom: 15px !important;
        right: 15px !important;
        background: #00274c !important;
        color: white !important;
        padding: 8px 12px !important;
        border-radius: 4px !important;
        font-size: 12px !important;
        opacity: 0 !important;
        transition: opacity 0.3s !important;
        z-index: 10001 !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      }
      .mgo-status.show { opacity: 1 !important; }

      /* Highlighted comment (keyboard navigation) */
      .mgo-comment.mgo-highlighted {
        box-shadow: inset 4px 0 0 #ffcb05, 0 0 0 2px #ffcb05 !important;
      }

      /* Comment body styling */
      .mgo-comment .mgo-body p { margin: 0 0 8px 0; }
      .mgo-comment .mgo-body p:last-child { margin-bottom: 0; }
      .mgo-comment .mgo-body a { color: #00274c; }

      /* Enhanced comments container - full width */
      #mgo-enhanced-comments {
        width: 100% !important;
        max-width: none !important;
        padding: 20px 0;
        box-sizing: border-box;
      }

      /* Force parent containers to allow full width */
      .region-content,
      .block-system-main-block,
      .field--name-comment-forum {
        max-width: none !important;
      }

      /* Sort bar */
      .mgo-sort-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;
        padding: 12px 16px;
        background: #f5f5f5;
        border-radius: 6px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
      }
      .mgo-sort-bar span {
        color: #666;
        margin-right: 4px;
      }
      .mgo-sort-btn {
        padding: 6px 14px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        background: #e0e0e0;
        color: #333;
        transition: all 0.15s ease;
      }
      .mgo-sort-btn:hover {
        background: #d0d0d0;
      }
      .mgo-sort-btn.active {
        background: #00274c;
        color: #ffcb05;
      }
      .mgo-comment-count {
        margin-left: auto;
        color: #888;
        font-size: 13px;
      }

      /* Hide original sort controls */
      .view-filters,
      .views-exposed-form {
        display: none !important;
      }
    `;

    if (typeof GM_addStyle !== 'undefined') {
      GM_addStyle(css);
    } else {
      const style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
    }
  }

  // Status message
  let statusEl;
  function showStatus(msg) {
    if (!statusEl) {
      statusEl = document.createElement('div');
      statusEl.className = 'mgo-status';
      document.body.appendChild(statusEl);
    }
    statusEl.textContent = msg;
    statusEl.classList.add('show');
    setTimeout(() => statusEl.classList.remove('show'), 1500);
  }

  // Store for comment data
  let commentsData = [];
  let commentsContainer = null;

  // Re-render all comments
  // Create sort bar HTML
  function renderSortBar() {
    const sortOptions = [
      { id: 'oldest', label: 'Oldest' },
      { id: 'newest', label: 'Newest' },
      { id: 'top', label: 'Top' }
    ];

    const buttons = sortOptions.map(opt =>
      `<button class="mgo-sort-btn ${CONFIG.currentSort === opt.id ? 'active' : ''}" data-sort="${opt.id}">${opt.label}</button>`
    ).join('');

    return `
      <div class="mgo-sort-bar">
        <span>Sort by:</span>
        ${buttons}
        <span class="mgo-comment-count">${commentsData.length} comments</span>
      </div>
    `;
  }

  function rerender() {
    if (!commentsContainer) return;
    const isCompact = CONFIG.compactMode;
    const sortedComments = sortComments(commentsData, CONFIG.currentSort);
    commentsContainer.innerHTML = renderSortBar() + sortedComments.map(d => renderComment(d, isCompact)).join('');

    // Setup sort button handlers
    commentsContainer.querySelectorAll('.mgo-sort-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const newSort = e.target.dataset.sort;
        if (newSort !== CONFIG.currentSort) {
          CONFIG.currentSort = newSort;
          rerender();
          showStatus(`Sorted by ${newSort}`);
        }
      });
    });
  }

  // Get child comments of a comment (all following comments with higher level until same/lower level)
  function getChildComments(commentEl) {
    const level = parseInt(commentEl.dataset.level, 10);
    const children = [];
    let sibling = commentEl.nextElementSibling;

    while (sibling && sibling.classList.contains('mgo-comment')) {
      const siblingLevel = parseInt(sibling.dataset.level, 10);
      if (siblingLevel <= level) break; // Same or higher level = not a child
      children.push(sibling);
      sibling = sibling.nextElementSibling;
    }
    return children;
  }

  // Toggle collapse for a comment and its entire thread
  function toggleCollapse(commentEl) {
    const id = commentEl.dataset.id;
    collapsedState.toggle(id);

    const isCollapsed = collapsedState.isCollapsed(id);
    commentEl.classList.toggle('mgo-collapsed', isCollapsed);

    // Update button
    const btn = commentEl.querySelector('.mgo-collapse-btn');
    if (btn) btn.textContent = isCollapsed ? '+' : '−';

    // Update inner opacity and visibility
    const inner = commentEl.querySelector('.mgo-comment-inner');
    if (inner) inner.style.opacity = isCollapsed ? '0.6' : '1';

    const body = commentEl.querySelector('.mgo-body');
    if (body) body.style.display = isCollapsed ? 'none' : '';

    const footer = commentEl.querySelector('.mgo-footer');
    if (footer) footer.style.display = isCollapsed ? 'none' : '';

    // Hide/show all child comments in the thread
    const children = getChildComments(commentEl);
    children.forEach(child => {
      child.style.display = isCollapsed ? 'none' : '';
    });

    const childCount = children.length;
    if (childCount > 0) {
      showStatus(isCollapsed ? `Collapsed (${childCount} hidden)` : 'Expanded');
    } else {
      showStatus(isCollapsed ? 'Collapsed' : 'Expanded');
    }
  }

  // Create control panel
  function createControlPanel() {
    const panel = document.createElement('div');
    panel.className = 'mgo-control-panel';
    panel.innerHTML = `
      <h4>
        <span>MGo Enhance</span>
        <span class="mgo-minimize-btn">_</span>
      </h4>
      <div class="mgo-panel-content">
        <label>
          <input type="checkbox" id="mgo-compact-toggle" ${CONFIG.compactMode ? 'checked' : ''}>
          Compact mode
        </label>
        <div class="mgo-buttons">
          <button id="mgo-collapse-all">Collapse All</button>
          <button id="mgo-expand-all">Expand All</button>
        </div>
        <div class="mgo-shortcuts">
          <strong>Keyboard:</strong><br>
          <kbd>j</kbd>/<kbd>k</kbd> Navigate<br>
          <kbd>Enter</kbd> Collapse/Expand<br>
          <kbd>x</kbd> Toggle compact<br>
          <kbd>?</kbd> Toggle panel
        </div>
      </div>
    `;

    document.body.appendChild(panel);

    panel.querySelector('h4').addEventListener('click', () => {
      panel.classList.toggle('mgo-minimized');
    });

    document.getElementById('mgo-compact-toggle').addEventListener('change', (e) => {
      CONFIG.compactMode = e.target.checked;
      rerender();
      showStatus(e.target.checked ? 'Compact mode ON' : 'Compact mode OFF');
    });

    document.getElementById('mgo-collapse-all').addEventListener('click', () => {
      commentsData.forEach(d => collapsedState.items.add(d.id));
      collapsedState.save();
      rerender();
      showStatus('All collapsed');
    });

    document.getElementById('mgo-expand-all').addEventListener('click', () => {
      collapsedState.items.clear();
      collapsedState.save();
      rerender();
      showStatus('All expanded');
    });
  }

  // Keyboard navigation - track by element reference, not index
  let currentHighlighted = null;

  function getVisibleComments() {
    // Only return comments that are actually visible (not hidden by thread collapse)
    return Array.from(document.querySelectorAll('.mgo-comment')).filter(c => c.style.display !== 'none');
  }

  function focusComment(commentEl) {
    // Remove highlight from previous
    if (currentHighlighted) {
      currentHighlighted.classList.remove('mgo-highlighted');
    }
    // Highlight the selected one
    if (commentEl && commentEl.style.display !== 'none') {
      commentEl.classList.add('mgo-highlighted');
      currentHighlighted = commentEl;
    } else {
      currentHighlighted = null;
    }
  }

  function navigate(dir) {
    const comments = getVisibleComments();
    if (comments.length === 0) return;

    // Find current position in visible list
    let currentIndex = currentHighlighted ? comments.indexOf(currentHighlighted) : -1;

    // If current is not in visible list (was hidden), start from beginning or end
    if (currentIndex === -1) {
      currentIndex = dir > 0 ? -1 : comments.length;
    }

    // Move in direction
    let newIndex = currentIndex + dir;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= comments.length) newIndex = comments.length - 1;

    // Update highlight
    focusComment(comments[newIndex]);
  }

  function getCurrentComment() {
    // Get current highlighted comment if it's still visible
    if (currentHighlighted && currentHighlighted.style.display !== 'none') {
      return currentHighlighted;
    }
    return null;
  }

  function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

      switch (e.key) {
        case 'j':
          e.preventDefault();
          navigate(1);
          break;
        case 'k':
          e.preventDefault();
          navigate(-1);
          break;
        case 'Enter':
          e.preventDefault();
          const current = getCurrentComment();
          if (current) {
            toggleCollapse(current);
          }
          break;
        case 'x':
          e.preventDefault();
          document.getElementById('mgo-compact-toggle').click();
          break;
        case '?':
          e.preventDefault();
          document.querySelector('.mgo-control-panel').classList.toggle('mgo-minimized');
          break;
      }
    });
  }

  // Track votes to prevent multiple clicks (reset on page reload)
  const votedComments = new Map(); // commentId -> 'upvote' | 'downvote'

  // Handle vote - optimistic UI update (max once per comment per session)
  function handleVote(commentId, action) {
    const previousVote = votedComments.get(commentId);

    // Already voted same direction - ignore
    if (previousVote === action) return;

    const voteContainer = commentsContainer.querySelector(`.mgo-votes[data-comment-id="${commentId}"]`);
    const countEl = voteContainer?.querySelector('.mgo-vote-count');
    const commentData = commentsData.find(d => d.numericId === commentId);

    // Optimistically update UI immediately
    if (countEl) {
      const currentCount = parseInt(countEl.textContent, 10) || 0;
      let delta;
      if (previousVote) {
        // Switching vote direction: undo previous (+/-1) and apply new (+/-1) = +/-2
        delta = action === 'upvote' ? 2 : -2;
      } else {
        // First vote on this comment
        delta = action === 'upvote' ? 1 : -1;
      }
      countEl.textContent = currentCount + delta;
      if (commentData) commentData.voteCount = currentCount + delta;
    }

    // Track this vote
    votedComments.set(commentId, action);

    // Fire API call (don't wait for response)
    fetch(`/mgo_vote/comment/${commentId}/${action}`, {
      method: 'GET',
      credentials: 'same-origin'
    }).then(response => {
      if (response.ok) return response.json();
    }).then(data => {
      // If server returns actual count, use it (corrects any drift)
      if (data?.count !== undefined && countEl) {
        countEl.textContent = data.count;
        if (commentData) commentData.voteCount = data.count;
      }
    }).catch(err => {
      console.error('Vote error:', err);
    });
  }

  // Setup click handlers on the comments container
  function setupClickHandlers() {
    if (!commentsContainer) return;

    commentsContainer.addEventListener('click', (e) => {
      const comment = e.target.closest('.mgo-comment');

      // Handle collapse button click
      if (e.target.classList.contains('mgo-collapse-btn')) {
        e.preventDefault();
        e.stopPropagation();
        if (comment) toggleCollapse(comment);
        return;
      }

      // Handle vote button click
      const voteBtn = e.target.closest('.mgo-vote-btn');
      if (voteBtn) {
        e.preventDefault();
        e.stopPropagation();
        const votesContainer = voteBtn.closest('.mgo-votes');
        const commentId = votesContainer?.dataset?.commentId;
        const action = voteBtn.dataset.action;
        if (commentId && action) {
          handleVote(commentId, action);
        }
        return;
      }

      // Handle click on comment to focus it
      if (comment && !e.target.closest('a') && !e.target.closest('button')) {
        focusComment(comment);
      }
    });
  }

  // Persistent loading indicator
  let loadingEl;
  function showLoading(msg) {
    if (!loadingEl) {
      loadingEl = document.createElement('div');
      loadingEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #00274c;
        color: #ffcb05;
        padding: 20px 30px;
        border-radius: 8px;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        z-index: 10002;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      `;
      document.body.appendChild(loadingEl);
    }
    loadingEl.textContent = msg;
    loadingEl.style.display = 'block';
  }

  function hideLoading() {
    if (loadingEl) loadingEl.style.display = 'none';
  }

  // Main initialization - DOM rewrite approach
  async function init() {
    // Extract data from all existing comments first
    const articles = Array.from(document.querySelectorAll('article.comment'));
    if (articles.length === 0) return;

    // Find the container that holds all comments by walking up from first article
    // Look for .field--name-comment-forum or a container with .thread-wrapper children
    let commentSection = articles[0].closest('.field--name-comment-forum');
    if (!commentSection) {
      // Find the common ancestor that contains thread-wrappers
      commentSection = articles[0].closest('.region-content')?.querySelector('.field--name-comment-forum, .view-comments');
    }
    if (!commentSection) {
      // Fallback: find parent that contains all articles
      commentSection = articles[0].parentElement;
      while (commentSection && commentSection.querySelectorAll('article.comment').length < articles.length) {
        commentSection = commentSection.parentElement;
      }
    }
    if (!commentSection) return;

    // Load collapsed state
    collapsedState.load();

    // Inject styles
    injectStyles();

    // Extract comments from current page (page 0)
    commentsData = articles.map(extractCommentData);

    // Check if there are more pages to load
    const totalPages = getTotalPages();
    const viewConfig = getDrupalViewConfig();

    if (totalPages > 1 && viewConfig) {
      showLoading(`Loading comments... (1/${totalPages} pages)`);

      // Fetch additional pages
      const additionalComments = await fetchAdditionalPages(viewConfig, totalPages, showLoading);
      commentsData = commentsData.concat(additionalComments);

      hideLoading();
    }

    // Create new container for enhanced comments
    commentsContainer = document.createElement('div');
    commentsContainer.id = 'mgo-enhanced-comments';

    // Render all comments
    rerender();

    // Hide original comments section and insert new one
    commentSection.style.display = 'none';
    commentSection.parentElement.insertBefore(commentsContainer, commentSection);

    // Also hide the pager since we loaded all comments
    const pager = document.querySelector('.pager');
    if (pager) pager.style.display = 'none';

    // Setup interactions
    setupClickHandlers();
    createControlPanel();
    setupKeyboard();

    console.log(`MGoBlog Enhance v2.10.0: Rendered ${commentsData.length} comments from ${totalPages} page(s)`);
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
