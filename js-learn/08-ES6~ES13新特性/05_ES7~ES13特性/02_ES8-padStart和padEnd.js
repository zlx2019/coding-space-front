/**
 * ES8中，字符串新增了两个方法:
 *  - padStart()
 *  - padEnd()
 */

const str = "1"
// 如果字符串长度不够4，那么在字符串末尾追加0，补满长度到4
console.log(str.padEnd(4,"0")); // 1000
// 往字符串头部补位
console.log(str.padStart(4,"0")); // 0001