
// 数组常用的遍历方式有如下几种:

var numbers = [1,2,3,4,5]

//1. 根据索引遍历
for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//2. 增强版for循环，也是基于索引遍历
for(var index in numbers){
    console.log(numbers[index]);
}

//3. 根据迭代器遍历
for(var item of numbers){
    console.log(item);
}

//4. 根据内置的forEach函数
numbers.forEach(item=> console.log(item))