
class Person{
    constructor(){
        this.name = "zhangsan"
        this.age = 18
    }
}
Person.prototype.username = "ROOT"

const p = new Person()

// Object.hasOwn() 判断一个属性是否属于实例的，而不是原型上的
console.log(Object.hasOwn(p,"name")); // true
console.log(Object.hasOwn(p,"username")); // false