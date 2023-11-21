const author = 'Bruce Song'
const version = '0.0.1'

export const metadata = Object.freeze({
  'zh-CN': {
    name: '海豚管理系统',
    description: '开源、轻量级、优雅的后台管理系统',
    version,
    author,
    customContent: '由 Bit Ocean 提供技术支持 - http://github.com/bit-ocean-studio'
  },
  'en-US': {
    name: 'Dolphin Admin',
    description: 'Open source, lightweight, elegant admin system',
    version,
    author,
    customContent: 'Powered by Bit Ocean - http://github.com/bit-ocean-studio'
  }
})

export const i18n = Object.freeze({
  'zh-CN': {
    author: '作者：',
    version: '版本：'
  },
  'en-US': {
    author: 'Author: ',
    version: 'Version: '
  }
})
