import { host, PALETTE_AREA, requestTheme, THEMES_AREA } from '@hermes/plugin-sdk'

const ID = 'openai-shadcn'
const STYLE_ID = 'openai-shadcn-layout-v1'

const theme = {
  name: ID,
  label: 'OpenAI Shadcn',
  description: 'Premium neutral interface with quiet contrast and modern macOS typography',
  typography: {
    fontSans: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
    fontMono: '"SF Mono", Menlo, Monaco, Consolas, monospace'
  },
  colors: {
    background: '#f7f7f8',
    foreground: '#18181b',
    card: '#ffffff',
    cardForeground: '#18181b',
    muted: '#eeeeef',
    mutedForeground: '#62626a',
    popover: '#ffffff',
    popoverForeground: '#18181b',
    primary: '#18181b',
    primaryForeground: '#fafafa',
    secondary: '#ececef',
    secondaryForeground: '#27272a',
    accent: '#e4e4e7',
    accentForeground: '#18181b',
    border: '#d7d7db',
    input: '#d4d4d8',
    ring: '#71717a',
    midground: '#52525b',
    midgroundForeground: '#ffffff',
    composerRing: '#71717a',
    destructive: '#b42318',
    destructiveForeground: '#ffffff',
    sidebarBackground: '#ececee',
    sidebarBorder: '#d5d5d8',
    userBubble: '#e9e9eb',
    userBubbleBorder: '#d4d4d8'
  },
  darkColors: {
    background: '#212121',
    foreground: '#f4f4f5',
    card: '#2a2a2a',
    cardForeground: '#f4f4f5',
    muted: '#303030',
    mutedForeground: '#b4b4b8',
    popover: '#2b2b2b',
    popoverForeground: '#f4f4f5',
    primary: '#f4f4f5',
    primaryForeground: '#18181b',
    secondary: '#333333',
    secondaryForeground: '#f4f4f5',
    accent: '#3a3a3a',
    accentForeground: '#fafafa',
    border: '#424242',
    input: '#454545',
    ring: '#a1a1aa',
    midground: '#d4d4d8',
    midgroundForeground: '#18181b',
    composerRing: '#8b8b93',
    destructive: '#ef6a63',
    destructiveForeground: '#18181b',
    sidebarBackground: '#171717',
    sidebarBorder: '#303030',
    userBubble: '#303030',
    userBubbleBorder: '#454545'
  }
}

