
/**
 * Number是数字类型的包装类型
 */

// 当我们执行如下操作时，本质上就是创建了Number类型
// 并且调用 Number.toFixed()方法
var num = 123;
console.log(num.toFixed());


// Number类中的类属性
console.log(Number.MAX_VALUE); // 支持的最大数字
console.log(Number.MIN_VALUE); // 支持的最小数字
console.log(Number.MAX_SAFE_INTEGER); // 支持的最大整数
console.log(Number.MIN_SAFE_INTEGER); // 支持的最小整数
console.log(Number.NaN);    // 表示为非数字类型


var num = new Number(10)

// Number 静态方法:
// Number.isFinite() - 判断传入的值是否是有限数。
// Number.isInteger() - 判断传入的值是否为整数。
// Number.isNaN() - 判断传入的值是否为 NaN。
// Number.isSafeInter() - 判断传入的值是否在安全整数之内。
// Number.parseFloat() - 将传入的值转为浮点数
// Number.parseint() - 将传入的值转为整数

// Number 实例方法:
//  toString() 将数字转为字符串
//  toFixed() 格式化小数，保留指定的小数位

// toString(base)
// 将数字转为字符串，默认是十进制
console.log(num.toString(), typeof num.toString()); // 10 string
// 转成其他进制字符串
// 二进制
console.log(num.toString(2)); // 1010
// 八进制
console.log(num.toString(8)); // 12
// 十六进制
console.log(num.toString(16)); // a
console.log(`0x${10..toString(16)}`);

// toFixed(digits)
// 格式化小数，保留digits位小数,取值范围(0-20),会进行四舍五入
const PI = 3.1415926
console.log(PI.toFixed());  // 3
console.log(PI.toFixed(2)); // 3.14
console.log(PI.toFixed(4)); // 3.1416
console.log(PI.toFixed(6)); // 3.141593


// 将字符串转换为数字类型
// 1. 将字符串自动转为数字(整数或小数)
var numStr = 123.321
console.log(Number(numStr));
// 2. 将字符串转换为整数,如果是浮点数的话，会抹掉所有的小数位
console.log(Number.parseInt(numStr)); // 123
// 3. 将字符串转为小数
console.log(Number.parseFloat(numStr)); // 123.321
// 如果无法转为数字，则返回NaN
console.log(Number('abd')); // NaN

// 将其他类型转换为数字类型
console.log(Number(true)); // 1
console.log(Number(false)); // 0