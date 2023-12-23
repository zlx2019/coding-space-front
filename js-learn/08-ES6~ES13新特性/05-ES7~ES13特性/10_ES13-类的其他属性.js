
// 通常我们为一个类定义实例属性时，都是在构造器中定义
class User{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

// 在ES13为类提供了一些面向对象中其他属性。如: 公开、私有实例属性，静态属性(类属性)

class Person{
    // 直接在这里定义实例属性，在这里可以直接定义默认值
    // 并且默认都是public的
    name = "ROOT"
    age = 18
    address

    // 定义私有属性，这里的私有指的是约定俗成的规则，并不是强制私有
    // 一般私有属性以 `_`或者`#`开头
    _info = "info"
    #desc = "desc"

    // 定义类属性(static)
    // 静态属性只有类可以访问
    static PI
    // 静态代码块
    static{
        this.PI = 3.14
    }
}

let p = new Person()
console.log(p); // Person { name: 'ROOT', age: 18, address: undefined, _info: 'info' }

console.log(Person.PI); // 3.14