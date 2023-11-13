
// 通过Math提供的函数,计算一个数的n次方
console.log(Math.pow(2,2))
console.log(Math.pow(2,3))


// 自定义函数 计算一个数的n次方
// 一、使用for循环方式
function pow_for(x,n){
    let value = 1
    for (let i= 0; i < n; i++) {
        value *= x
    }
    return value
}
console.log(pow_for(2,2))
console.log(pow_for(2,3))


// 自定义函数 计算一个数的n次方
// 二、通过递归的方式
function pow(x,n){
    if (n === 1){
        return x
    }
    return x * pow(x,n-1)
}
console.log(pow(2,2))
console.log(pow(2,3))