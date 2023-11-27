
/**
 * 假设给一个函数的参数设置默认值，常用的做法
 */
function foo(name,age,address,height){

    // 设置默认值
    // 方式一: 使用三元表达式
    name = name ? name : "我是默认name"
    // 方式二: 使用 || 逻辑操作符
    age = age || 18;
    // 以上都是不严谨的方式，因为这些操作符只能判断参数是否为零值
    // 如果name本来就是一个 "" 空串，那么也会被默认值所修改

    // 方式三: 手动判断
    address = (address === null || address === undefined) ? "我是默认地址" : address

    // 方式四: 通过 ?? 操作符
    // 在ES6之后，提供了一个新的操作符，该操作符只会当变量为 null 或者 undefiend 时才为true
    // 如果是其他基本类型的零值，则会忽略
    height = height ?? 188.8

    console.log(name,age,address,height);
}
foo(undefined,20,null,0)


// 当然，最优雅简单的方式就是直接在形参上添加默认值
// 只有传入 undefiend 才会使用默认值，传入null的话，依然会将null作为参数;
function bar(name = "张三",age = 18){
    console.log(name,age);
}
bar()