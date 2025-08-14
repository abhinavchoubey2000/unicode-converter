# Unicode Converter (v1)

A small, focused web tool built with React + Vite that converts text into styled Unicode variants (bold, italic) and shows a live preview.

This repository contains a clean two-panel UI: a left textarea for input and a right panel for a live preview of the converted text.

## Features
- Real-time preview of converted text
- Basic conversion: math-style bold and italic Unicode characters for letters and numerals
- Select text in the input to wrap it with bold (`<b>`) or italic (`<i>`) tags using the toolbar buttons
- Copy converted output to clipboard and clear input quickly
- Responsive, modern two-panel layout

## Tech stack
- React 19
- Vite (dev server + build)
- Plain CSS for styling

## Quick start
Prerequisites: Node.js (18+) and npm

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:5173/ in your browser to preview the app.

Build for production:

```bash
npm run build
npm run preview
```

Linting:

```bash
npm run lint
```

## How to use
- Paste or type text into the left-hand textarea.
- Select a portion of text to enable the Bold / Italic buttons — these wrap the selection in `<b>` or `<i>` tags inside the input.
- The right-hand panel shows the converted text in real time using Unicode math bold/italic characters where applicable.
- Use the Copy button (on the preview panel) to copy converted text to the clipboard, or use the Copy button on the input to copy the raw input.
- Use Clear to empty the input.

Notes about conversion logic:
- Conversion functions live in `src/App.jsx` (`convertToBoldUnicode`, `convertToItalicUnicode`, and `getConvertedString`).
- The converter maps A–Z, a–z and 0–9 to their corresponding Unicode mathematical alphanumeric codepoints when applicable. Plain text and unsupported characters are kept as-is.

## Project layout
Important files and folders:
- `index.html` — app entry HTML
- `src/main.jsx` — React entry
- `src/App.jsx` — main UI and conversion logic
- `src/App.css` — styles for the modern two-panel layout
- `package.json` — scripts and dependencies
- `vite.config.js` — Vite configuration

## Troubleshooting
- Dev server not reachable: ensure the dev server is running (`npm run dev`) and open http://localhost:5173/.
- Clipboard copy fails in some environments: the Copy buttons use the Clipboard API (`navigator.clipboard`). If blocked, try copying manually.

## Next steps / ideas
- Add more Unicode styles (serif, double-struck, monospace variants)
- Add export options (download .txt)
- Add theme toggle (light / dark) and small accessibility improvements
- Add unit tests for conversion functions

## Contributing
Contributions are welcome. Open an issue or a pull request with small, focused changes.

## License
No license file is included in this repository. Check with the repository owner for licensing details.

---
Version 1 — minimal, functional Unicode formatter with a modern UI.
