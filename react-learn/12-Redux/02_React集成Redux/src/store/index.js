import {createStore} from "redux"

// 引入状态的reducer函数
import reducer from "./reducer"

// 创建 Counter 状态管理 - store
const store = createStore(reducer)

// 导出状态
export default store
