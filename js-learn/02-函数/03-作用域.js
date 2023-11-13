
// 在ES5之前,是没有块级作用域的概念，只有函数拥有特殊的作用域

for (var i = 0; i < 3; i++) {
    var foo = "foo";
}

console.log("访问for内部的foo: ",foo) // foo
console.log("访问for内部的i: ",i) // 3

function foo(){
    var count = 100
}
