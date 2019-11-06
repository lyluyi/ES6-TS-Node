// Event
// 事件是整个node.js的核心模块，Node中大部分模块都使用或继承了该模块


const EventEmitter = require('events')

class  Person extends  EventEmitter{

    constructor (name) { // extend的子类如果需要实现自己的contructor，那么需要super（）父类

        super()

        this.name = name
        this.age = 0
        this.growp()

    }

    growp () {

        setInterval(() => {
            this.age++
            this.emit('growpHandle')
        },1000)

    }

}


const p1 = new Person("lc")

p1.on('growpHandle', function () {
    console.log('aaaa')
})

