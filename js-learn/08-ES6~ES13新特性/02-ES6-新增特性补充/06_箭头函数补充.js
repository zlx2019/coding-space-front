// 经过之前的学习，我们都知道一个函数对象既有显示原型，也有隐式原型
function Foo(){}
console.log(Foo.__proto__ === Function.prototype); // true
console.log(Foo.prototype.__proto__ === Object.prototype); // true

// 但是箭头函数是没有 prototype(显示原型)的，所以无法当做构造函数来使用;
const bar = ()=>{}
console.log(bar.prototype); // undefined
console.log(bar.__proto__ === Function.prototype); // true

// 箭头函数的补充:
//  - 箭头函数没有prototype
//  - 箭头函数也不绑定this、arguments、super参数;