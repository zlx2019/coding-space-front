import {useState} from "react";

/**
 * 函数组件的state数据操作
 */
export const App = () => {
    // 创建一个响应式变量,初始值为0
    const [counter, setCounter] = useState(0)

    // 响应式修改值
    // 递增方法
    const incr = () => {
        // value参数为上一次修改后的最新的变量值
        setCounter(value => value + 1)
    }
    // 递减方法
    const decr = () => {
        setCounter(value => value - 1)
    }
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={incr}>+1</button>
            <button onClick={decr}>-1</button>
        </>
    )
}