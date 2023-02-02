# Blog

基于 Web 的个人博客

## Server 模块

### 服务端

基于 Nest.js TypeOrm 框架，使用 Typescript 编写，使用 Mysql 存储信息(其实感觉 MongoDB 这种非关系型数据库对文章存储更友好)。

功能：登录验证，上传博客，获取博客信息，Jwt 授权(使用路由守卫)等功能。

## Admin 模块

### 博客管理端

基于 React 框架，使用 Typescript 编写，使用了 React-Router 进行路由跳转，使用了 Scss 管理 CSS 样式，使用 Redux
Redux/toolkit 进行状态管理，使用 Prettier 进行代码格式化，使用 Marked 进行 markdown 的转换。

功能：通过填写 markdown 源信息，标题，标签，上传博客。并提供了博客列表功能和 markdown 实时预览功能。

## Reader 模块

### 博客阅读端

基于 Next.js 框架与 Typescript 编写，使用了 next-seo 进行 SEO 优化，使用同构优化了首屏加载速度。

功能：通过 Next.js 动态路由获取/article/[id]来实现跳转到对应的页面，在 id 不存在时跳转到 404 页面。
