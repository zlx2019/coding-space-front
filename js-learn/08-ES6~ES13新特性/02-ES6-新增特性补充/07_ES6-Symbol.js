/**
 * Symbol 是什么呢？ Symbol是ES6中新增的一个基本数据类型，翻译为符号;
 * 语法: 
 *      Symbol(description)
 * description 为该值的描述，可选参数;
 * 
 * 
 * Symbol()函数产生的值都是唯一的，生成后可以作为属性名，用于解决属性名冲突的问题;
 * 也就是说在ES6之后，对象的属性名可以为字符串，也可以为Symbol值;
 */


console.log(Symbol("foo") === Symbol("foo")); // false
console.log(Symbol(null) === Symbol(null)); // false
console.log(Symbol(1) === Symbol(1)); // false
