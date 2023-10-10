import { utilsPreset } from './presets'

const clsxPreset = {
  from: 'clsx',
  imports: [['default', 'clsx']]
}

const tanstackQueryPreset = {
  from: '@tanstack/react-query',
  imports: ['useQueryClient', 'useQuery', 'useMutation']
}

export const reactPreset = [
  'react',
  'react-router-dom',
  'react-i18next',
  'ahooks',
  tanstackQueryPreset,
  clsxPreset,
  utilsPreset
]
