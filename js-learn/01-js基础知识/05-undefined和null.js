
// 当一个变量声明后,没有初始化时 就是一个undefined
var age
console.log(age) //undefined
console.log(age === undefined) //true


// null是属于object类型
console.log(typeof null) //object

// null通常用来作为一个object类型的初始值,这也是null存在的意义
var user = null

//除此之外还可以通过{}来初始化一个object
// 不过这样会产生一些内存消耗,并且在隐式转换的时候,就转换为true
var user2 = {}
if (user2){
    console.log("user2 not empty")
}

// 通常更推荐使用null作为object的初始值
// 优势:
//      - 不会产生额外的内存消耗
//      - 隐式转换的时候 会被转换为false

