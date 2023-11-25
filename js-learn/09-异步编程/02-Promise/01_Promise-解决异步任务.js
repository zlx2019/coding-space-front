/**
 * Promise是EMSciprt提供的一套异步编程标准，通过这一套标准，让所有开发者在异步编程中遵守同一套API规则;
 * 
 * Promise共有三个注册方法: then、catch、finally 分别用于注册成功、失败、完成的回调函数
 * 
 * Promise共有三种状态: 
 *  - pending(待定): 初始状态，既没有被兑现，也没有被拒绝。
 *  - fulfilled(已兑现): 意味着操作成功完成。
 *  - rejected(已拒绝): 意味着操作失败。
 * 
 * Promise的executor包含两个函数类型的参数: 
 *  - resolve(): 用于将Promise更新为 fulfilled 状态;
 *  - reject(): 用于将Promise更新为 rejected 状态;
 * 
 * Promise内部，会随着状态的变更，调用不同的回调函数
 * 1. Promise创建开始执行后，默认为pending状态
 * 2. 当Promise状态更新为 fulfilled 状态后，执行由 then()方法 注册的回调函数;
 * 3. 当Promise状态更新为 rejected 状态后，执行由 catch()方法 注册的回调函数;
 * 4. 最后执行由 finally()方法注册的回调函数;
 * 
 */


/**
 * 使用Promise执行异步任务
 * @param {*} task 要执行的函数
 * @returns Promise对象
 */
function callAsync(task){
    // 返回一个Promise
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            try{
                task()  // 执行目标函数
                resolve() // 执行成功，执行resolve方法，会回调Promise的then
            }catch(e){
                reject(e) // 调用reject方法，回调Promise的cache()方法
            }
        }, 3000);
    })
}


console.log("开始执行异步任务.");
// 调用异步函数，获取一个Promise返回值
var result = callAsync(()=>{
    console.log("执行异步任务.");
})

// 监听Promise的 then()方法，该方法会在Promise执行成功后回调
result.then(()=>{
    console.log("执行异步任务成功.");
})

// 监听Promise的 catch()方法，该方法会在Promise执行失败后回调
result.catch(err=>{
    console.log("执行异步任务失败.");
})

// 执行异步任务.
// 执行异步任务成功.

// 简化写法
console.log("开始执行异步任务");
callAsync(()=> {
    throw "手动模拟异常"
}).catch(err=>{
    console.log(`发生了异常: ${err}`);
})
// 开始执行异步任务
// 发生了异常: 手动模拟异常