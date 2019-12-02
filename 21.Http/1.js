    //
    //
    // IP
    //
    //     规定了互联的计算机之间的定位规则
    //
    // tcp
    //
    //     规定了互联的计算机通过ip定位以后，发送数据的规则
    //
    //     IP： 定位主机
    //     端口：软件、应用
    //
    //     在数据发送过程中，除了有具体发送的数据，还会有一些其他的额外数据
    //
    //     比如：接受和发送者的ip、端口，为了能够让接受数据的一方能够按照这些数据反馈信息给对方
    //
    //     同时在发送过程，数据还会按照一定的规则进行打包，比如会将大数据包分包，打包进行发送
    //
    // 在实际应用中，不同的软件可能都会用到这样的方式来传递数据，不过，可能在具体数据组织上会有不同的个性设置，所以不同的应用程序会对发送
    // 的数据进行自己的二次包装（TCP），形成各式的传输协议：HTTP/FTP/MAIL


    // Http  超文本传输协议
    //
    // 传输ht（超文本）这样的文本的规则
    //
    // HTTP是一个基于TCP/IP通信协议来传输（超文本）数据
    //
    // -HTTP是基于TCP/IP协议来定位传输数据
    // -同时在TCP/IP包基础上对要传输的数据进行二次包装
    // -HTTP是单向单连接，无状态协议



