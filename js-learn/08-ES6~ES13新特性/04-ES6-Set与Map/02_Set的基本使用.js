
//1. Set的创建方式

// 创建一个空的Set
const set1 = new Set() 
console.log(set1);// Set(0) {}

// 根据一个可迭代对象，创建Set
const set2 = new Set([1,2,3])
console.log(set2); // Set(3) { 1, 2, 3 }

// 2. 获取set的元素数量
console.log(set2.size); // 3

// 3. 添加元素
set2.add(4)
console.log(set2.size); // 4

// 相同的元素，不可重复添加
set2.add(4)
console.log(set2.size); // 4

// 4. 删除元素
set2.delete(4)
console.log(set2.size); //3

// 5. 判断元素是否存在于set
console.log(set2.has(1)); // true
console.log(set2.has(1001)); // false

// 6. 清空所有元素
set1.clear()

