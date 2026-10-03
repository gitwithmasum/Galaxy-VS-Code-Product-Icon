# Development Guide

## Quick start

```powershell
npm.cmd install
```

Open the repository in VS Code and press **F5**. In the Extension Development Host:

```text
Preferences: Product Icon Theme
→ Masum Galaxy // Product Icons
```

## Premium Galaxy v2 glyph system

The custom WOFF font uses the Private Use Area from `U+E001` through `U+E029`.

Version 2.0 contains **41 distinct glyphs**. The design system prioritizes:

- recognizable silhouettes at 16–24 px
- strong Activity Bar identity
- orbital/spark accents where they remain readable
- sci-fi geometry without sacrificing meaning
- distinct icons for common actions instead of excessive glyph reuse
- native VS Code fallback where familiarity is more valuable

Theme definition:

```text
producticons/masum-galaxy-product-icon-theme.json
```

Font:

```text
producticons/masum-galaxy-product-icons.woff
```
