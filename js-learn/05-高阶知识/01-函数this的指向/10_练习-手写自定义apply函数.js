/**
 * apply() 函数时Function.protype原型中的一个函数，所以所有的函数对象都可以调用;
 * 通过该函数，我们可以调用函数的同时，手动绑定this；
 * 
 * 接下来我们手写一个自定义apply;
 */

/**
 * 自定义apply函数: 调用函数，并且绑定this;
 * 
 * @param thisObj 要绑定的this对象
 * 
 */
function myApply(thisObj,args){
    // 在该作用域内，this 则就是要执行的函数
    // this() 执行目标函数

    // 1. 如果thisObj 为 null 或者 undefined，则绑定到全局对象(window | gloab)
    // 2. 如果为基本类型，则绑定为对应的包装类型
    thisObj = (thisObj === null || thisObj === undefined) ? global : Object(thisObj)

    // 绑定this逻辑: 将目标函数添加到 thisObj 对象中，然后通过this对象调用该函数，实现隐式绑定;
    // 1. 绑定函数
    // 使用Symbol 创建一个唯一值作为方法名
    let fnField = Symbol("the is a temp method name")
    Object.defineProperty(thisObj,fnField,{
        configurable: true,
        value: this
    })
    // 2. 执行函数
    thisObj[fnField](...args)
    
    // 3. 移除函数
    delete thisObj[fnField]
}

// 将自定义apply函数 绑定到Function.prototype
Function.prototype.myApply = myApply


// 测试
function foo(...args){
    console.log(`this: ${this}, args: ${args}`);
}


foo.myApply({name: "zhangsan", age: 18},[1,2,3]) // this: [object Object], args: 1,2,3

foo.myApply("abc",[{}]) // this: abc, args: [object Object]

foo.myApply(123,[true,false]) // this: 123, args: true,false
