import type { InlinePreset } from 'unimport'
import type { ImportsMap } from 'unplugin-auto-import/types'

export const utilsPreset: ImportsMap | InlinePreset = {
  from: '@dolphin-admin/utils',
  imports: ['AuthUtils', 'BrowserUtils', 'LangUtils', 'ThemeUtils', 'TimeUtils']
}
