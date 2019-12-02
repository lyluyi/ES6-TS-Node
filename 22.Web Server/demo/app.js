// 后端入口文件

// web-server  提供web浏览器服务的工具

const http = require('http')

// 创建http服务

const app = http.createServer((req, res) => {

    console.log('客户端有请求！')

    // IncomingMessage 对象由 http.Server 或 http.ClientRequest 创建，
    // 并分别作为第一个参数传给 'request' 和 'response' 事件。
    // 它可用于访问响应状态、消息头、以及数据。

    console.log(req.httpVersion)
    console.log(req.method)
    console.log(req.headers)
    console.log(req.url)

    res.end('message: res.end()')

})

// 指定app监听的端口和网络

app.listen(80, () => {
    console.log('服务器启动成功了！')
})

