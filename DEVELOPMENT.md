# Development Guide

## Quick start

```powershell
npm.cmd install
```

Open the repository in VS Code and press **F5**. In the Extension Development Host use:

```text
Preferences: Product Icon Theme
→ Masum Galaxy // Product Icons
```

## v1.3 glyph map

The custom font uses the Private Use Area from `U+E001` through `U+E024`.

Version 1.3 contains **36 distinct custom glyphs**. The design system prioritizes:

- recognizable silhouettes at small VS Code UI sizes
- consistent stroke weight and proportions
- chamfered futuristic geometry
- subtle orbital/spark accents
- semantic distinction between common actions
- default VS Code fallbacks where a custom icon would reduce clarity

The theme definition file is:

```text
producticons/masum-galaxy-product-icon-theme.json
```

The WOFF font is:

```text
producticons/masum-galaxy-product-icons.woff
```
