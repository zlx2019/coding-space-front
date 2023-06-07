
/**
 * const 用于声明常量
 * var && let 用于声明变量
 * 
 *  var和let的区别
 *  1. var没有块级作用域的概念，let有块级作用域的概念
 *  2. var会提升变量声明,会优先于代码块执行,而let不会
 */


{   
    // var在代码块中声明变量,在外部依然可以访问
    var a = 10
}
console.log(a); // 输出10


{
    // 而使用let声明的变量,只能在当前作用域访问
    let b = 20
}
console.log(b) // 报错: b is not defined 表示没有b这个变量.


if(false){
    // 尽管这里并不会执行,但是c依然会被创建,只不过没有赋值
    var c = 30
}
console.log(c); // undefined