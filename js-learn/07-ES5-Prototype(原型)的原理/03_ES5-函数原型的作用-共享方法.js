
// 我们通过一个案例来描述原型的具体作用之一
// 如下:

// 定义一个函数
function Person(name){
    this.name = name;
    this.say = function (){
        console.log(`Hello,我叫${this.name}`);
    }
}

// 创建两个实例
var zhangsan = new Person("张三")
zhangsan.say();
var lisi = new Person("李四")
lisi.say();
// 那么现在Person类 有两个实例，问题来了，这两个实例的say方法，指向的是同一个吗?
console.log(zhangsan.say === lisi.say); // false
// 结果为false，很显然它们并不是同一个函数，也就意味着每实例化一个Person对象，都会创建一个新的say函数
// 随着实例的数量增多，那么所消耗的内存成本也会增大，但其实像这种交单的函数，完全使用同一个函数也是可以的;
// 这个时候我们就可以将函数，绑定到原型中，这样无论多少实例，它们都会指向同一个函数，只会占用一份内存


// 使用原型改进:
function Student(name){
    this.name = name
}
// 将 say 函数绑定到 Student的原型上
Student.prototype.say = function(){
    console.log(`Hello,我叫${this.name}`);
}
// 实例化对象
var s1 = new Student('张三')
var s2 = new Student('李四')
s1.say()
s2.say()
console.log(s1.say === s2.say); // true
// 这样无论实例多少个Student对象，只会创建一个say函数，在函数内部使用this获取不同的数据，实现通用性

/**
 * 当多个对象拥有很多共同的方法时，我们可以将它们放到对应的构造函数对象中的prototype(显示原型)中;
 * 这样由这个构造函数所创建出来的对象，都会共享这些方法;
 */