

// 1.数组的解构赋值
let [n1, n2] = [100, 200]
console.log(n1, n2); // 100 200

// 解构前两个元素
let [n3, n4] = [1, 2, 3, 4]
console.log(n3, n4); // 1,2

// 解构前两个元素和最后一个元素，跳过第三个元素
let [n5, n6, , n7] = [1, 2, 3, 4]
console.log(n5, n6, n7); // 1,2,4

// 解构前两个元素,剩余的元素放到一个数组中
let [n8, n9, ...arr] = [1, 2, 3, 4]
console.log(n8, n9, arr); // 1,2,[3,4]



// 2.对象的解构赋值
let { name, age } = { name: 'zs', age: 18 }
console.log(name, age); //  zs 18
// 命名不同的情况下解构
let {name: a, age: b} = { name: 'zs', age: 18 }
console.log(a, b); //  zs 18



