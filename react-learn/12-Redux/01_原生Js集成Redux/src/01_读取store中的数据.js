
// 导入要使用的 redux store
const store = require("./store")

// 获取store中的状态数据
let state =  store.getState()

console.log(state); // { name: '张三', age: 18 }