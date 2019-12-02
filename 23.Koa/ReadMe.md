note:

1. npm i koa

2. 创建一个服务环境

3. 热重载：node环境  nodemon
   npm i -g nodemon   
   启动 nodemon app.js
   
   核心
   
   1. request 处理请求，并包装对象
   2. middlewares 通过use方法注册中间件
   3. response 把经过中间件处理的数据进行输出
   
   Koa提供了一些非要，简洁的API
   
   Application
      Context
         Request
         Response
   
   
   Koa
   
   Ctx.request 对象，包含了请求信息中各个设置
   
   Ctx.response 对象，包含了相应信息中各个设置
   
   Koa
   
   中间件
   
   koa-static-cache 静态文件代理服务
   koa-router 路由
   koa-swig  模板引擎
   koa-bodyparser  body 解析
   koa-multer  formData 解析
