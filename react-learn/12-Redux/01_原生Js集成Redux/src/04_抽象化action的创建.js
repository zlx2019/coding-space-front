// 导入要使用的 redux store
const store = require("./store")
const {changeNameAction,ageAddAction}  = require("./store/action")


// 订阅 store 的数据，一旦产生变化后，则执行该回调函数
const cancel = store.subscribe(()=>{
    console.log("store 状态产生变化: ", store.getState());
})

// 派发action，使用封装好的action创建方法
store.dispatch(changeNameAction("李四")) 
store.dispatch(changeNameAction("王五")) 
store.dispatch(ageAddAction())             
store.dispatch(ageAddAction())

// store 状态产生变化:  { name: '李四', age: 18 }
// store 状态产生变化:  { name: '王五', age: 18 }
// store 状态产生变化:  { name: '王五', age: 19 }
// store 状态产生变化:  { name: '王五', age: 20 }
