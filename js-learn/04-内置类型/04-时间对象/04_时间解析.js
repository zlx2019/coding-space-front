
// 将Date转换为时间戳
let date= new Date()
// 方式一
console.log(date.getTime()); // 1699438420251
// 方式二
console.log(date.valueOf()); // 1699438420251
// 方式三
console.log(+date); // 1699438420251



let dateStr = "2023-10-10"
// 将字符串，转为Date
// 方式一
let date2 = new Date(dateStr)
console.log(date2); // 2023-10-10T00:00:00.000Z

// 方式二
// 解析一个表示日期的字符串，返回时间戳,如果格式不能被解析，那么会返回NaN
let timestamp = Date.parse(dateStr)
console.log(timestamp); // 1696896000000
let date3 = new Date(timestamp)
console.log(date3);  // 2023-10-10T00:00:00.000Z
