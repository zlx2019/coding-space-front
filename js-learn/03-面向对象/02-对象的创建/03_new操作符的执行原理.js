/**
 * 在JavaScropt中，函数可以使用 new 操作符(关键字) 所调用，这种函数又被称为构造函数,而这个过程称之为实例化构造函数;
 * 
 * 使用 new 操作符实例化构造函数，具体会执行如下操作:
 *  1. 在内存中创建一个新的空对象;
 *  2. 将空对象的隐式原型(__proto__)，指向构造函数的显式原型(prototype);
 *  3. 将构造函数中的this，指向这个空对象;
 *  4. 执行构造函数的函数体，完成实例的初始化;
 *  5. 返回值分为多种情况:
 *      - 如果没有返回值，则将新创建的空对象返回;
 *      - 如果返回一个非引用类型，则同样将新创建的空对象返回;
 *      - 如果返回一个引用类型，则直接返回这个引用类型，导致实例化构造函数失效;
 */



function Person(type){
    if(type === 1){
        return []
    }else if(type === 2){
        return {}
    }
    return false
}

// 返回引用类型的情况
let p1 = new Person(1)
console.log(p1); // []
let p2 = new Person(2)
console.log(p2); // {}

// 构造函数返回 非引用类型的情况
let p3 = new Person()
console.log(p3); // Person {}
