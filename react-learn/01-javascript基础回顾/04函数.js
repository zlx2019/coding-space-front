/**
 *  箭头函数与普通函数的区别
 * 1、箭头函数没有this，this指向的是上一级作用域的this
 * 2、箭头函数没有arguments，可以使用...args参数代替
 * 3、箭头函数不能使用new关键字，因为箭头函数没有this，也就没有prototype
 * 
 * 
 */


// 普通函数可以通过arguments获取所有参数
function fn (){
    return arguments.length
}

console.log(fn()); // 0
console.log(fn(1)); // 1
console.log(fn(1,2)); // 2

//  箭头函数没有arguments，可以使用...args参数代替
const fn2 = (...args)=> args.length
console.log(fn2()); // 0
console.log(fn2(1)); // 1
console.log(fn2(1,2)); // 2