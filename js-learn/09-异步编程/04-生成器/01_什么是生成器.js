
/**
 * 生成器是ES6中新增的一种技术，是一种动态控制函数的执行的能力。
 * 它可以让我们更加灵活的控制一个函数，什么时候停止执行，什么时候继续执行;
 * 在Python中也存在迭代器与生成器，与Js中的非常相似，很多异同之处;
 * 
 * 首先，生成器也是一个函数，但是和普通的函数有些区别:
 *  - 生成器函数在 function 关键字后面加一个符号: *
 *  - 在生成器函数中，可以通过 yield关键字来控制函数的停止；
 *  - 生成器函数返回的是一个Generation对象;
 * 
 * 生成器，事实上是一种特殊的迭代器，因为它符合迭代的协议:
 *  - Generation对象有next()方法
 *  - 并且返回值也满足条件，包含 value 和 done 属性;
 */


/**
 * 创建一个生成器函数，可以生成3个元素，分别为1、2、3;
 */
function * numberGen(){
    console.log("执行第一段代码...");
    yield 1

    console.log("执行第二段代码...");
    yield 2

    console.log("执行第三段代码...");
    yield 3
}

// 获取生成器
const gen = numberGen()
console.log(gen); // Object [Generator] {}

// 首次调用next()，开始执行生成器函数代码
// 执行到第一个yield语句，获取该语句的返回值，并且停止执行,直到再次调用next()
const firstItem =  gen.next()
console.log(firstItem); 
// 执行第一段代码...
// { value: 1, done: false }


console.log(gen.next());
// 执行第二段代码...
// { value: 2, done: false }

console.log(gen.next());
// 执行第三段代码...
// { value: 3, done: false }

// 当done为true时，表示生成器没有可生成的数据了
console.log(gen.next()); // { value: undefined, done: true }
