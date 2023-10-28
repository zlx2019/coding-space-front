
// == 和 === 都是比较运算符,那么它们有什么区别呢?

// 先来看一个案例
var n1 = ""
var n2 = false
var n3 = 0

console.log(n1 == n2) // true
console.log(n1 == n3) // true
console.log(n2 == n3) // true

// 上面三个语句中,三个变量命名是不同的类型,但是使用`==`运算法得到的结果都为true
// 这是因为`==` 运算符 在两个运算元类型不相同时,将两个运算元都先转换为Number类型,然后再进行比较
// "" 和 false 转换为Number类型后 都是0,所以进行`==`比较都为true
console.log(Number(n1))
console.log(Number(n2))

// 注意: null这个值比较特殊,它并不会转换为0,所以这个论证内不包含null值
console.log(null == "") // false

// '=='  运算符会进行隐式转换(Number),所以通常不推荐使用该操作符
// '===' 运算符执行严格相等比较，它不会进行类型转换。当使用'==='比较两个值时，只有在它们的值相等且类型也相同时，才会返回true。如果值相等但类型不同，或者类型相同但值不等，'==='运算符将返回false。

console.log(n1 === n2) // false
console.log(n1 === n3) // false
console.log(n2 === n3) // false



//========================================================================

/**
 * 关于`==`的补充 来自于ECMA标准  https://262.ecma-international.org/5.1/#sec-11.9.1
 *      举例:  x == y
 *      1. 类型相同情况
 *
 *          类型为Number:
 *          1.1 两者都为Undefined时,返回true。
 *          1.2 两者都为Null时,返回true。
 *          1.3 两者都为Number时
 *              - 如果其中任意一个为`NaN`时,则返回false。
 *              - 两者数值相等时,返回true。
 *              - 当两者为 +0 和 -0 时,返回true。
 *              - 其他情况返回false。
 *          1.4 类型为String时,长度以及相应位置的字符一致时返回true,否则返回false。
 *          1.5 类型为Boolean时,两者都为true|false时,返回true,否则返回false。
 *
 *      2. 类型不相同情况
 *          2.1 两者为null和undefined时,直接返回true。
 *
 *          2.2 Number == String时, 将String转换为Number比较。
 *
 *          2.3 Number == Boolean时,将Boolean转换为Number比较。
 *
 *          2.4 String == Boolean时,都会转换为Number后再进行比较。
 *
 *          2.5 any == object时,将object经过ToPrimitive()函数获取原始类型后进行比较
 *              如果其中一个变量为object(null)的话,那么会通过ToPrimitive()函数转换为原始类型后再比较.
 *              如: x 是object, 那么就等同于 ToPrimitive(x) == y.
 *
 *          2.6 其他情况均返回false
 */

// 1.1 Undefined == Undefined
console.log("Undefined == Undefined: ",undefined == undefined) // true

// 1.2 Null == Null
console.log("Null == Null: ",null == null) // true

// 1.3 Number == Number
console.log("Number == NaN", NaN == 1) // false
console.log("Number == Number: ", 1 == 1) // true
console.log("+0 == -0", +0 == -0) // true

// 1.4 String == String
console.log("123" == "123") // true
console.log("123" == "1234") // false

// 1.5 Boolean == Boolean
console.log(true == true) // true
console.log(false == false) //true
console.log(true == false) // false

// 2.1 null == undefined
console.log("null == undefined: ",null == undefined) // true

// 2.2 Number == String
console.log(123 == "123") // true
console.log(0 == "") // true

// 2.3 Number == Boolean
console.log(0 == false) // true
console.log(1 == true) // true

// 2.4 String == Boolean
console.log("0" == false) // true
console.log("1" == true) // true


// 2.5 any == object
console.log(null == 0) // false
console.log(null == 1) // false
console.log(null == "123") // false

// 通过重写toPrimitive()方法,将object原始类型返回为1001,再和1001进行==比较 则会为true
var user = {
    [Symbol.toPrimitive](){
        return 1001
    }
}
console.log(user == 1001) // true

