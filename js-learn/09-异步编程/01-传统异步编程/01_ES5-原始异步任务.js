/**
 * 假设我们现在有这样一个需求:
 *  执行一个函数，延迟一定的时间后再执行(可能有IO操作);
 */

function callAsync(fn){
    // 使用定时器，模拟IO延迟操作
    setTimeout(() => {
        // 执行目标函数
        fn()
    }, 3000);
}

console.log("开始执行异步.");
callAsync(()=>{
    console.log("执行异步任务.");
})

// 开始执行异步.
// ...
// 执行异步任务.