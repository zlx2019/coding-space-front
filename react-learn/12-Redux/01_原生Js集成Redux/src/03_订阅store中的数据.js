
// 导入要使用的 redux store
const store = require("./store")


// 订阅 store 的数据，一旦产生变化后，则执行该回调函数
const cancel = store.subscribe(()=>{
    console.log("store 状态产生变化: ", store.getState());
})

console.log("store 初始化状态: ", store.getState()); // store 初始化状态:  { name: '张三', age: 18 }

// 修改store状态 action 修改store的name属性
store.dispatch({type: "change_name", name: "李四"}) // store 状态产生变化:  { name: '李四', age: 18 }
// 修改store状态，派发 action,递增store的age属性
store.dispatch({type: "add_age"})                   // store 状态产生变化:  { name: '李四', age: 19 }

// 取消 store 的订阅
cancel()

store.dispatch({type: "add_age"})