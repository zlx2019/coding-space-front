const autoConvertCurrying  = require("./04_柯里化-函数转柯里化封装")

// 定义要柯里化的函数
function foo(x,y,z){
    console.log(x + y + z);
}
foo(1,2,3) // 6

// 将 foo 函数，转换为柯里化函数
var fooCurry = autoConvertCurrying(foo)

// 测试柯里化后的函数
// 无论执行多少次，只要传入的参数足够foo.length后，就可以执行具体的foo实现

fooCurry(1)(2)(3) // 6

fooCurry(10)(50)(40) // 100

fooCurry(23,43,56) // 122

fooCurry(1,2)(6) // 9

fooCurry(1,2)()(10) // 13

fooCurry()()()()(21,34,645) // 700

fooCurry(1,2,3,4,5) // 6


function sum(a,b){
    return a + b
}

// 将有返回值的函数，转换为柯里化函数
var sumCurry = autoConvertCurrying(sum)

var fiveSum =  sumCurry(5)

console.log(fiveSum(1)); // 6
console.log(fiveSum(5)); // 10
console.log(fiveSum(18)); // 23