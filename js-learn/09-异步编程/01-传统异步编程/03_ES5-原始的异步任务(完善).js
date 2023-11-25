/**
 * 在上一步，我们进一步改进了异步任务，在任务成功后，通过回调函数实现了后续操作;
 * 但还有存在一些问题，比如当异步任务执行中，发生了异常，那该如何控制?
 * 
 * 所以为了进一步优化，我们需要额外传递一个函数，专门处理出现异常的情况下，回调该函数;
 */

function callAsync(task,successCallback,failedCallbak){
    setTimeout(() => {
        try{
            task() // 执行异步任务
            taskSuccess() // 执行异步任务完成后的回调函数
        }catch(e){
            // 异步任务发生异常
            failedCallbak(e) // 执行异常回调
        }finally{
            // TODO 成功或失败都会执行
        }
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
// task异步函数，执行失败后的回调函数
function taskFailed(err){
    console.log(`异步任务执行异常: ${err}`);
}

// 正常执行情况
callAsync(task,taskSuccess,taskFailed)
// 输出: 
// 执行异步任务.
// 异步任务执行成功.



// 异常执行情况
callAsync(()=>{
    console.log("执行异步任务.");
    throw "手动抛出的异常哦~"
},taskSuccess,taskFailed)

// 输出: 
// 执行异步任务.
// 异步任务执行异常: 手动抛出的异常哦~


// 在ES6之前，异步任务通常我们都这么写
// 虽然这种方式已经能解决大多数异步任务，但是显然还是有一些瑕疵
// - 不够通用性
// - 规范性也不强，不利于团队开发，使用者和设计者强依赖性