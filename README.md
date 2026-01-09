# MGoBlog Comment Enhancer 🏈

_A Tampermonkey userscript that transforms MGoBoard discussion threads into a Reddit-like experience_

## 📸 Before & After

| Before | After |
|--------|-------|
| <img width="1532" height="1594" alt="Screenshot 2026-01-09 at 11 24 13 AM" src="https://github.com/user-attachments/assets/c28115a4-6fa4-4478-88d2-98fc1f97aed6" /> | <img width="1580" height="1794" alt="Screenshot 2026-01-09 at 11 23 55 AM" src="https://github.com/user-attachments/assets/fdc2d39f-8366-4898-b5e7-2c46748390e4" />|

**Before:** MGoBoard's default view — paginated (50 comments per page), cluttered UI, basic sorting dropdown.

**After:** Enhanced view — all comments loaded instantly, clean card-based layout, inline user stats, thread collapsing.

## ✨ Features

- **📄 All Comments on One Page** — No more clicking through pagination. Every comment loads automatically.
- **🔄 Smart Sorting** — Sort by Oldest, Newest, or Top (by votes) with one click.
- **📁 Thread Collapsing** — Collapse entire comment threads with the click of a button.
- **⌨️ Keyboard Navigation** — Navigate comments with `j`/`k`, collapse with `Enter`.
- **👍 Quick Voting** — Optimistic UI updates for instant feedback.
- **🎨 Clean Design** — Modern, compact layout with Michigan maize & blue theming.

## 🚀 Installation

### Prerequisites
- [Tampermonkey](https://www.tampermonkey.net/) browser extension installed

### Install the Script

1. **[Click here to install](https://raw.githubusercontent.com/pkfrank/mgocomments/master/mgoblog-enhance.user.js)** — Tampermonkey will prompt you to install
2. Click "Install" in the Tampermonkey dialog
3. Visit any [MGoBoard discussion thread](https://mgoblog.com/mgoboard) and enjoy!

### Manual Installation

1. Open Tampermonkey dashboard
2. Click the `+` tab to create a new script
3. Copy the contents of `mgoblog-enhance.user.js`
4. Paste and save

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `j` | Next comment |
| `k` | Previous comment |
| `Enter` | Collapse/expand thread |
| `x` | Toggle compact mode |
| `?` | Toggle control panel |

## 🎛️ Control Panel

A floating control panel (top-right) provides quick access to:
- **Compact Mode** toggle
- **Collapse All** / **Expand All** buttons
- Keyboard shortcut reference

## 🔧 How It Works

The script:
1. Detects when you're on an MGoBoard discussion thread
2. Fetches all comment pages via the Drupal AJAX API (no more pagination!)
3. Extracts comment data (author, time, votes, MGoPoints, join date)
4. Re-renders comments with a clean, modern interface
5. Adds sorting, collapsing, and keyboard navigation

## ❓ FAQ

### What pages does this work on?

Only **MGoBoard discussion threads** (URLs like `mgoblog.com/mgoboard/...`). It does not modify the main articles or front page.

### Does this work on mobile?

The script works with Tampermonkey on Firefox for Android. iOS does not support userscript extensions.

### Why do I see a brief flash of the original comments?

The script waits for the page to load, then fetches all comments and re-renders them. On slower connections, you may briefly see the original paginated view before the enhanced version appears.

### Are my votes saved?

Votes are sent to MGoBlog's servers just like normal voting. The script just provides faster visual feedback while the vote processes.

### What gets saved locally?

Only your collapsed/expanded thread states are saved locally (so collapsed threads stay collapsed when you return). Sort preference and other settings reset on page load.

### Something broke! What do I do?

1. **Try refreshing the page** — Sometimes the Drupal API takes a moment
2. **Check if MGoBlog changed something** — Site updates can break scripts
3. **Disable other userscripts** — Conflicts can cause issues
4. **[Report the bug](https://github.com/pkfrank/mgocomments/issues)** — Include the URL and what you expected vs. what happened

### Can I use this with other MGoBlog extensions?

Maybe! The script completely replaces the comment section HTML, so other extensions that modify comments may conflict. Extensions that modify other parts of the page should work fine.

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs via [Issues](https://github.com/pkfrank/mgocomments/issues)
- Submit feature requests
- Open pull requests

## 📄 License

MIT © [pkfrank](https://github.com/pkfrank)

---

**Go Blue! 〽️**
