// 流（stream）是 Node.js 中处理流式数据的抽象接口。 stream 模块用于构建实现了流接口的对象。
//
// Node.js 提供了多种流对象。 例如，HTTP 服务器的请求和 process.stdout 都是流的实例。
//
// 流可以是可读的、可写的、或者可读可写的。 所有的流都是 EventEmitter 的实例。

// 流的基本类型
//
// Writable--可写入数据的流(例如：fs.createWriteStream())
//
// Readable--可读取数据的流(例如：fs.createReadStream())
//
// Duplex--可读又可写的流(双工数据流 例如 net.Socket)
//
// Transform--在读写过程中可以修改或者转换为数据的流


