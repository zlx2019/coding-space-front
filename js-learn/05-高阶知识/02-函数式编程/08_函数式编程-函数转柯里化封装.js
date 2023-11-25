// 我们明白了什么是柯里化，但是这种定义方法太过于繁琐，
// 所以我们需要封装一个工具函数，用于将一个普通函数，自动转换为 里化函数;
// - 该工具方法: 入参为一个函数，出参为一个柯里化函数


/**
 * 将一个函数，转换为柯里化函数。
 * 实现原理: 闭包 + 递归 + 函数式编程
 * 
 * 逻辑: 
 *  1. 如果传入的函数，参数足够，那么直接执行即可;
 *  2. 如果参数不够，则返回一个新的函数，来处理其他参数; 
 *  
 * @param {*} fn 普通函数
 * @requires     柯里化函数
 */
function autoConvertCurrying(fn){
    // 定义要返回的柯里化函数
    function currying(...args){
        if(args.length >= fn.length){
            // 参数已足够，执行函数，并且将不断收集到的参数一并传入
            // return fn.apply(this,args) // 优化版，将当前作用域一并传入
            return fn(...args)
        }else{
            // 参数不够，返回新的函数，继续收集参数
            return function(...nextArgs){
                // 在新的函数内，递归收集，直到参数足够后
                // 并且每次都将收集到的参数 合并到一起，传递下去
                // return currying.apply(this,args.concat(nextArgs)) // 优化版
                return currying(...args.concat(nextArgs))
            }
        }
    }
    // 将柯里化函数返回
    return currying
}

module.exports = autoConvertCurrying


