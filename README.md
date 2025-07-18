# IP地理位置查询工具

一个基于API的IP地理位置查询工具，支持两种代理模式：Node.js代理和CORS代理。

## 功能特性

- 🔍 IP地址地理位置查询
- 🏙️ 城市详细信息查询
- 🎨 现代化响应式界面
- 🚀 双模式代理支持（Node.js代理 + CORS代理）
- 🔄 可切换代理模式
- 📱 移动端适配

## 代理模式

### Node.js代理模式（推荐）
- ✅ 稳定可靠
- ✅ 无跨域限制
- ✅ 高性能
- ❗ 需要启动本地服务器

### CORS代理模式
- ✅ 无需本地服务器
- ✅ 部署简单
- ❗ 依赖第三方服务
- ❗ 可能不稳定

## Cloudflare Pages 部署说明

- 支持 Cloudflare Pages Functions 代理（无需本地服务器）
- 代理 API 路径与本地一致：`/api/ip/:ip` 和 `/api/city/:lat/:lng`
- 部署时将 `functions` 目录包含到项目根目录
- 构建命令：`npm install`
- 构建输出目录：`/`
- 框架预设：无

## 本地运行说明

- 启动 Node.js 代理服务器：`npm start`
- 访问地址：`http://localhost:3000/index.html`
## 启动方式说明

### 本地启动
1. 安装依赖：`npm install`
2. 启动代理服务器：`npm start`
3. 访问页面：`http://localhost:3000/index.html`
4. API 代理路径示例：`http://localhost:3000/api/ip/8.8.8.8`

### Cloudflare Pages 启动
1. 将项目推送到 GitHub 并连接 Cloudflare Pages
2. Pages 设置：
   - 构建命令：`npm install`
   - 构建输出目录：`/`
   - 框架预设：无
3. 部署后访问你的 Pages 域名，如 `https://your-project.pages.dev/index.html`
4. API 代理路径示例：`https://your-project.pages.dev/api/ip/8.8.8.8`
- API 路径同 Cloudflare Pages

## 代码结构说明

- `proxy-server.js`：本地 Node.js 代理入口
- `utils/proxy.js`：通用代理核心逻辑
- `functions/api/ip.js`、`functions/api/city.js`：Cloudflare Pages Functions 入口
