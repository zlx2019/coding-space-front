const obj = {
    name: "张三",
    age: 18,
    height: 188.8
}

// 对象转Map
const map = new Map(Object.entries(obj))
console.log(map); // Map(3) { 'name' => '张三', 'age' => 18, 'height' => 188.8 }


// Map转对象
const obj2 = Object.fromEntries(map.entries())
console.log(obj2); // { name: '张三', age: 18, height: 188.8 }
