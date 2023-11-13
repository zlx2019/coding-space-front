
// 创建对象的方法有很多,包括以下三种:
// 1. 通过 {} 字面量
var obj1 = {
  name: "hello"
}
console.log(obj1)

// 2. 通过new Object() 
var obj2 = new Object()
obj2.name = "李三"
console.log(obj2)

// 3. new 其他类
function Person() { }
var obj3 = new Person()
obj3.name = "test"
console.log(obj3)

