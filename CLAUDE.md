# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MGoBlog Comment Enhancer is a Tampermonkey userscript that transforms MGoBlog's comment section into a Reddit-like interface. It's a single-file JavaScript userscript (`mgoblog-enhance.user.js`) with no build process.

## Development

**Testing the script:**
1. Install Tampermonkey browser extension
2. Create new script in Tampermonkey dashboard
3. Paste contents of `mgoblog-enhance.user.js`
4. Visit any MGoBlog article (e.g., https://mgoblog.com/mgoboard)

**No build/lint/test commands** - this is a standalone userscript with inline styles.

## Architecture

The script uses a **DOM rewrite approach**:
1. Extracts comment data from MGoBlog's Drupal DOM (`article.comment` elements)
2. Fetches all paginated comments via Drupal AJAX API (`/views/ajax`)
3. Re-renders comments with custom HTML/inline CSS
4. Hides original comment section, inserts enhanced version

### Key Components

- **`extractCommentData(article)`** - Parses MGoBlog's DOM structure to extract author, time, votes, MGoPoints, etc.
- **`getDrupalViewConfig()`** - Extracts AJAX params from `drupal-settings-json` script tag
- **`fetchAdditionalPages()`** - Loads all comment pages via Drupal Views AJAX
- **`sortComments()`** - Thread-aware sorting (keeps replies grouped with parents)
- **`renderComment()`** - Generates HTML with inline styles for each comment
- **`collapsedState`** - Persists collapsed threads via `GM_setValue`/localStorage

### MGoBlog-Specific APIs

- **Vote API:** `GET /mgo_vote/comment/{commentId}/{upvote|downvote}`
- **Comments AJAX:** `GET /views/ajax` with Drupal view params (view_name, view_args, view_dom_id, page)
- **DOM selectors:** `.view-article-comments`, `article.comment`, `.comment__content`, `.mgopoints`, `.joined`

### Styling

All styles are inline or injected via `GM_addStyle`. Michigan brand colors: `#00274c` (blue), `#ffcb05` (maize).

## Userscript Metadata

The `@exclude` patterns prevent the script from running on reply/comment standalone pages where it would break functionality.
