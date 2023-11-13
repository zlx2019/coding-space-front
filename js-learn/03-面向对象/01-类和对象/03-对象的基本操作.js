
/**
 * 对象的常见基本操作
 */

// 定义对象
var info = {
    name: 'zero',
    age: 18
}

// 访问对象的属性
console.log(info.name);

// 添加新属性
info.address = "北京"
console.log(info);

// 修改属性
info.name = "new name";
console.log(info);

// 删除对象中的属性
delete info.name
console.log(info);


// 还有一种特殊的属性设置与读取方式,如下
var user = {
    "nick name": '张三'
}
// 通过[]获取属性的值
console.log(user["nick name"]);