
/**
 * flatMap，其实就是map()和flat()方法的结合,对于序列的每一项，先进行map()操作，再将结果flat();
 */

//假如现在有如下需求，将一个字符串数组中的每个元素，进行切割，切割完成后，合并为一个大数组;
const messages = ["Hello world","今天天气真好 对吧?","aaa bbb ccc"]

// 方式一 
// 先对每个字符串进行切割操作，获得一个二维数组
const texts = messages.map(item=> item.split(" "))
console.log(texts); // [ [ 'Hello', 'world' ], [ '今天天气真好', '对吧?' ], [ 'aaa', 'bbb', 'ccc' ] ]
// 将二维数组合并一维数组
const arr = texts.flat(1)
console.log(arr); // [ 'Hello', 'world', '今天天气真好', '对吧?', 'aaa', 'bbb', 'ccc' ]



// 方式二
// 直接使用 flatMap()
const arr2 = messages.flatMap(item=> item.split(" "))
console.log(arr2); // [ 'Hello', 'world', '今天天气真好', '对吧?', 'aaa', 'bbb', 'ccc' ]