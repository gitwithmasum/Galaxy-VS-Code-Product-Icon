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

The custom WOFF font uses the Private Use Area from `U+E001` through `U+E029` and contains **41 distinct glyphs**.

Theme definition:

```text
producticons/masum-galaxy-product-icon-theme.json
```

Font:

```text
producticons/masum-galaxy-product-icons.woff
```

## Aurora hover

Optional hover CSS:

```text
ui/product-icon-hover.css
```

Controller:

```text
extension.js
```

Commands:

```text
Masum Galaxy Product Icons: Enable Aurora Hover
Masum Galaxy Product Icons: Disable Aurora Hover
Masum Galaxy Product Icons: Reload Aurora Hover
```

The controller preserves unrelated `vscode_custom_css.imports` entries and only manages this extension's own hover CSS import.
