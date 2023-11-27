

// 1. 字面量对象属性增强写法
var name = "张三"
var age = 18
// 当我们想将一些已有变量，设置给一个对象时，在ES6之前我们可能会这样做
var obj1 = {
    name: name,
    age: age
}
console.log(obj1); // { name: '张三', age: 18 }

// 但是在ES6提供了 创建对象字面量增强写法
// 当属性名相同时，可以直接省略掉属性名,如下:
var obj2 = {
    name,
    age
}
console.log(obj2); // { name: '张三', age: 18 }


// 2. 字面量对象方法简写
var obj3 = {
    name: "zhangsan",
    // 方法正常写法
    running: function(){

    },
    // 可以像class中定义方法般简写
    eating(){
        
    }
}