// 状态的 reducer 操作逻辑实现

// 引入状态的初始化数据
const defaultState = require("./state")

// 定义状态的reducer函数，负责状态的操作逻辑
// 参数一: 当前的state状态数据;
// 参数二: 本次更新操作的action(dispatch派发的action对象);
// 返回值: 返回值将会是最新的状态数据;
function reducer(state = defaultState,action){
    // 根据action.type，执行不同的操作逻辑，返回不同新的状态
    switch(action.type){
        case "change_name":
            // 返回一个新的对象，作为新的状态
            return {...state, name: action.name}
        case "add_age":
            return {...state, age: state.age += 1}
        default:
            return state
    }
}

// 导出状态的 reducer函数，提供给redux，创建store时使用
module.exports = reducer