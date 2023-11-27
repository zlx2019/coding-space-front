
/**
 * Symbol 通常用于生成一些值作为对象的属性名，这样的话对象的属性永远不会产生冲突;
 * 例如一些特殊的属性，都是以Symbol创建的,如:
 *  - 获取迭代器的方法名: Symbol.iterator
 *  - Symbol.asyncIterator
 */


// 使用Symbol 创建属性名
const nameKey = Symbol("the is name field")
const ageKey = Symbol("the is name field")

// 使用Symbol值作为属性名
const obj = {
    [nameKey]: "张三",
    [ageKey]: 18
}

console.log(obj[nameKey]); // 张三
console.log(obj[ageKey]); // 18

// 删除属性
delete obj[ageKey] 
console.log(obj);

// 通过keys，只能获取对象的普通属性
console.log(Object.keys(obj)); // []
// 想获取Symbol属性，得使用getOwnPropertySymbols()方法
console.log(Object.getOwnPropertySymbols(obj) );// [ Symbol(the is name field) ]