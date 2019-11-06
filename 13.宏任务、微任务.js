// EvenLoop  事件队列
//
// 宏任务：
//
//     主体script setTimeout  setInterval
//
// 微任务
//
//     Promise process.nextTick



/*
    所有任务进入执行栈 按同步任务和异步队列进行划分

    优先级：同步任务 宏任务  微任务  异步

    同步任务 主线程


    // console.log 属于宏任务 宏任务处理完成后，再处理执行栈里面的微任务

    console.log('script start');
    console.log('script end');

    new Promise(resolve => {  // new Promise 直接Resolve出来也属于宏任务

    // promise 是同步执行的 只有promise.then()才能叫微任务 而且 在所有微任务中process.nextTick（）都是优先开始执行的

        console.log('Promise start')
    })

    // console.log 属于微任务


    .then(function() {
        console.log('promise1');
    }).then(function() {
        console.log('promise2');
    });



    异步队列

    setTimeout(function() {  setTimeout 本身属于宏任务，但是会放入异步队列中执行
        console.log('setTimeout');
    }, 0);


*/


// console.log('script start');
//
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0);
//
// new Promise(resolve => {
//     console.log('Promise start')
// }).then(function() {
//     console.log('promise1');
// }).then(function() {
//     console.log('promise2');
// });
//
// console.log('script end');


//*******************************************

// console.log('script start');
//
// setTimeout(function() {
//     console.log('setTimeout1');
// }, 0);
//
// new Promise(resolve => {  // 宏任务
//     console.log('Promise start')
//     setTimeout(function() { // 异步队列
//         console.log('setTimeout2');
//     }, 1000);
// }).then(function() {
//     console.log('promise1'); // 异步队列中的回调输出
// }).then(function() {
//     console.log('promise2');
// });
//
// console.log('script end')

// *******************

 setTimeout(() => {

     // 宏任务
     new Promise((resolve => {
         console.log('Promise')
         resolve()
     })).then(() => {
         // 微任务
         console.log(then)
     })

     // 宏任务
     console.log(1)

     // 宏任务 但是在异步队列中 开定时器是同步的，但是定时器的任务是异步的
     setTimeout(() => {

         console.log(1)

     }, 1000)

 }, 1000)