# Fab Academy – Local Class Slides

🔗 **Live site:** https://saheenpalayi.github.io/fabacademy-slides/

Built with [reveal.js](https://revealjs.com) (MIT, © Hakim El Hattab – see `LICENSE`).

One reveal.js project for all classes.

```
reveal.js/                ← this project (run with npm)
├── index.html            ← landing page (list of classes)
├── assets/
│   ├── index.css         ← landing page styles
│   ├── deck.css          ← shared slide styles (all classes)
│   └── deck.js           ← shared Reveal settings + "← All classes" button
├── dist/                 ← reveal.js built files – don't edit
├── class-01/
│   ├── index.html        ← loads the deck (rarely needs editing)
│   ├── slides.md         ← ✏️ write your slides here
│   └── images/           ← images for this class
├── class-02/ … class-08/
└── index.old.html        ← backup of your earlier index.html (not published)
```

## Run it

```bash
npm install     # first time only
npm start
```

Then open http://localhost:8000 – pages reload automatically when you save.

⚠️ Don't run `npm run build` – it rebuilds reveal.js itself and wipes `dist/`.

## Writing slides (slides.md)

```markdown
# Title slide

---

## Next slide (→)

- bullet

--

### Slide below (↓)

![](images/photo.jpg)

Note:
Speaker notes – press S during the talk.
```

- `---` on its own line → new horizontal slide
- `--` on its own line → vertical slide underneath
- HTML works inside Markdown too (`<p class="subtitle">…</p>`)

## Adding a class

1. Copy `class-08` → `class-09`, edit its `slides.md` and the `<title>` in `index.html`
2. Copy a `<a class="card">` block in the root `index.html` and point it to `class-09/`

## Changing the look

- Theme for one class: change `theme/white.css` in that class's `index.html`
  (options in `dist/theme/`: black, league, night, moon, simple, …)
- Tweaks for all classes: `assets/deck.css`
- Settings for all classes (slide numbers, transitions…): `assets/deck.js`

## Keyboard

`→ ↓` next · `Esc` overview · `S` speaker notes · `F` fullscreen · `Ctrl+Shift+F` search · `Alt+click` zoom

## Export to PDF

With `npm start` running, open a class with `?print-pdf` at the end of the URL, e.g.
`http://localhost:8000/class-01/?print-pdf`, then print → Save as PDF.

## Hosting

The site is published to **GitHub Pages** by `.github/workflows/pages.yml` on every push to `main` (Settings → Pages → Source: **GitHub Actions**). To update the live slides:

```bash
git add .
git commit -m "Update class 02 slides"
git push
```

The live site refreshes about a minute after each push.
