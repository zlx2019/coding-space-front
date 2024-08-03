

/**
 * 在JavaScript中，如果一个函数被 new 操作符调用，那么它会执行如下操作:
 *  1. 在内存中创建一个新的空对象;
 *  2. 函数内部的this，会指向创建出来的新对象;
 *  3. 将空对象的隐式原型(__proto__)指向该函数的显示原型(prototype);
 *  3. 并且执行该函数
 *  4. 如果函数内没有明确return出其他对象，则返回创建出来的新对象,也就是函数内的this所指向的对象;
 * 
 * 通过这几条规则，我们可以通过 普通的函数来创建对象，如下案例
 */


/**
 * 传入参数，构建出一个新的对象
 */
function NewInstance(name,age,height){
    this.name = name;
    this.age = age;
    this.height = height;
    this.running = function(){
        console.log("running...");
    }
}

// 通过 new 操作符调用 NewInstance函数，
// 构建出一个user对象
let user = new NewInstance("张三",22,188.8)
console.log(user.name);
console.log(user.age);
console.log(user.height);
user.running();

