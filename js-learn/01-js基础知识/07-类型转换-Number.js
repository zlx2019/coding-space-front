// 其他类型转换为Number

// 方式一: 隐式转换,通过`*`、`/` 操作符进行数字运算时,会默认解析为Number类型
var n1 = '8'
var n2 = '9'

var n3 = n1 * n2
console.log(n3) // 72
console.log(typeof n3) // number

// 方式二: 显示转换,通过Number()函数进行转换
var n4 = Number(n1)
console.log(n4) // 8
console.log(typeof n4) // number


/**
 * 注意: 其他类型转Number类型规则:
 *      null -> 0
 *      undefined -> NaN
 *      boolean -> 0 and 1
 *      string -> 默认会去除首尾的空格
 *                  如果是"" -> 0
 *                  如果转换错误则为 -> NaN
 */

//todo 其他类型的零值,如: null、false、"" 会转为0
console.log(Number(null))  // 0
console.log(Number(false)) // 0
console.log(Number(""))    // 0
console.log(Number("   "))    // 0


// todo undefined或者包含非number类型的字符串,则会转换为NaN
console.log(Number(undefined))  // NaN
console.log(Number("oppo"))     // NaN
console.log(Number("123oppo"))  // NaN


//todo 正常转换的值
console.log(Number("1001")) // 1001
console.log(Number("      123    ")) // 123
console.log(Number(true)) // 1

