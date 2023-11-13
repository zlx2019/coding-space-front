
// 在js中，一个函数也是一个Object对象，那么它同样也会持有[[prototype]]属性

// var obj = {}
// function foo(){}
// console.log(obj.__proto__); // [Object: null prototype] {}
// console.log(foo.__proto__); // {}

function foo(){}
var obj = {}
// 在函数中，还持有一个prototype属性，而且这个属性是对象中没有的
// 对象中的[[prototype]] 被称之为隐式原型
// 函数中的 prototype 被称之为显示原型
console.log(foo.prototype); // {}
console.log(obj.prototype); // undefined

// 之前我们提到过 使用 new 操作符来调用一个函数时，会执行如下操作:
// 1. 创建空对象;
// 2. 将this指向这个空对象;
// 其实在这里还有很重要的一步
// +3. 将函数的 prototype(显示原型) 赋值给空对象，作为空对象的[[prototype]](隐式原型)
// 4. 执行函数体
// 5. 返回this，作为函数的返回值
// 下面我们来验证一下
function Bat(){}
var b = new Bat()
console.log(b.__proto__ === Bat.prototype); // true

// 假设 new 了多个实例，那么它们的原型都会指向 Bat函数的原型
var b1 = new Bat()
var b2 = new Bat()
console.log(b1.__proto__ === Bat.prototype); // true
console.log(b1.__proto__ === b2.__proto__); // true

/**
 * 简单来说，函数的 prototype ，就是在通过new创建对象时，将 prototype 作为对象的[[prototype]]
 * 借此实现 对象(实例)之间的数据共享
 */