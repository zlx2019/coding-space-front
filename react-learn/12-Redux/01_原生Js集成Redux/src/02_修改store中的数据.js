
// 导入要使用的 redux store
const store = require("./store")

// 获取store中的状态数据
console.log(store.getState()); // { name: '张三', age: 18 }

// 修改store状态 action 修改store的name属性
store.dispatch({type: "change_name", name: "李四"})

console.log(store.getState()); // { name: '李四', age: 18 }

// 修改store状态，派发 action,递增store的age属性
store.dispatch({type: "add_age"})

console.log(store.getState()); // { name: '李四', age: 19 }