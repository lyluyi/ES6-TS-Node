

    // 在node中，tcp协议，基于net模块实现的

    const net = require('net')
    const fs = require('fs')

    // 创建一个服务器端
    // 1. 监听地址及端口
    // 2. 处理发送到当前监听地址以及端口的数据
    // 3. 返回（发送）数据到连接的客户端

    // net.Server

    const server = net.createServer((connection) => {

        // connect 监听器
        console.log('客户端已连接')

        let data = fs.readFileSync('./Server_img/1.jpg')

        connection.write(data)
        console.log('服务端已发送图片数据包')
        connection.end()

        // connection.pipe(connection)

        connection.on('end', () => {
            console.log('客户端已断开连接')
        })




    })

    server.on('error', () => {
        throw err
    })



    server.listen(8124, () => {
        console.log('服务端已启动')
    })
