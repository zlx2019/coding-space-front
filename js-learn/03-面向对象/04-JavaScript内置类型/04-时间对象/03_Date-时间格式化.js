
/**
 * 日期的表示方式有两种: 
 *  - RFC 2822标准
 *   浏览器默认打印的时间格式就是该标准:
 *      Wed Nov 08 2023 16:50:45 GMT+0800 (中国标准时间)
 *      
 *  - ISO 8601标准
 *   对于国内来说，这种标准阅读并不友好，我们更习惯使用 ISO 8601的标准
 *      2023-02-02T23:24:30.111Z
 *      YYYY: 年份
 *      MM: 月份
 *      DD: 日
 *      HH: 时
 *      mm: 分
 *      ss: 秒
 *      .sss: 毫秒
 *      Z: 时区
 */

// 获取当前时间
let now = new Date()
// 将时间转为 RFC标准
console.log(now.toUTCString()); // Wed, 08 Nov 2023 08:58:50 GMT
// 将时间转为 ISO标准
console.log(now.toISOString()); // 2023-11-08T08:58:50.734Z


/**
 * 时间格式化工具方法
 * @param {*} fmt 格式
 * @param {*} date 要格式化的时间
 * @returns 
 */
function dateFormat(date,fmt) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "M+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "m+": date.getMinutes().toString(),         // 分
        "s+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

console.log(dateFormat(new Date(),"YYYY-MM-dd HH:mm:ss")); // 2023-11-08 18:04:04