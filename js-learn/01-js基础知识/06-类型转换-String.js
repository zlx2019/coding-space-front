// 其他类型转换为String类型

var n1 = 123
var n2 = true
var n3 = false

// 方式一: 隐式转换,当使用`+`操作符时,两侧变量只要有一个是string类型,则会将另一个变量隐式装换为string
var n1Str = n1 + ""
var n2Str = n2 + ""
var n3Str = n3 + ""
console.log(n1Str,typeof n1Str) // 123 string
console.log(n2Str,typeof n2Str) // true string
console.log(n3Str,typeof n3Str) // false string


// 方式二: 显示转换,通过String()函数进行转换
var str1 = String(n1)
var str2 = String(n2)
var str3 = String(n3)
console.log(str1,typeof str1) // 123 string
console.log(str2,typeof str2) // true string
console.log(str3,typeof str3) // false string

// 方式三: 通过对象的toString()方法转换(后续补充)