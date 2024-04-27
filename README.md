# ww-space 作品集展示项目 - 后台

这个项目模仿了dribbble网页设计的视觉效果（ps仅作为练习使用），使用 React + Node.js 搭建的个人作品展示项目，我从规划项目，目前已部署上线在 Ubuntu 云服务器中。项目分为前台、后台、服务端三个代码仓，整体都使用 TypeScript 开发，并配置了 Eslint + Prettier 进行代码风格规范优化。

🟢 本仓库为后台部分。

#### 查看管理后台与服务端:    [🔎 管理后台](https://github.com/tomoko-tiba/ww-space-admin-react)  [⚛ 前台](https://github.com/tomoko-tiba/ww-space-portfolio-react/tree/master)  

## 后台介绍

一套可管理用户和作品的 Node.js 后端服务程序：

- 使用 Express 框架，通过 Prisma ORM 管理和操作 SQLite 数据库。
- 通过 Session 和自定义 Express 中间件实现用户登录拦截。
- 参照 RESTful API 风格，实现了用户、作品、分类管理三个模型的定义、关联和增删改查。
- 通过 PM2 部署，使用 Nginx 反向代理到指定路径。

## 使用

```
# install dependency
npm install

# develop
npm run pm2:start 
```

创建.env配置文件，创建自己的密钥SESSION_SECRET_KEY。
``` Javascript
// src/index.ts
app.use(session({
  secret: process.env.SESSION_SECRET_KEY as string, // 替换为您自己的秘密密钥
  resave: false,
  saveUninitialized: true
}))
```