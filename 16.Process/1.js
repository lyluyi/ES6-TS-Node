// process 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。
// 作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。
// 它也可以使用 require() 显式地访问：

// console.log(process)
// console.log(process.memoryUsage()) // cpu使用情况
//
//
// console.log(process.env)
//
// if (process.env.mode === 'dev') { // 电脑高级设置中的环境变量，mode === 'dev'
//
//     console.log('开发模式，会打印错误及报错信息')
//
// } else {
//     console.log('生产模式')
// }

// let url = {
//     'dev': {
//
//     },
//     'test': {
//
//     },
//     'pro': {
//
//     }
// }
//
// let url[process.env.mode]  //


// process.stdin 属性返回连接到 stdin (fd 0) 的流。
// 它是一个 net.Socket 流（也就是双工流），除非 fd 0 指向一个文件，在这种情况下它是一个可读流。
//
// process.stdout 属性返回连接到 stdout (fd 1) 的流。 它是一个 net.Socket 流（也就是双工流），
// 除非 fd 1 指向一个文件，在这种情况下它是一个可写流。


// eg: 要求用户输入两个数值，然后把和输出到终端

// var num1, num2;
//
// // 向屏幕输出，提示信息，要求输入num1
// process.stdout.write('请输入num1的值：')
//
// // 监听用户的输入
// process.stdin.on('data', function (chunk) {
//
//     if (!num1) {
//
//         num1 = Number(chunk)
//
//         // 向屏幕输出，提示信息，要求输入num2
//         process.stdout.write('请输入num2的值：')
//     } else {
//         num2 = Number(chunk)
//
//         process.stdout.write('结果是：' + (num1 + num2))
//     }
//
// })


// 注意“ 重要的是porcess.stdout不同于node.js中其他的流

// vue-cli的交互式命令原理

var  fs = require('fs')

process.stdout.write('请输入你要创建的项目名称：')

process.stdin.on('data', (e) => {

    // console.log('项目名称： '， e.toString())

    // fs.mkdirSync(`./app`)

    // 键盘输入回车符需要处理 windows 回车符 '\r\n'
    fs.mkdirSync( e.toString().replace('\r\n', '') )

    process.stdout.write('项目创建成功！')


})


