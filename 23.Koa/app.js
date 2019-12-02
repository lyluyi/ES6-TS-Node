const Koa = require('koa') // http 包装过的http
const KoaStaticCache = require('koa-static-cache')
const Router = require('koa-router')

// 创建一个httpfuwuqi，监听请求，http.createServer()
const app = new Koa() // 这里就相当于创建了一个Application对象

const router = new Router()

//  通过koaStaticCache处理静态类资源
app.use(KoaStaticCache(__dirname + '/static', {
    // 选项设置
    // prefix: URL前缀 默认.
    // magAge： 缓存时间，单位毫秒，默认为0
    // gzip：启用gzip压缩传输，默认为true

    prefix: '/public' // 如果当前请求的url是以'/public'开始，则作为静态资源请求

}))

// Application
// Context
// Request
// Response


// next: 中间件函数 -> 相当于迭代器

// // 注册中间件函数 use注册一个中间件
// app.use((ctx, next) =>{
//
//     // ctx：koa处理过的对象
//
//     console.log(1)
//     ctx.body = 'Hello Koa'  // 'Hello Koa'
//
//     // 不推荐直接在ctx对象上挂载属性，会有属性污染
//     // 推荐预留的 ctx.state
//     // ctx.n = Math.random()
//     ctx.state.n = Math.random()
//     ctx.throw(404, '页面不存在') // 默认500
//     // console.log(ctx.throw('404', '页面不存在'))
//     // next() // 调用迭代器，下一个中间件函数才会被调用
//
// })
//
// // 注册第二个中间件函数
// app.use((ctx, next) =>{
//
//     // ctx：koa处理过的对象
//     console.log(2)
//     ctx.body += 'Koa' // 'Hello Koa'
//     // console.log(ctx.n)
//     console.log(ctx.state.n)
//     next()
// })
//
// // 错误
// app.use((ctx, next) =>{
//
//     console.log('错误、异常抛出！')
//     // throw  new Error()
//
// })



app.on('error', err => {
    console.log(err)
})

// 注册路由
router.get('/', (ctx, next) => {
    ctx.body = '首页'
})


// 子路由
const userRouter = new Router()

userRouter.get('/', (ctx, next) => {
    ctx.body = '用户user'
})

userRouter.get('/address', (ctx, next) => {
    ctx.body = '用户地址/user/address'
})

// user
router.use('/user', userRouter.routes())

// 子路由 使用前缀的方式
const itemRouter = new Router({
    prefix: 'item'
})

itemRouter.get('/add', (ctx, next) => {
    ctx.body = '添加物品'
})

// 子路由 使用前缀的方式
const goodsRouter = new Router()

// 动态路由 router.get('/user/:id/', cb)  动态路由通过ctx.params对象获取
goodsRouter.get('/goods/:id', (ctx, next) => {

    //  /list/1?order=desc  URL生成器
    console.log( Router.url('/list', {page:1}, {query: {order: 'desc'}}) )

    ctx.body = '商品ID'
    console.log(ctx.params)
})

// 路由重定向
// router.redirect('/admin', '/user', 301);

// 挂载路由 注册路由中间件
app.use(router.routes())
app.use(itemRouter.routes())
app.use(goodsRouter.routes())

// 监听当前机器的地址和端口
app.listen(8080)