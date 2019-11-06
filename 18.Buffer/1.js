// process.stdin.on('data', function (data) {
//     console.log(data)
// })

// 111  <Buffer 31 31 31 0d 0a>


// Buffer
//
// 用于操作二进制数据的类（音视频、文件等等）
//
// 类似数据
// 长度固定
// 只能操作二进制数据
//
// Buffer类在Node.js 是一个全局变量，因此无需require

// console.log(global.Buffer)


// Buffer.alloc(size[, fill[, encoding]])
//
// 分配一份大小为size字节的新建的Buffer,如果fill为undefined，则
// 用0填充，默认encoding  utf-8

/*
    位 -> 字节 -> 字符
   0&1    8位00000000 或 11111111  2^8 256
*/

let bf1 = new Buffer(4)

console.log(bf1)  // <Buffer 00 00 00 00>  4个字节  只能存二进制值

bf1[0] = 1

// bf1[0] = 'a' // 无效

console.log(bf1)

