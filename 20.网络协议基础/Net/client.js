

    // const net = require('net')
    //
    // // 创建客户端与udp不同
    //
    // const client = net.createConnection({ port: 8124 }, () => {
    //
    //     // 监听器
    //     console.log('已连接到服务器')
    //
    // })


    const net = require('net');
    const client = net.createConnection({ port: 8124 }, () => {
        // 'connect' 监听器
        console.log('已连接到服务器');
        client.write('你好世界!\r\n');
    });

    /*
       已连接到服务器
        客户端已接受服务端图片数据包
        <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 01 00 48 00 48 00 00 ff db 00 43 00 03 02 02 03 02 02 03 03 03 03 04 03 03 04 05 08 05 05 04 04 05 0a 07 07 06 ... >
        客户端已接受服务端图片数据包
        <Buffer 52 9a b6 c5 a9 f2 30 4d 06 90 ea 09 09 71 f0 27 31 e9 51 73 45 13 82 56 c0 37 02 22 69 ac ad 45 bd 90 af 9b 29 23 f9 81 38 14 6c 74 fc ad d8 87 2e ce ... >
        客户端已接受服务端图片数据包
        <Buffer 8f f7 f4 ab 63 92 33 8a 9c 78 62 b8 53 a1 a8 b2 4e 24 25 43 90 41 9a 78 ca 32 56 9d 83 a5 8a 4b 76 ce ac 25 2a 49 26 63 6c 76 aa a3 a8 c5 29 74 c6 56 ... >
        客户端已接受服务端图片数据包
        <Buffer 23 8e 38 31 15 63 93 08 25 3f 97 d6 a2 7b 6e 47 ea 09 1e e2 78 a1 d4 0b 7e 87 0f 2c 88 82 0f a5 35 ec 42 40 93 03 f4 31 4e c0 08 6c 12 23 bd 2a 18 12 ... >
        客户端已接受服务端图片数据包
        <Buffer 94 f7 86 b5 09 89 ee a8 9f 7c d7 47 1e 86 13 49 f5 ab 7d bb 14 b9 36 21 8b c9 5a 4b 8c 36 cb ce 2a 51 e2 78 8e 2c 92 00 c8 9c 1c 18 c8 ed 5a e7 a5 e9 ... >
        客户端已接受服务端图片数据包
        <Buffer 0a d3 2f 57 6e 49 56 e2 b0 e0 f1 12 63 b0 10 a1 1f 95 70 b5 ea b2 a7 ea 91 53 67 d3 00 82 4c 80 9e f5 cc 63 c5 a2 16 a0 44 05 c4 9f ad 34 57 71 ac 49 ... >
        客户端已接受服务端图片数据包
        <Buffer 02 60 1c 89 c6 4c 60 d6 5c 38 fa 67 d4 3f 51 46 f5 2d b9 ab 3a fb 66 5b 0d 80 7c 99 c8 ca 7d 8f 69 f6 e2 ba 71 5d 8a db dc 1d 3f 46 9f f9 82 a5 ac 8c ... >
        客户端已接受服务端图片数据包
        <Buffer c2 fc fb ef c9 5c a9 3a ad cd dd 79 95 74 76 92 5a 02 e4 29 28 08 4d c2 6d f6 15 a0 89 1b b6 98 09 12 40 4a a4 81 5c ed 34 96 bb 2f 56 df 2b e1 fb 5f ... >
        客户端已接受服务端图片数据包
        <Buffer 98 bb 5e 8d a5 b7 d1 16 4e 37 b3 56 3d 1f 0e d8 5e a6 c5 cf ee 85 f8 88 29 b8 17 4e 2b c2 fe 2f f8 95 0b 24 9c 98 92 62 ab 7e 27 25 8d c3 cc d9 ed 4b ... >
        客户端已接受服务端图片数据包
        <Buffer b1 e7 08 92 10 63 70 c0 32 6b c9 f8 bf 88 cb 1e 9f a3 a9 c3 cc 69 46 4b 65 d5 b5 5e f7 18 ae 2d 71 cb 54 5d 18 26 fa 9a d8 fa 9e ad d1 c9 ea 0d 27 5b ... >
        客户端已接受服务端图片数据包
        <Buffer 86 5f 2a 49 08 57 d4 4f 34 f6 51 36 e3 44 a5 0e 7e 25 00 12 7d fb 53 26 0e 5d a1 64 92 a8 4f 6c 73 46 83 d4 39 86 92 e8 3e 29 22 3d 3e f4 54 6c 49 cd ... >
        已从服务器断开

    */
    client.on('data', (data) => {
        console.log('客户端已接受服务端图片数据包');  // 分包传输
        console.log(data);
        client.end();
    });
    client.on('end', () => {
        console.log('图片数据已传输完成！');
        // 把接收到的数据组合起来，Buffer，然后通过fs写入带client_img中，

        console.log('已从服务器断开');
    });

