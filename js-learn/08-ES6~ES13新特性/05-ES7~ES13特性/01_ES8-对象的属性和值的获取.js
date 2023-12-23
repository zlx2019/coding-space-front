/**
 * 在ES8中，Object内置对象新增了三个方法:
 *  - keys(): 获取对象的所有属性名
 *  - value(): 获取对象的所有属性值
 *  - entries(): 获取对象的所有entries(属性名 + 值)
 */

const obj = {
    name: "why",
    age: 18,
    address: "广州"
}

console.log(Object.keys(obj)); // [ 'name', 'age', 'address' ]
console.log(Object.values(obj)); // [ 'why', 18, '广州' ]

const entries = Object.entries(obj)
for(const entry of entries){
    const [key,value] = entry                                           
    console.log(`${key}:${value}`);
}
// name:why
// age:18
// address:广州