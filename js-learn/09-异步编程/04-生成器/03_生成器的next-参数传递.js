/**
 * 生成器的next方法，不止可以获取 yield 语句的返回值，还可以传递参数到指定的代码阶段中;
 * 注意: 第一次执行next()方法是不能传参数的，首次使用的参数可以定义在生成器方法中;
 */

function * gen(){
    var user = {}
    // 接收第二次next()方法传入的参数
    user.name = yield
    console.log(`调用第二次next方法, ${user.name},${user.age},${user.address}`);

    // 接收第三次next()方法传入的参数
    user.age = yield
    console.log(`调用第三次next方法, ${user.name},${user.age},${user.address}`);

    // 接收参数next()方法的参数
    user.address = yield
    console.log(`调用第四次next方法, ${user.name},${user.age},${user.address}`);
}

const g = gen()
g.next()
g.next("张三")
g.next(18)
g.next("北京") 

// 调用第二次next方法, 张三,undefined,undefined
// 调用第三次next方法, 张三,18,undefined
// 调用第四次next方法, 张三,18,北京