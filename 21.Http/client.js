

const http = require('http')
const fs = require('fs')

// 创建客户端请求类
const client = http.request({
    // tcp需要
    host: 'www.baidu.com',
    port: 80,
    // http需要
    method: 'get',
    protocol: 'http:',
    path: '/'
}, res => {

    let content = ''
    // 服务端响应的时候触发
    res.on('data', data => {
        console.log(data.toString())
        content += data.toString()
    })

    res.on('end', () => {
        fs.writeFileSync('./baidu.html', content)
    })

})

client.write('')

// 数据发送结束

client.end()


// 创建客户端请求类
const client1 = http.request({
    // tcp需要
    host: 'www.baidu.com',
    port: 80,
    // http需要
    method: 'get',
    protocol: 'http:',
    path: '/img/bd_logo1.png?where=super'
}, res => {

    let content = Buffer.alloc(0)
    // 服务端响应的时候触发
    res.on('data', data => {
        console.log(data.toString())
        content = Buffer.concat([content, data])
    })

    res.on('end', () => {
        fs.writeFileSync('./baidu_logo.png', content)
    })

})

client1.write('')

// 数据发送结束

client1.end()

