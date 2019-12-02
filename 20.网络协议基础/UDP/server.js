/*

 服务端：

    监听当前服务器上指定的ip与端口，如果有数据发送到IP和端口上，就进行处理

*/

const dgram = require('dgram')

//  创建一个socket类  socket用来处理网络数据的一个标准 API 对象
//  通过socket，就可以对网络数据进行读取和输出

/*

 dgram.socket 类

*/

const serverSocket = dgram.createSocket('udp4') // udp4 => ipv4

/*

    绑定监听的指定的地址以及端口

*/

serverSocket.bind(12345, '127.0.0.1')


// 监听

serverSocket.on('listening', () => {

    console.log('服务器开启成功，等待数据：')

})

// 当接收到数据的时候触发

serverSocket.on('message', data => {
    console.log('接收到了数据：' + data.toString())
})
