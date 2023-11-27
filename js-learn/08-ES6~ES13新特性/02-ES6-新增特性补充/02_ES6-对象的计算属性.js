
/**
 * 对象的计算属性是什么?
 */

var address_key = "add" + "ress"

function sayKey(){
    return "say"
}

var obj = {
    // 普通属性的定义，直接定义属性名即可
    name: "张三",
    age: 18,
    
    // 那么计算属性就是如下这种
    // 使用 `[]`符号，将一个表达式放入该符号内
    // 表达式返回的值会作为该属性的属性名
    [address_key]: "广州",

    // 甚至可以调用方法，以方法的返回值作为属性名
    [sayKey()]: 100
}

// 这是ES6中提供的特性
// 通过动态计算而决定的属性名，被称之为计算属性
console.log(obj); // { name: '张三', age: 18, address: '广州', say: 100 }