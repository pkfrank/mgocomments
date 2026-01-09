# MGoBlog Comment Enhancer 🏈

> A Tampermonkey userscript that transforms MGoBlog's comment experience into a Reddit-like interface

![Demo](assets/demo.gif)

## ✨ Features

- **📄 All Comments on One Page** — No more clicking through pagination. Every comment loads automatically.
- **🔄 Smart Sorting** — Sort by Oldest, Newest, or Top (by votes) with one click.
- **📁 Thread Collapsing** — Collapse entire comment threads with the click of a button.
- **⌨️ Keyboard Navigation** — Navigate comments with `j`/`k`, collapse with `Enter`.
- **👍 Quick Voting** — Optimistic UI updates for instant feedback.
- **🎨 Clean Design** — Modern, compact layout with Michigan maize & blue theming.

## 📸 Before & After

| Before | After |
|--------|-------|
| ![Before](assets/before.png) | ![After](assets/after.png) |

**Before:** Paginated comments (50 per page), cluttered UI, basic sorting dropdown.

**After:** All comments loaded, clean card-based layout, inline user stats, thread collapsing.

## 🚀 Installation

### Prerequisites
- [Tampermonkey](https://www.tampermonkey.net/) browser extension installed

### Install the Script

1. **[Click here to install](https://raw.githubusercontent.com/pkfrank/mgocomments/main/mgoblog-enhance.user.js)** — Tampermonkey will prompt you to install
2. Click "Install" in the Tampermonkey dialog
3. Visit any [MGoBlog](https://mgoblog.com) article and enjoy!

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
1. Detects when you're on an MGoBlog article with comments
2. Fetches all comment pages via the Drupal AJAX API
3. Extracts comment data (author, time, votes, MGoPoints, join date)
4. Re-renders comments with a clean, modern interface
5. Adds sorting, collapsing, and keyboard navigation

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs via [Issues](https://github.com/pkfrank/mgocomments/issues)
- Submit feature requests
- Open pull requests

## 📄 License

MIT © [pkfrank](https://github.com/pkfrank)

---

**Go Blue! 〽️**
