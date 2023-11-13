
// 我们可以从一个Date对象中，获取详细的时间信息
let now = new Date() 
console.log(now); // 2023-11-08T09:13:57.804Z

// 获取时间的时间戳
console.log(now.getTime()); // 1699434802354

// 获取时间的年份
console.log(now.getFullYear()); // 2023

// 获取月份,0–11），0 表示一年中的第一月。
console.log(now.getMonth()); // 10

// 获取一周的第几天,（0-6），0 表示星期天。
console.log(now.getDay()); // 3

// 获取日份(1-31)
console.log(now.getDate()); // 8

// 获取小时（0–23）。
console.log(now.getHours()); // 17

// 获取分钟
console.log(now.getMinutes()); // 17

// 获取秒
console.log(now.getSeconds()); // 40

// 获取毫秒
console.log(now.getMilliseconds()); // 866