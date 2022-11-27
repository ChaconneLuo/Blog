# Blog

基于Web的个人博客

## Server模块

### 服务端

基于Nest.js TypeOrm框架，使用Typescript编写，使用Mysql存储信息(其实感觉MongoDB这种非关系型数据库对文章存储更友好)。

功能：登录验证，上传博客，获取博客信息，Jwt授权(使用路由守卫)等功能。

## Admin模块

### 博客管理端

基于React框架，使用Typescript编写，使用了React-Router进行路由跳转，使用了Scss管理CSS样式，使用Redux
Redux/toolkit进行状态管理，使用Prettier进行代码格式化，使用Marked进行markdown的转换。

功能：通过填写 markdown源信息，标题，标签，上传博客。并提供了博客列表功能和markdown实时预览功能。

## Reader模块
### 博客阅读端
基于Next.js框架与 Typescript 编写，使用了next-seo进行SEO优化，使用SSG(Static Site Generation)优化加载速度。

功能：通过Next.js动态路由获取/article/[id]来实现跳转到对应的页面，在id不存在时跳转到404页面。