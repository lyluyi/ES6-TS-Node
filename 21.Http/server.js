

const http = require('http')

const server = http.createServer()

server.on('req', () => {

    console.log('接受到了请求')

})

// 0.0.0.0 通配所有的ip地址
server.listen(80, '0, 0, 0, 0')