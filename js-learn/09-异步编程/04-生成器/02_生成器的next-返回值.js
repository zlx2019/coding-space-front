/**
 * 生成器函数中可以使用 yield 关键字来控制函数的执行，并且通过函数的next()方法进行调用;
 * 调用next()方法后，会按照调用次数，依次获取到函数中 yield 表达式的返回值;
 */

function* gen(){

    // 当首次执行生成器next()方法时，会执行到第一个 yield 关键字的右侧表达式
    // 并且将该表达式的值作为参数返回
    console.log("执行完函数第一阶段")
    yield 1001;

    // 第二次调用next()方法时，要执行的表达式
    console.log("执行完函数第二阶段")
    yield 2002;
}

// 生成器返回值
const g = gen() 
p1 = g.next() // 执行完函数第一阶段
console.log(p1.value); // 1001
p2 =  g.next() // // 执行完函数第一阶段
console.log(p2.value); // 2002