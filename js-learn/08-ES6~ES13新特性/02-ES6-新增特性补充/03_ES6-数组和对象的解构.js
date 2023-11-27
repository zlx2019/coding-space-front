/**
 * ES6新增了一种手段，可以更方便的从数组或者对象中获取元素或属性，称之为解构(Destructing);
 * 
 */


var nums = [1,2,3,4,5,6]
// 1.数组的解构

// 解构数组的前两个元素
var [one,two] = nums // [1,2]

// 解构，跳过第二个元素
var [one,,three] = nums // [1,3]

// 解构前n个元素，剩余元素组装为一个数组
var [one,two,three, ...other] = nums // [1,2,3,[4,5,6]]

// 2. 对象的解构
var obj = {
    name: "zhangsan",
    age: 18,
    height: 188.8
}

// 解构出所需要的属性
var {name,height} = obj // { name: 'zhangsan', height: 188.8 }

// 解耦属性，设置别名
var {uname: name,uheight: height} = obj // { uname: 'zhangsan', uheight: 188.8 }
