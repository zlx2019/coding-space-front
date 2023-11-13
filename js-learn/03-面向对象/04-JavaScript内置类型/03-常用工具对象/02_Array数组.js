// 数组的创建方式一
let names = ['zhangsan','wangwu','lisi']
console.log(names);

let users = [
    {name: 'zhangsan',age: 18},
    {name: 'lisi',age: 28},
    {name: 'wangwu',age: 20},
]
console.log(users);

// 创建方式二
// 创建一个空数组
let array1 = new Array()
console.log(array1); // []

let array2 = new Array("a","b","c")
console.log(array2); // [ 'a', 'b', 'c' ]

// 如果只传入一个数字，那么会认为是要创建的容量
let arrays3 = new Array(5)
console.log(arrays3); // <5 empty items>

/// 常用API
/// push(elem) - 将元素添加到数组尾部 
/// pop() - 将数组尾部的元素弹出
/// unshift(elem) - 将元素添加到数组头部
/// shift() - 将数组头部的元素弹出
/// 这些api过于简单，不多赘述

/// splice() 方法可以做到更多的操作，添加、删除、以及替换
/// splice(start,deleteCount，)
/// 参数一: start，从数组的什么位置开始操作元素
/// 参数二: deleteCount，要删除的的元素数量，如果是0，则表示新增元素
let numbers = [1,2,3,4,5,6,7]

// 删除指定位置的元素
// 删除索引为 2、3的两个元素
let delElems = numbers.splice(2,2)
console.log(delElems); // [ 3, 4 ]
console.log(numbers); // [ 1, 2, 5, 6, 7 ]

// 在指定的位置插入新的元素
// 在索引为2的位置添加新的元素
numbers.splice(2,0,...[10,20])
console.log(numbers); // [1, 2, 10, 20,5, 6,  7]

// 替换元素
// 将索引2~3的元素，替换为新的元素
numbers.splice(2,2,...[3,4])
console.log(numbers); // [1, 2, 3, 4,5, 6,  7]

/// 截取数组
// 和String.slice方法一致，不会影响原来的数组
// 从索引3截取到末尾
console.log(numbers.slice(3)); // [ 4, 5, 6, 7 ]
console.log(numbers); // [1, 2, 3, 4,5, 6,  7]

///还有一些其他的API，与String中的非常类似，就不多记录了
/// 如concat()、join()、indexOf()等