
/**
 * 变量的使用注意事项
 */

// 1.如果使用一个未创建的变量,则会发生异常: is not defined
// console.log(age); // age is not definded

// 2. 一个变量如果声明了,但是没有赋值 则为`undefined`
var address
console.log(address);
console.log(address === undefined);