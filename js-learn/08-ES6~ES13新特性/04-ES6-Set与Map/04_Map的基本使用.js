/**
 * Map是一种非常常用的数据结构，很多编程语言内都内置了该结构
 * 它是基于K-V键值结构的容器，K在容器内时唯一的;
 */

// 1. 创建Map的几种方式
// 创建一个空map
const emptyMap = new Map()

// 根据一个二维数组创建map
const info = [
    ["one",1],
    ["two",2],
    ["three",3]
]
const maps = new Map(info)
console.log(maps); // Map(3) { 'one' => 1, 'two' => 2, 'three' => 3 }

// 根据一个可迭代对象，创建map
const obj = {name: "张三",age: 18,height: 188.8}
const map = new Map(Object.entries(obj))
console.log(map); // Map(3) { 'name' => '张三', 'age' => 18, 'height' => 188.8 }


// 2. 获取map的元素数量
console.log(map.size); // 3

// 3. 添加元素
map.set("address", "北京")

// 4. 判断key是否已存在
console.log(map.has("address")); // true

// 5. 删除元素
map.delete("address")

// 6. 清空元素
map.clear()


// 获取所有的元素键
map.keys()
// 获取所有的元素值
map.values()
// 获取所有的元素键值
map.entries()