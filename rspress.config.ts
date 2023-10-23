import path from 'path'
import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: 'docs',
  title: 'Dolphin Admin',
  description:
    'Bring the best dev practices, Open-Source & light-weight admin system built with the newest tech stacks.',
  icon: '/dolphin-admin.png',
  logo: '/dolphin-admin.png',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/bit-ocean-studio/dolphin-admin-core'
      }
    ]
  }
})