const css = `
:root[data-hermes-theme='openai-shadcn'] {
  --radius-scalar: 0.8;
  --dt-spacing-mul: 1.04;
  --conversation-text-font-size: 0.9375rem;
  --paragraph-gap: 0.8rem;
}

:root[data-hermes-theme='openai-shadcn'][data-hermes-mode='dark'] {
  --dt-background: #212121 !important;
  --background: #212121 !important;
  --sidebar: #171717 !important;
  --popover: #2b2b2b !important;
  --openai-shell: #101010;
  --openai-panel-border: #303030;
  --openai-panel-shadow: 0 4px 16px rgb(0 0 0 / 10%);
  --openai-dot: rgb(255 255 255 / 1.5%);
}

:root[data-hermes-theme='openai-shadcn'][data-hermes-mode='light'] {
  --dt-background: #f7f7f8 !important;
  --background: #f7f7f8 !important;
  --sidebar: #ececee !important;
  --popover: #ffffff !important;
  --openai-shell: #e7e7e9;
  --openai-panel-border: #d6d6da;
  --openai-panel-shadow: 0 4px 16px rgb(24 24 27 / 5%);
  --openai-dot: rgb(24 24 27 / 2%);
}

:root[data-hermes-theme='openai-shadcn'] body {
  letter-spacing: -0.006em;
  background-color: var(--openai-shell);
  background-image: radial-gradient(circle, var(--openai-dot) 0.65px, transparent 0.8px);
  background-position: 0 0;
  background-size: 18px 18px;
}

/* Floating workspace shell: keep Hermes' real pane tree and resizers, but
   separate its zones with spatial gutters instead of legacy full-height seams. */
:root[data-hermes-theme='openai-shadcn'] [data-contrib-shell] {
  background-color: var(--openai-shell) !important;
  background-image: radial-gradient(circle, var(--openai-dot) 0.65px, transparent 0.8px) !important;
  background-position: 0 0 !important;
  background-size: 18px 18px !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-contrib-shell] > div:has(> [data-tree-split]),
:root[data-hermes-theme='openai-shadcn'] [data-contrib-shell] > div:has(> [data-tree-group]) {
  padding: 8px 8px 6px;
  background: transparent;
}

:root[data-hermes-theme='openai-shadcn'] [data-tree-split] {
  gap: 8px;
}

:root[data-hermes-theme='openai-shadcn'] [data-tree-group] {
  overflow: hidden;
  padding: 7px 5px 5px;
  border: 1px solid var(--openai-panel-border);
  border-radius: 16px;
  background: var(--dt-background) !important;
  box-shadow: var(--openai-panel-shadow);
}

:root[data-hermes-theme='openai-shadcn'] [data-tree-group]:has([data-slot='sidebar']) {
  background: var(--sidebar) !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-tree-group] [data-zone-tabstrip] {
  border-radius: 15px 15px 0 0;
}

/* The 8px gutter replaces the old visible seam; the hit target remains live. */
:root[data-hermes-theme='openai-shadcn'] [data-tree-split] > div > [role='separator'] > span {
  opacity: 0 !important;
}

@media (max-width: 900px) {
  :root[data-hermes-theme='openai-shadcn'] [data-contrib-shell] > div:has(> [data-tree-split]),
  :root[data-hermes-theme='openai-shadcn'] [data-contrib-shell] > div:has(> [data-tree-group]) {
    padding: 5px 5px 4px;
  }

  :root[data-hermes-theme='openai-shadcn'] [data-tree-split] {
    gap: 5px;
  }

  :root[data-hermes-theme='openai-shadcn'] [data-tree-group] {
    border-radius: 13px;
  }
}

:root[data-hermes-theme='openai-shadcn'] [data-chat-surface][data-chat-unfocused] {
  opacity: 1 !important;
  filter: none !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-chat-surface] {
  transition: none !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='statusbar'] {
  width: calc(100% - 16px);
  min-height: 24px;
  height: 24px;
  align-self: center;
  margin: 0 8px 6px;
  padding-inline: 6px;
  overflow: hidden;
  border: 1px solid var(--openai-panel-border);
  border-radius: 10px;
  background: color-mix(in srgb, var(--dt-background) 90%, var(--openai-shell)) !important;
  box-shadow: none !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='sidebar-wrapper'],
:root[data-hermes-theme='openai-shadcn'] [data-slot='sidebar'] {
  background-color: var(--sidebar) !important;
  border-color: var(--dt-sidebar-border);
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='sidebar-menu-button'],
:root[data-hermes-theme='openai-shadcn'] [data-slot='button'] {
  border-radius: 10px;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='profile-dropdown'] {
  min-height: 26px;
  padding-inline: 8px !important;
  border: 1px solid transparent;
  border-radius: 9px;
  box-shadow: none !important;
  transition:
    background-color 120ms ease,
    border-color 120ms ease,
    color 120ms ease;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='profile-dropdown']:hover {
  border-color: color-mix(in srgb, var(--ui-stroke-secondary) 72%, transparent);
  background-color: color-mix(in srgb, var(--dt-card) 46%, transparent) !important;
  box-shadow: none !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='profile-dropdown'][data-state='open'] {
  border-color: var(--ui-stroke-secondary);
  background-color: color-mix(in srgb, var(--dt-card) 64%, transparent) !important;
  box-shadow: none !important;
}

:root[data-hermes-theme='openai-shadcn'] :is(
  [data-slot='sidebar'],
  [data-slot='statusbar'],
  [data-slot='profile-rail'],
  [data-tree-group]
) button:not(:disabled):not([class*='bg-primary']):not([class*='rounded-full']) {
  box-shadow: none !important;
  transition:
    background-color 120ms ease,
    border-color 120ms ease,
    color 120ms ease,
    opacity 120ms ease !important;
}

:root[data-hermes-theme='openai-shadcn'] :is(
  [data-slot='sidebar'],
  [data-slot='statusbar'],
  [data-slot='profile-rail'],
  [data-tree-group]
) button:not(:disabled):not([class*='bg-primary']):not([class*='rounded-full']):hover {
  background-color: color-mix(in srgb, var(--dt-card) 48%, transparent) !important;
  border-color: color-mix(in srgb, var(--ui-stroke-secondary) 70%, transparent) !important;
  color: var(--ui-text-primary) !important;
  box-shadow: none !important;
  filter: none !important;
  transform: none !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-contrib-shell] > div:first-of-type button {
  min-width: 28px;
  min-height: 28px;
  border-radius: 8px !important;
  box-shadow: none !important;
  transition:
    background-color 120ms ease,
    color 120ms ease,
    opacity 120ms ease !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-contrib-shell] > div:first-of-type button:hover {
  background-color: color-mix(in srgb, var(--dt-card) 46%, transparent) !important;
  color: var(--ui-text-primary) !important;
  box-shadow: none !important;
  filter: none !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='aui_user-message-root'] button:hover {
  background-color: inherit !important;
  border-color: inherit !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='composer-dock'] {
  width: calc(min(48rem, calc(100% - 2.5rem)) + 10px);
  padding-bottom: max(0.9rem, var(--composer-shell-pad-block-end));
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='composer-root'] {
  --composer-fill: color-mix(in srgb, var(--dt-card) 94%, var(--dt-background));
  --composer-ring-strength: 0.58;
  border-radius: 16px;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='composer-surface'] {
  border-radius: 16px;
  border-color: var(--ui-stroke-secondary) !important;
  background: var(--composer-fill) !important;
  box-shadow: 0 3px 12px rgb(0 0 0 / 7%);
  backdrop-filter: none;
}

:root[data-hermes-theme='openai-shadcn'][data-hermes-mode='light'] [data-slot='composer-surface'] {
  box-shadow: 0 3px 12px rgb(24 24 27 / 5%);
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='composer-root']:focus-within [data-slot='composer-surface'] {
  border-color: color-mix(in srgb, var(--dt-composer-ring) 12%, var(--ui-stroke-secondary)) !important;
  box-shadow: 0 4px 14px rgb(0 0 0 / 9%);
}

:root[data-hermes-theme='openai-shadcn'][data-hermes-mode='light'] [data-slot='composer-root']:focus-within [data-slot='composer-surface'] {
  box-shadow: 0 4px 14px rgb(24 24 27 / 6%);
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='composer-rich-input'] {
  min-height: 2.75rem;
  padding-block: 0.65rem;
  font-size: 0.9375rem;
  line-height: 1.5;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='composer-surface'] [class*='grid-area:menu'] {
  align-self: center;
  transform: translateY(-3px);
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='code-card'],
:root[data-hermes-theme='openai-shadcn'] [data-slot='file-diff-panel'] {
  overflow: hidden;
  border: 1px solid var(--ui-stroke-secondary);
  border-radius: 12px;
  background: color-mix(in srgb, var(--ui-bg-editor) 94%, var(--dt-background)) !important;
  box-shadow: none !important;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='code-card-body'] {
  padding: 4px 5px;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='tool-block'] {
  overflow: hidden;
  border-radius: 11px;
}

:root[data-hermes-theme='openai-shadcn'] :is(
  [data-slot='card'],
  [data-slot='dialog-content'],
  [data-slot='sheet-content'],
  [data-slot='popover-content'],
  [data-slot='dropdown-menu-content'],
  [data-slot='context-menu-content'],
  [data-slot='command'],
  [role='menu']
) {
  border-radius: 14px;
}

:root[data-hermes-theme='openai-shadcn'] :is(
  [data-slot='popover-content'],
  [data-slot='dropdown-menu-content'],
  [data-slot='context-menu-content'],
  [role='menu']
) {
  background-color: var(--theme-elevated-seed) !important;
  border-color: color-mix(in srgb, var(--dt-border) 88%, transparent) !important;
  box-shadow: 0 10px 28px rgb(0 0 0 / 16%);
  backdrop-filter: none;
}

:root[data-hermes-theme='openai-shadcn'][data-hermes-mode='light'] :is(
  [data-slot='popover-content'],
  [data-slot='dropdown-menu-content'],
  [data-slot='context-menu-content'],
  [role='menu']
) {
  box-shadow: 0 10px 28px rgb(24 24 27 / 10%);
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='aui_intro'] > div > p:last-child {
  display: none;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='aui_assistant-message-content'] {
  line-height: 1.62;
}

:root[data-hermes-theme='openai-shadcn'] [data-slot='aui_user-message-root'] {
  border-radius: 14px;
}

:root[data-hermes-theme='openai-shadcn'] *:focus-visible {
  outline-color: var(--dt-ring);
  outline-offset: 2px;
}
`

