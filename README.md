# lm-web

Wspólne zasoby (CSS/JS) dla strony **lmaslowska.pl** (Liliana Masłowska — Osteopatia), która działa na WebWave.

Serwowane przez GitHub Pages i linkowane w `<head>` WebWave:

```html
<link rel="stylesheet" href="https://kacperkijno.github.io/lm-web/lm.css?v=1">
<script src="https://kacperkijno.github.io/lm-web/lm.js?v=1" defer></script>
```

- `lm.css` — tokeny designu + pasek nav (`.lm-nav`) + stopka (`.lm-ftr`) + skin listy bloga (`.feed_*`). Wszystko scope'owane, nic globalnego.
- `lm.js` — hamburger menu mobilnego (`#lmNav`).

**Przy zmianie podbij wersję w URL** (`?v=2`) lub pinuj commit, żeby ominąć cache Pages.
