// 其他类型转Boolean

// 方式一: 隐式转换,通常在逻辑运算表达式中会进行隐式转换,如if语句
var name = ""
if (name){
    // 不会执行
}

// 方式二： 显示转换,通过Boolean()函数转换
var b1 = Boolean(name)
console.log(b1) // false

// 转换规则:
//      直观上为"空"的值,如 0、""、null、undefined、NaN 会转换为false,其他则为true
console.log(Boolean(0)) // false
console.log(Boolean("")) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false


console.log(Boolean(1)) // true
console.log(Boolean("12")) // true
console.log(Boolean({})) // true
