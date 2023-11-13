// Array的length属性表示数组的长度
let arr = [1,2,3,4,5]
console.log(arr.length); //5

// 当我们修改数组时，length会随着一起变动
arr.push(6)
console.log(arr.length); // 6

// 在JavaScript中，我们可以手动修改数组的length属性
// 比如新增长度，此时数组会进行动态扩容
arr.length = 10
console.log(arr); // [ 1, 2, 3, 4, 5, 6, <4 empty items> ]

// 如果减少长度，并且小于现在数组内的元素数量
// 那么会将多余的元素直接丢弃
arr.length = 3
console.log(arr); // [ 1, 2, 3 ]

// 如果将length 设置为0，那么则会清空该数组
arr.length = 0
console.log(arr); // []