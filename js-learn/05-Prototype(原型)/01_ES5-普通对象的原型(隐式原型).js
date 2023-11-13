// 在Js中，任何一个对象都有原型属性[[prototype]]
var obj = {
    name: 'zhangsan',
    age: 18
}
console.log(obj); // { name: 'zhangsan', age: 18 }

// 获取对象的原型信息
// 方式一: 非标准方式(浏览器自动添加的属性)
console.log(obj.__proto__); // [Object: null prototype] {}
// 方式二: 标准方式
console.log(Object.getPrototypeOf(obj)); // [Object: null prototype] {}


// 原型有什么作用呢?
// 当我们通过一个对象，获取它的某个属性时：
// - 优先会在自身的属性中查找，如果找到了则直接返回
// - 如果没有找到，则会在自身的原型中进行寻找
console.log(obj.name); // zhangsan
console.log(obj.message); // undefined

// 将message属性，添加到 obj 对象的原型中
obj.__proto__.message = "root"
// 这样获取obj的message属性时，就可以从原型中获取到
console.log(obj.message); // root


/**
 * 原型的总结:
 * JavaScript当中的每一个对象都有一个特殊的内置属性[[prototype]]，这个特殊的属性可以指向另外一个对象;
 * 当我们通过引用对象的 property(属性)时，如obj.xxx或者 obj[xxx]，此时会触发[[Get]]的操作;
 *  - 这个操作会首先检查该对象是否有对应的属性，如果有就使用它;
 *  - 如果没有则会从[[prototype]]所指向的对象检查，这是一种递归查找，直到找到[[prototype]]为null，返回undefined;
 */