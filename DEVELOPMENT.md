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

## v1.1 glyph map

The custom font uses the Private Use Area from `U+E001` through `U+E01A`.

Version 1.1 keeps the 26 compact Galaxy glyphs and maps them across roughly 180 VS Code product icon IDs, covering more Activity Bar, Explorer, Git, terminal, testing, panel, notification and navigation actions. Future versions can add new glyphs where a distinct shape materially improves recognition.
