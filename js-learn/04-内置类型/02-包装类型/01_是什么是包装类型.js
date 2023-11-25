
/**
 * JavaSCript中的原始(基本)类型，如字符串、数字等类型都有对应的包装类型，通过包装类型对其进行扩展
 * 使得基本数据类型也可以调用方法、属性等功能
 * 当我们使用基本类型调用方法和属性时，js引擎在底层会生成对应的包装类型，并且调用对应的方法或属性，流程如下:
 *  1. 根据原始类型的值，创建对应的包装类型;
 *  2. 调用包装类型的属性或方法，获取到值;
 *  3. 回收底层创建的包装类型;
 * 
 * 在一些特殊情况下，js引擎可能会做出一些优化，直接跳过包装类型的创建，取决于js引擎的优化;
 */

// 创建一个基本类型字符串
let message = "hello world"

console.log(message.length);
console.log(message.split(' '));
// 当调用方法或属性时，在底层其实做了这些操作
// 执行完毕后，将生成的包装类型再回收掉
console.log(new String(message).length);
console.log(new String(message).split(' '));


// 包装类型有如下几种
// 字符串 ==> String
// 数字 ==> Number
// 布尔 ==> Boolean
// 数组 ==> Array
// Symbol
// BigInt

// 我们也可以直接创建包装类型，通过 new 关键字，如下:
var name = "张三";
var name1 = new String("张三");
console.log(name,name1); // 张三 [String: '张三']
console.log(typeof name, typeof name1); // string object

// 注意: null、undefined 没有包装类型，不存在属性和方法;