function installStyle(ctx) {
  document.getElementById(STYLE_ID)?.remove()
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = css
  document.head.appendChild(style)
  ctx.onDispose(() => style.remove())
}

function activate(ctx, message = true) {
  ctx.storage.set('enabled-v1', true)
  const ok = requestTheme(ID)
  if (message) {
    host.notify({
      kind: ok ? 'success' : 'error',
      message: ok ? 'OpenAI Shadcn theme activated.' : 'OpenAI Shadcn theme is not available.'
    })
  }
  return ok
}

function restoreDefault(ctx) {
  ctx.storage.set('enabled-v1', false)
  const ok = requestTheme('nous')
  host.notify({
    kind: ok ? 'success' : 'error',
    message: ok ? 'Default Hermes theme restored.' : 'Default Hermes theme is not available.'
  })
}

export default {
  id: ID,
  name: 'OpenAI Shadcn Theme',
  description: 'Premium neutral light/dark theme plus durable layout polish.',
  register(ctx) {
    ctx.register({ id: 'theme', area: THEMES_AREA, data: theme })
    installStyle(ctx)

    ctx.registerMany([
      {
        id: 'activate',
        area: PALETTE_AREA,
        data: {
          id: 'openai-shadcn.activate',
          label: 'Theme: activate OpenAI Shadcn',
          keywords: ['theme', 'appearance', 'openai', 'shadcn', 'modern'],
          run: () => activate(ctx, true)
        }
      },
      {
        id: 'restore-default',
        area: PALETTE_AREA,
        data: {
          id: 'openai-shadcn.restore-default',
          label: 'Theme: return to Hermes default',
          keywords: ['theme', 'appearance', 'default', 'rollback', 'nous'],
          run: () => restoreDefault(ctx)
        }
      }
    ])

    const enabled = ctx.storage.get('enabled-v1', null)
    if (enabled === null) {
      ctx.storage.set('enabled-v1', true)
    }

    if (enabled !== false) {
      queueMicrotask(() => activate(ctx, false))
    }
  }
}
