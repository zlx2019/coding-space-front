const arr = [1,2,3]
// Array 转 Set
const set = new Set(arr)
console.log(set); // Set(3) { 1, 2, 3 }

// Set 转 Array
// 方式一
const arr1 = new Array(...set)
console.log(arr1);  // [ 1, 2, 3 ]

// 方式二
const arr2 = Array.from(set)
console.log(arr2);
