import type { InlinePreset, PresetImport } from 'unimport'
import type { ImportsMap } from 'unplugin-auto-import/types'

interface Options {
  prefix?: string
}

const AntdComponents = [
  'Form',
  'Input',
  'Button',
  'Checkbox',
  'Divider',
  'ConfigProvider',
  'Spin',
  'Typography',
  'Layout',
  'Breadcrumb',
  'Menu',
  'Select',
  'Space',
  'Popover',
  'Dropdown',
  'Avatar',
  'Tooltip'
]

const InnerAntdComponents: (PresetImport | InlinePreset)[] = [
  ['theme', 'AntdTheme'],
  ['App', 'AntdApp'],
  ['message', 'AMessage']
]

const buildAntdImports = (prefix?: string): PresetImport[] => {
  if (!prefix) return AntdComponents
  return AntdComponents.map((component) => [component, `${prefix}${component}`])
}

export const antdPreset = (options?: Options): ImportsMap | InlinePreset => {
  const { prefix } = options ?? {}

  return {
    from: 'antd',
    imports: [...buildAntdImports(prefix), ...InnerAntdComponents]
  }
}

export const antdIconsPreset = (): ImportsMap | InlinePreset => ({
  from: '@ant-design/icons',
  imports: [['default', 'AIcon']]
})
