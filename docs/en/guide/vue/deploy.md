# 部署

## 使用 Vercel 托管

1. 修改 Dolphin Admin 前端项目中 `/vercel.json` 文件：

```json title="vercel.json" {5}
{
  "rewrites": [
    {
      "source": "/base-api/:path*",
      "destination": "https://localhost:3000/:path*"
    },
    {
      "source": "/:path*",
      "destination": "/index.html"
    }
  ]
}
```

`vercel.json` 是 Vercel 托管的配置文件，这里主要是配置了重定向规则，将 `/base-api` 开头的请求重定向到后端服务，其他 URL 请求重定向到 `index.html`。  
将高亮行中的 `localhost:3000` 修改为线上后端服务的地址，此处 `/base-api` 仅作为重定向后端请求的一个标识。

2. 在 [Vercel 官网](https://vercel.com/) 注册个人账号。
3. 创建一个新的托管项目
4. 导入 Dolphin Admin 前端项目对应的 Git 仓库，使用默认的构建配置，Vercel 会自动检查项目中使用的框架，然后点击部署按钮。
5. 每当提交代码至 Git 时，Vercel 会自动构建和部署该项目。

## 使用 Netlify 托管

1. 修改 Dolphin Admin 前端项目中 `/netlify.toml` 文件：

```toml title="netlify.toml" {10}
[build.environment]
  NODE_VERSION = "20"

[build]
  publish = "dist"
  command = "pnpm build"

[[redirects]]
  from = "/base-api/*"
  to = "https://localhost:3000/:splat"
  status = 200
  force = true

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/manifest.webmanifest"
  [headers.values]
  Content-Type = "application/manifest+json"
```

`netlify.toml` 是 Netlify 托管的配置文件，这里主要是配置了构建环境、脚本、重定向规则等，将 `/base-api` 开头的请求重定向到后端服务，其他 URL 请求重定向到 `index.html`。  
将高亮行中的 `localhost:3000` 修改为线上后端服务的地址，此处 `/base-api` 仅作为重定向后端请求的一个标识。

2. 在 [Netlify 官网](https://www.netlify.com/) 注册个人账号。
3. 点击添加新的站点，选择从 Git 仓库导入项目。
4. 选择 Dolphin Admin 前端项目对应的 Git 仓库，使用默认的构建配置，然后点击部署按钮。
5. 每当提交代码至 Git 时，Netlify 会自动构建和部署该项目。

## 使用 Nginx 部署

TODO...
