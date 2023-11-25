/**
 * 在上一步我们 通过 setTimeout()实现了异步任务，但是缺点很显然，这是无响应的异步任务,
 * 假如我们还想从外部得知异步任务的结束状态，并且想做一些后续逻辑，那该如何？
 * 
 * 关于这个需求，我们可以使用 回调函数 来实现;
 * 简单来说就是: 
 * 1. 将异步任务完成后的额外操作放入一个函数;
 * 2. 将函数一并传递给异步任务;
 * 3. 在异步任务内部，执行完成后主动调用该函数;
 */

function callAsync(task,taskSuccess){
    setTimeout(() => {
        task() // 执行异步任务
        taskSuccess() // 执行异步任务完成后的回调函数
    }, 3000);
}

// 具体要执行的异步函数体
function task(){
    console.log("执行异步任务.");
}
// task异步函数，执行成功后的回调函数
function taskSuccess(){
    console.log("异步任务执行成功.");
}

console.log("开始执行异步.");
callAsync(task,taskSuccess)

// 开始执行异步.
// ...
// 执行异步任务.
// 异步任务执行成功.