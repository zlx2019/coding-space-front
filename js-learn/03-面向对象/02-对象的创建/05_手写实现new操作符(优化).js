/**
 * 手写 new 操作符函数
 * 
 * @param constructor 要实例化的构造函数
 * @param args        函数的参数列表
 */
function _new(constructor, ...args){
    let obj = Object.create(constructor.prototype)
    Object.setPrototypeOf(obj,constructor.prototype)
    let res = constructor.apply(obj,args)
    return (res && typeof res === 'object') ? res : obj
}

// 测试
function Person(name,age){
    this.name = name
    this.age = age
}
let p = _new(Person,"张三",18)
console.log(p); // Person { name: '张三', age: 18 }
console.log(Object.getPrototypeOf(p) === Person.prototype) // true



