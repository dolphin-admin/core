import path from 'node:path'

import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'styles/index.css'),
  icon: '/dolphin-admin.png',
  logo: '/dolphin-admin.png',
  lang: 'zh',
  builderConfig: {
    dev: {
      port: 4065
    }
  },
  themeConfig: {
    locales: [
      {
        lang: 'en',
        label: 'English',
        title: 'Dolphin Admin',
        description:
          'Bring the best dev practices, Open-Source & light-weight admin system built with the newest tech stacks.',
        outlineTitle: 'Outline',
        lastUpdated: true,
        lastUpdatedText: 'Last Updated',
        prevPageText: 'Previous',
        nextPageText: 'Next',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/bit-ocean-studio/dolphin-admin-core/tree/main/docs',
          text: '📝 Edit this page on GitHub'
        }
      },
      {
        lang: 'zh',
        label: '简体中文',
        title: 'Dolphin Admin',
        description:
          '基于最佳实践、最新技术栈的轻量级开源后台管理系统，开箱即用。',
        outlineTitle: '目录',
        lastUpdated: true,
        lastUpdatedText: '上次更新',
        prevPageText: '上一篇',
        nextPageText: '下一篇',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/bit-ocean-studio/dolphin-admin-core/tree/main/docs',
          text: '📝 在 GitHub 上编辑此页'
        }
      }
    ],
    footer: {
      message: 'Made with ❤️ by Bruce Song from Bit Ocean'
    },
    hideNavbar: 'auto',
    enableContentAnimation: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/bit-ocean-studio/dolphin-admin-core'
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://discord.gg/NfPAGuz7Em'
      }
    ]
  },
  markdown: {
    // checkDeadLinks: true,
    showLineNumbers: true,
    highlightLanguages: [
      'js',
      'jsx',
      'ts',
      'tsx',
      'json',
      'css',
      'scss',
      'bash',
      'md',
      'mdx',
      'toml',
      'diff'
    ]
  }
})
