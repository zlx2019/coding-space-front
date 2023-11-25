// 引入redux
const {createStore} = require("redux")
// 引入 reducer实现
const reducer = require("./reducer")

// 创建状态，将对应状态的reducer传入，并且获取初始化的状态数据
const store = createStore(reducer)

// 将状态对外导出
module.exports = store


