// Date内置类，是JavaScript中对时间和日期的表示

// 创建时间的几种方式
// 1. 获取当前系统时间
let now = new Date()
console.log(now); // 2023-11-08T07:06:24.505Z

// 2. 传入指定格式的字符串，获取指定的时间
let date1 = new Date("2023-08-06")
console.log(date1); // 2023-08-06T00:00:00.000Z

// 3. 传入具体的时间: 年，月，日，时，分，秒，毫秒 这样获取的是最精准的时间
// 注意 月是从0开始的
let date2 = new Date(2023,5,6,10,20,30,333) 
console.log(date2); // 2023-06-06T02:20:30.333Z

// 4. 根据一个Unix时间戳创建 （ms毫秒）
// 时间戳是一个从 1970:01:01 00:00:01 开始以毫秒开始计时的整数
console.log(new Date(0)); // 1970-01-01T00:00:00.000Z
// 表示获取从开始计时后的1000ms的时间
console.log(new Date(1000)); // 1970-01-01T00:00:01.000Z

// 获取当前系统时间戳
let timestamp = Date.now()
console.log(timestamp); // 1699438179291