import {ADD,SUB} from "./constant"

// 定义初始状态 - state
const defaultCounterState = {
    counter: 0
}

// 状态操作函数 - reducer
export default function reducer(state = defaultCounterState,action){
    switch(action.type){
        case ADD:
            return {counter: state.counter += action.value}
        case SUB:
            return {counter: state.counter -= action.value}
        default:
            return state
    }
}

