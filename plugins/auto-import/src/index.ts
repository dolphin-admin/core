import type { InlinePreset } from 'unimport'
import type { ImportsMap } from 'unplugin-auto-import/types'

import { antdIconsPreset, antdPreset, utilsPreset } from './presets'

export const dolphinAdminPresets: (ImportsMap | InlinePreset)[] = [utilsPreset]

export { antdIconsPreset, antdPreset }
