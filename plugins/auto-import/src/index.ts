import { utilsPreset, antdPreset, antdIconsPreset } from './presets'
import type { InlinePreset } from 'unimport'
import type { ImportsMap } from 'unplugin-auto-import/types'

export const dolphinAdminPresets: (ImportsMap | InlinePreset)[] = [utilsPreset]

export { antdPreset, antdIconsPreset }
