
/**
 * 有时候我们看到一个方法的参数列表，特别奇怪，如下
 */

// 1. 函数的参数为一个对象，并且为该参数设置默认对象
// 2. 并且对该参数进行解构
// 经过如上需求的操作，参数就变得非常奇怪
function foo({name,height} = {name: "张三", age: 18, height: 188.8}){
    console.log(name,height);
}
foo() // 张三 188.8

// 对象进行解构时，依然可以定义默认值，如下做法
function bar({name = "defaultName", height = 188.8,age} = {age: 18}){
    console.log(name,height,age);
}
bar() // defaultName 188.8 18
