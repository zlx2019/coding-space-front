// String的常用方法
let message = "Hello,World"

// 将所有字符转为小写
console.log(message.toLowerCase()); // hello,world
// 转换为大写
console.log(message.toUpperCase()); // HELLO,WORLD

// 在字符串内查找子串，
// indexOf(keyword,fromIndex)
// 如果存在子串，则返回子串的起始索引
// 不存在则返回-1
console.log(message.indexOf("He"));     // 0
console.log(message.indexOf("World"));  // 6
console.log(message.indexOf("xxx"));  // -1
// lastIndexOf() 表示从末尾开始查找
console.log(message.lastIndexOf("o")); // 7
console.log(message.indexOf('o')); // 4
// es6中提供了新的方法
// 如果存在子串则返回true，反之false
console.log(message.includes('Wor')); // true
console.log(message.includes('Wox')); // false

// 判断字符串是否以特定子串开头或结尾
console.log("Hello".startsWith("He")); // true
console.log("Hello".startsWith("Xe")); // false
console.log("Hello".endsWith("lo")); // true






/// -------------------其他API详解------------------------

/// 根据一组 unicode 序列，转换为对应的字符序列
console.log(String.fromCharCode(65,66,67)); // ABC
console.log(String.fromCodePoint(65,66,67)); // ABC 

/// 根据索引访问单个字符
/// String.prototype.at(index) - 返回指定索引处的字符，如果索引超出则返回 undefiend
/// String.prototype.charAt(index) - 返回指定索引处的字符，如果索引超出则返回空字符串
console.log("abc".at(5)); // ""
console.log("abc".charAt(5)); //  undefined

///字符串拼接
/// String.prototype.concat(str) - 合并两个字符串，形成一个新的字符串
/// String.prototype.repeat(count) - 将字符串重复拼接n次
console.log("abc".concat("def")); // abcdef
console.log("abc".repeat(3)); // abcabcabc


/// 字符串截取
/// String.prototype.slice(start,end) - 截取索引 start~end 内容(不包含end)，允许为负值(不推荐)
/// String.prototype.substring(start,end) - 截取索引 start~end 内容(不包含end)，负值表示0
/// String.prototype.substr(start,length) - 从索引start开始，截取length个字符，(不推荐使用)
console.log("abcdefg".slice(0,3)); // abc
console.log("abcdefg".slice(3)); // defg
console.log("abcdefg".substring(3,5)); // de
console.log("abcdefg".substr(3,5)); // defg


/// 删除字符串首部、尾部、首部尾部空格;
/// String.prototype.trimStart()
/// String.prototype.trimEnd()
/// String.prototype.trim()
console.log("  abc ".trimStart());

/// 字符串分割
/// String.prototype.split()
console.log("hello,world".split(',')); // [ 'hello', 'world' ]
/// 将字符数组拼接为字符串
console.log(['a','b','c'].join('-')); // a-b-c

/// 正则匹配处理

