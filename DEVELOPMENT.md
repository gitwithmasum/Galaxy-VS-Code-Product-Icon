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

## v1.2 glyph map

The custom font uses the Private Use Area from `U+E001` through `U+E024`.

Version 1.2 contains 36 distinct Galaxy glyphs and maps them across more than 200 VS Code product icon IDs. The focus is recognizable silhouettes at small sizes: files, search, source control, run, extensions, testing, account, settings, terminal, Git, navigation and common actions now use more semantically distinct shapes.
