
/**
 * Symbol 生成的值是独一无二的，但是我们也可以根据相同的description创建出相同的Symbol值，但是通常我们不会这样脱裤子放屁
 */

const desc = "abc"
const s1 = Symbol.for(desc)
const s2 = Symbol.for(desc)
console.log(s1 === s2); // true