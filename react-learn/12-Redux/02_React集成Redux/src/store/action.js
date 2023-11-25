// 定义 counter store 可以派发的 action

import {ADD,SUB} from "./constant"

// counter增加 action
export const addAction = (value)=>{
    return {type: ADD, value}
}


// counter减少 action
export const subAction = (value)=>{
    return {type: SUB, value}
}
