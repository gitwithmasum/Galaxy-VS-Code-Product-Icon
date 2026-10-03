# Masum Galaxy // Product Icons

A futuristic, galaxy-inspired **VS Code Product Icon Theme** by **Masum Billah**.

**Version 1.3.0 · Free · MIT**

Version **1.3.0** is a visual redesign focused on making the icons feel more deliberate and premium, not just different. The main UI icons now use bolder silhouettes, chamfered geometry, compact orbital/spark details and clearer semantic shapes at small VS Code sizes.

> VS Code Product Icon Themes are monochrome glyph themes. The icon shape comes from this extension, while the actual icon color comes from the active VS Code color theme.

## What changed in v1.3

- redesigned Explorer with a futuristic folder/window silhouette and orbit accent
- redesigned Search with a clean magnifier + spark detail
- redesigned Source Control and Git Branch with clearer node connections
- redesigned Run with a stronger play symbol
- redesigned Extensions with a diamond-grid motif
- redesigned Testing with a futuristic flask
- redesigned Account with an orbital profile accent
- redesigned Settings with a compact hex/gear silhouette
- redesigned Terminal with a chamfered terminal frame
- redesigned Sync / Refresh with cleaner circular motion
- dedicated futuristic glyphs for Warning, Bell, Split, Add, Trash, Preview, Edit, Check, Pin, Cloud, Download and Upload
- dedicated Back / Forward / Up / Down navigation glyphs
- broader mappings across high-value VS Code UI actions while keeping unfamiliar controls on familiar defaults

## Install locally

```powershell
cd "D:\OneDrive\Web Development\Galaxy-VS-Code-Product-Icon"

git pull
npm.cmd install
npx.cmd vsce package

code --install-extension .\masum-galaxy-product-icons-1.3.0.vsix --force
```

Then activate:

```text
Ctrl + Shift + P
→ Preferences: Product Icon Theme
→ Masum Galaxy // Product Icons
```

Then run:

```text
Developer: Reload Window
```

## Development

Theme definition:

```text
producticons/masum-galaxy-product-icon-theme.json
```

Custom icon font:

```text
producticons/masum-galaxy-product-icons.woff
```

The font uses private-use glyphs from `U+E001` through `U+E024`.

## Design direction

- bold and recognizable before decorative
- futuristic chamfered geometry
- subtle orbital / spark accents
- compact shapes for 16–24 px UI sizes
- consistent with **Masum Galaxy // Future Code**
- consistent with **Masum Galaxy // File Icons**

## Repository

https://github.com/gitwithmasum/Galaxy-VS-Code-Product-Icon

## License

MIT
