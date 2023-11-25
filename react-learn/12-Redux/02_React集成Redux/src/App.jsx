import Home from "./pages/home"
import Profile from "./pages/profile"
import "./style.css"
// 引入要使用的状态
import counterStore from "./store/index"
import { useEffect, useState } from "react"


/**
 * App 组件，显示共享数据
 * 由子组件来操作数据
 */
const App = ()=>{
    // 定义状态
    const [state,setState] =  useState({})
    
    // 声明周期钩子函数，页面加载完成后执行
    useEffect(()=>{
        // 获取初始数据
        setState(counterStore.getState())
        // 订阅状态数据变化
        counterStore.subscribe(()=>{
            // 获取最新的状态
            const state =  counterStore.getState()
            setState(state)
        })
    },[])
    
    return (
        <>
            <h2>App Counter: {state.counter}</h2>
            <div className="pages">
                <Home/>
                <Profile/>
            </div>
        </>
    )
}

export default App