function foo(msg){
    // 为 msg 设置默认值
    // msg = msg || "default"
    // 可以简写为
    msg ||= "default"    
    console.log(msg);
}

foo("aaa") // aaa
foo("") // default
foo() // default
foo(null) // default


function bar(age){
    // 严谨方式
    // age = age ?? 18
    // 简写为
    age ??= 18
    console.log(age);
}
bar(10) // 10
bar(0) // 0
bar(null) // 18
bar() // 18