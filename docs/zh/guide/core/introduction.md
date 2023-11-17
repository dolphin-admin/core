# 介绍

Dolphin Admin Core 是支撑 Dolphin Admin 前后端的工具库、包的集合。得益于同构架构，使得 Dolphin Admin 可以将前后端的底包放在这里一同管理。

- 但这并不代表底包源码修改困难，我们将会提供一个友好的方式修改源码而不依赖 Core。

## Monorepo

Dolphin Admin Core 采用 [Monorepo](https://en.wikipedia.org/wiki/Monorepo) 的方式管理包的版本和发布，基于 [pnpm Workspace](https://pnpm.io/workspaces) 和 [changesets](https://github.com/changesets/changesets)。

## 组成

### 工具类

`@dolphin-admin/utils` 是提供诸多通用的工具类。支持处理认证（Auth）、浏览器（Browser）、语言（Lang）、主题（Theme）、时间（Time）相关功能。

### 自动引入

`@dolphin-admin/auto-import` 内置了一些常用的预设、解析器，方便配置自动引入，帮助提升开发体验。

### 启动动画

`@dolphin-admin/bootstrap-animation` 提供了一个 Vite 插件用于显示启动动画，支持自定义应用名称、作者、描述等。
