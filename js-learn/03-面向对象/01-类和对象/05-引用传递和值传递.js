
// javascript 分为引用传递和值传递
// 原始类型是值传递,如Number、string、boolean
// 对象类型是引用传递


// 值传递
// 值传递是数据进行的拷贝,赋值给了局部内的变量,
// 所以修改了局部变量并不会影响传进来的外部参数.
function foo(a){
    a = 200
}
var num = 100
foo(num);
console.log(num); // 100


// 引用传递
// 引用传递也被称为指针传递,传递进去的就是一个内存地址
// 所以在函数内部修改后也会影响到外部的值
function bar(b){
    b.name = "new bar"
}
var obj = {name: "bar"}
bar(obj)
console.log(obj); // new bar

// 还有一种情况,在引用传递情况下,并没有对值进行修改,而是重新赋值了新的对象
function baz(c){
    // 重新赋值一个新的对象，与传递进来的引用完全脱离,不会影响到它
    c = {
        name: "zero"
    }
}
var info = {name: "jack"}
baz(info)
console.log(info.name); // jack