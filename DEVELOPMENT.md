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

The theme definition file ends with `product-icon-theme.json`, so VS Code provides schema validation and icon ID completion.

## v1.0 glyph map

The custom font uses the Private Use Area from `U+E001` through `U+E01A`.

The first release focuses on high-frequency UI controls. Additional VS Code product icon IDs can be mapped to these glyphs or receive new Galaxy glyphs in later releases.
