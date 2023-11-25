# 项目结构

## React

### /pages

#### 命名规范

- `[一级菜单]/[菜单名称]/index.tsx`
- `[一级菜单]/[二级菜单]/[菜单名称]/index.tsx`

菜单名称使用小写字母，多个单词使用 `-` 连接。

#### 局部组件

如果需要拆分页面内组件，可以在菜单名称里添加 `/components` 目录，如：

`[一级菜单]/[菜单名称]/components/[组件名称]/index.tsx`

统一在 `index.tsx` 里导出组件，然后在页面中引用：

```tsx title="[一级菜单]/[菜单名称]/components/index.ts"
export { default as YourComponentName } from './YourComponentName'
```

```tsx title="[一级菜单]/[菜单名称]/index.tsx"
import { YourComponentName } from './components'
```

#### 懒加载

React Router 限制了懒加载的页面组件导出的方式，需要按如下格式书写：

Router 接受的是一个名为 `Component` 的非默认导出。

```tsx {1}
export function Component() {
  return <div>...</div>
}
```
