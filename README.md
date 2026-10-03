# Masum Galaxy // Product Icons

A futuristic, galaxy-inspired **VS Code Product Icon Theme** by **Masum Billah**.

**Version 1.2.0 · Free · MIT**

This extension customizes VS Code interface icons such as Explorer, Search, Source Control, Run and Debug, Extensions, Testing, Accounts, Settings, terminal actions, window controls, refresh/sync actions, warnings and common navigation controls. Version 1.2 redesigns the glyph font for much clearer recognition at small VS Code UI sizes and expands the set to 36 distinct custom glyphs mapped across more than 200 product icon IDs.

> Product Icon Themes are single-color glyph themes. VS Code gets each icon's color from the active color theme, so this pack is designed to pair especially well with dark cyan/violet Galaxy color themes.

## Included in v1.2

- Explorer / Files
- Search
- Source Control
- Run and Debug
- Extensions
- Testing
- Accounts
- Settings
- New File / New Folder
- Refresh / Sync
- Collapse All
- Close
- Split Editor
- Terminal
- Notifications
- Git Branch
- Warning
- More Actions
- Minimize / Maximize / Restore
- Add
- Chevron navigation
- Git pull/push/fetch and cloud sync actions
- Terminal Bash / CMD / PowerShell / Ubuntu aliases
- Panel/layout controls
- Notification controls
- Additional testing, debugging, extension and Explorer actions
- Dedicated icons for Back / Forward / Up / Down navigation
- Dedicated Trash, Eye/Preview, Edit, Check, Pin, Cloud, Download and Upload glyphs
- Reworked Activity Bar icons so Explorer, Search, Source Control, Run, Extensions, Testing, Account and Settings are easier to identify

## Install locally

```powershell
cd "D:\OneDrive\Web Development\Galaxy-VS-Code-Product-Icon"
npm.cmd install
npx.cmd vsce package
code --install-extension .\masum-galaxy-product-icons-1.0.0.vsix --force
```

Then open:

```text
Ctrl + Shift + P
→ Preferences: Product Icon Theme
→ Masum Galaxy // Product Icons
```

If the UI does not refresh immediately:

```text
Developer: Reload Window
```

## Development

The product icon definition is located at:

```text
producticons/masum-galaxy-product-icon-theme.json
```

The custom WOFF icon font is located at:

```text
producticons/masum-galaxy-product-icons.woff
```

Open this repository in VS Code and press **F5** to test the theme in an Extension Development Host.

## Design direction

- futuristic Galaxy geometry
- clean silhouettes at small UI sizes
- minimal visual noise
- consistent proportions
- designed to pair with **Masum Galaxy // Future Code** and **Masum Galaxy // File Icons**

## Repository

https://github.com/gitwithmasum/Galaxy-VS-Code-Product-Icon

## License

MIT
