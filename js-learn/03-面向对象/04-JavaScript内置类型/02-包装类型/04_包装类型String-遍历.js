// String 字符串是任何一门语言中，最常用的数据类型，所以熟悉该类型的操作是非常重要的
// 字符串的本质就是一个字符数组

var message = "Hello,World"

// 第一种字符串遍历，根据索引遍历
for(let i = 0; i < message.length; i++){
    console.log(message[i]);
    // 或者通过 charAt(index)方法
}

// 第二种字符串遍历,字符串是内置迭代器的，可以使用 for of 对迭代器进行遍历
for(let char of message){
    console.log(char);
}
