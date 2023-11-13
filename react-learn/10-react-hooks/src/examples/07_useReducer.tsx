
/**
 * useReducer hook函数主要用来弥补一些useState的不足，它将一个state的多种操作汇总到一起，通过派发的思想进行调用
 * 这样更加便于状态的维护
 * 
 * 下面使用useReducer来简化一个计数器
 */
import {useReducer} from 'react'

export const App = ()=>{

    // count的逻辑处理函数
    //  - state 为当前状态值
    //  - action 为执行动作参数，根据不同的action.type，执行不同的逻辑，最终的返回值则作为新的状态值
    const reduce = (state,action) => {
        switch (action.type){
            case "add":
                return state+=1
            case "sub":
                return state-=1
            default:
                return state
        }
    }
    // useReducer(reduce,initArg,init)
    // 参数
    //  - reduce state的操作逻辑函数
    //  - initArg state的初始值
    const [count,dispatch] = useReducer(reduce,0)

    return (
        <>
            {/* 根据count的派发器 dispatch函数，传入不同的action指令，执行不同的逻辑 */}
            <button onClick={()=> dispatch({type: "sub"})}>减少</button>
            {count}
            <button onClick={()=> dispatch({type: "add"})}>增加</button>
        </>
    )
}

