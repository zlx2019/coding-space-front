/**
 * number类型中有两个特殊的数值
 *  - Infinity: 无穷大的数值
 *  - NaN: 非数字数值
 */

// 如何获取Infinity数值
var n1 = Infinity
var n2 = 1 / 0
console.log(n1,n2)
console.log(n1 === Infinity)
console.log(n2 === Infinity)

// NaN,非数字数值 比如使用数字类型和字符串运算后就会得出一个NaN
var n3 = 101 * 'abc'
console.log(n3)
// 通过 isNaN() 函数可以判断一个值是否是NaN
console.log(isNaN(n3))

// number类型支持的最大值与最小值
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)