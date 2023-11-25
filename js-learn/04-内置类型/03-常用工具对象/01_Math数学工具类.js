// Math 是JavaScript内置对象(不是一个构造函数)，它拥有一些数学相关的API函数;

// Math对象的属性:

// 圆周率
console.log(Math.PI);


var num = 55.685
// Math对象的常用方法:

// 将小数转为整数，向下取整，直接抹除掉所有小数
console.log(Math.floor(num)); // 55
// 将小数转为整数，向上取整，只要有小数位，直接+1取整
console.log(Math.ceil(num)); // 56
// 将小数转为整数，四舍五入
console.log(Math.round(55.23)); // 55
console.log(Math.round(55.63)); // 56

// 生成随机数, 随机生成0~1的随机数(包含0，不包含1)
console.log(Math.random());

// 练习: 根据一个最小值，最大值，生成区间内的一个随机数(不包含最大值)
function randomNum(min,max){
    return Math.floor(Math.random() * (max - min)) + min
}


// 求一个数的n次幂
console.log(Math.pow(2,4)); // 16