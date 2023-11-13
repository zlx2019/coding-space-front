

var user = {
    name: 'John',
    age: 13,
    adress: 'Room'
}

// 方式1: 通过普通for循环遍历
// 使用Object.keys()方法 获取一个对象的属性列表
var keys = Object.keys(user)
console.log(keys);
for(let i = 0; i < keys.length;i++){
    // 通过 对象实例[属性名] 获取属性值
    console.log(`属性名${keys[i]} 属性值:${user[keys[i]]}`);
}

console.log("====");
console.log("====");

// 方式二: 使用for in
for(let key in user){
    console.log(key);
}

console.log("====");
console.log("====");

// 方式3
Object.keys(user).forEach(key => console.log(key))