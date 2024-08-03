/**
 * 手写 new 操作符函数
 * 
 * @param constructor 要实例化的构造函数
 * @param args        函数的参数列表
 */
function _new(constructor, ...args){
    // 创建空对象
    let obj = {}
    // 设置空对象的隐式原型
    Object.setPrototypeOf(obj,constructor.prototype)
    // 执行构造函数，并且将构造函数的this绑定为空对象
    let res = constructor.apply(obj,args)
    // 返回值如果是引用类型，则直接返回引用类型，反之返回空对象
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



