//  usage:  node miaov app i
//  miaov: cli 脚本文件
//  app  要生成项目的名称
// i 表示要同时生成index.html 文件

const fs = require('fs')


// process.argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数。
// 第一个元素是 process.execPath。
// 如果需要访问 argv[0] 的原始值，参阅 process.argv0。
// 第二个元素将是正在执行的 JavaScript 文件的路径。 其余元素将是任何其他命令行参数。

// 1.获取用户要生成的项目名称：process

/*

运行 node cli.js  app -i

[ 'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Ly_Study\\React_Study\\ES6+TS\\19.FileSystem\\node_Cli\\cli.js',
  'app',
  '-i' ]
*/

// console.log(process.argv)

let appName = process.argv[2] // 获取项目的名称

// 根据项目名称生成指定的目录

console.log(__dirname)

let appRoot = __dirname + '/' + appName

console.log(appRoot)

if (fs.existsSync(appRoot)) { // 如果当前目录存在

    console.log('项目已经存在，请勿重复创建！')

    process.exit() // 结束当前进程

} else {

    fs.mkdirSync(appRoot)
    fs.mkdirSync(appRoot + '/images')
    fs.mkdirSync(appRoot + '/css')
    fs.mkdirSync(appRoot + '/js')

    console.log('项目创建完成！')

    // Vue-cli 等脚手架工具，是讲终端写好的配置，通过node的net模块进行拷贝，下载
}

// 判断是否存在-i的选项
if (process.argv.includes('-i')) {

    fs.writeFileSync(
        appRoot + '/index.html',
        `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>App</title>
</head>
<body>
    <h1>app</h1>
</body>
</html>
        `
    )

}

