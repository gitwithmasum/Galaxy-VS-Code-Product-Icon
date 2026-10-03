'use strict';

const vscode = require('vscode');

const IMPORTS_KEY = 'vscode_custom_css.imports';
const LOADER_EXTENSION_ID = 'be5invis.vscode-custom-css';
const LOADER_RELOAD_COMMAND = 'extension.updateCustomCSS';
const HOVER_FILE = 'ui/product-icon-hover.css';

function hoverUri(context) {
  return vscode.Uri.joinPath(context.extensionUri, 'ui', 'product-icon-hover.css').toString();
}

function isMasumProductHoverImport(value) {
  if (typeof value !== 'string') return false;
  const normalized = value.toLowerCase();
  if (!normalized.endsWith('/ui/product-icon-hover.css')) return false;

  return (
    normalized.includes('gitwithmasum.masum-galaxy-product-icons-') ||
    normalized.includes('galaxy-vs-code-product-icon/ui/')
  );
}

async function ensureLoaderInstalled() {
  if (vscode.extensions.getExtension(LOADER_EXTENSION_ID)) return true;

  const choice = await vscode.window.showInformationMessage(
    'Aurora hover uses the optional “Custom CSS and JS Loader” extension because VS Code Product Icon Theme API does not support hover animation by itself.',
    'Install Loader',
    'Cancel'
  );

  if (choice !== 'Install Loader') return false;

  try {
    await vscode.commands.executeCommand('workbench.extensions.installExtension', LOADER_EXTENSION_ID);
    return true;
  } catch {
    vscode.window.showErrorMessage(
      'Could not install Custom CSS and JS Loader automatically. Install “Custom CSS and JS Loader” from Extensions and run the command again.'
    );
    return false;
  }
}

async function updateHoverImport(context, enabled) {
  const config = vscode.workspace.getConfiguration();
  const current = config.get(IMPORTS_KEY, []);
  const safe = Array.isArray(current) ? current.filter((item) => typeof item === 'string') : [];
  const withoutOldHover = safe.filter((item) => !isMasumProductHoverImport(item));
  const next = enabled ? [...withoutOldHover, hoverUri(context)] : withoutOldHover;

  await config.update(IMPORTS_KEY, next, vscode.ConfigurationTarget.Global);
}

async function applyAndReload() {
  try {
    await vscode.commands.executeCommand(LOADER_RELOAD_COMMAND);
  } catch {
    vscode.window.showWarningMessage(
      'Run “Reload Custom CSS and JS” from the Command Palette. On Windows, VS Code may need Administrator permission.'
    );
    return;
  }

  try {
    await vscode.commands.executeCommand('workbench.action.reloadWindow');
  } catch {
    vscode.window.showWarningMessage('Reload the VS Code window manually to finish applying Aurora hover.');
  }
}

async function enableAuroraHover(context) {
  const ready = await ensureLoaderInstalled();
  if (!ready) return;

  await updateHoverImport(context, true);

  const choice = await vscode.window.showInformationMessage(
    'Masum Galaxy Product Icons: Aurora hover is ready.',
    'Apply & Reload Window',
    'Later'
  );

  if (choice === 'Apply & Reload Window') {
    await applyAndReload();
  }
}

async function disableAuroraHover(context) {
  await updateHoverImport(context, false);

  if (!vscode.extensions.getExtension(LOADER_EXTENSION_ID)) {
    vscode.window.showInformationMessage('Masum Galaxy Product Icons: Aurora hover import removed.');
    return;
  }

  const choice = await vscode.window.showInformationMessage(
    'Masum Galaxy Product Icons: Aurora hover is disabled.',
    'Apply & Reload Window',
    'Later'
  );

  if (choice === 'Apply & Reload Window') {
    await applyAndReload();
  }
}

async function migrateHoverImport(context) {
  const config = vscode.workspace.getConfiguration();
  const current = config.get(IMPORTS_KEY, []);
  if (!Array.isArray(current)) return;

  const hoverImports = current.filter(isMasumProductHoverImport);
  if (!hoverImports.length) return;

  const desired = hoverUri(context);
  if (hoverImports.includes(desired)) return;

  await updateHoverImport(context, true);
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'masumGalaxyProductIcons.enableAuroraHover',
      () => enableAuroraHover(context)
    ),
    vscode.commands.registerCommand(
      'masumGalaxyProductIcons.disableAuroraHover',
      () => disableAuroraHover(context)
    ),
    vscode.commands.registerCommand(
      'masumGalaxyProductIcons.reloadAuroraHover',
      async () => {
        const ready = await ensureLoaderInstalled();
        if (!ready) return;
        await updateHoverImport(context, true);
        await applyAndReload();
      }
    )
  );

  migrateHoverImport(context).catch(() => {});
}

function deactivate() {}

module.exports = { activate, deactivate };
