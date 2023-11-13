

/**
 * useEffect() 函数可以使用一个 函数作为返回值，这个函数被称为清理函数
 * 清理函数的执行时机有两个:
 *  1. 组件卸载之前执行
 *  2. 副作用函数再次执行之前，先执行清理函数
 * 通常用于处理上一次副作用函数未执行完时，中断上一次的函数
 * 如: 在effcet函数内发起网络请求，由于请求时间过长，导致副作用函数有一次执行了，上一次请求还处于阻塞状态.
 * 
 */

import React,{useState,useEffect} from "react";

export const App: React.FC = ()=>{

    useEffect(()=>{
        // 组件初始化时，发起网络请求，获取数据

        // 创建一个控制器，用于控制网络请求的发起与中断
        const controller = new AbortController()
        // 发起请求
        fetch("https://api.liulongbin.top/v1/color",{signal: controller.signal})
            .then(res=> res.json())
            .then(res=> console.log(res))
            .catch(err=> console.log(`请求发生异常: ${err}`))

        // 返回一个函数，作为清理函数
        // 在这个函数内，中断此次网络请求
        return ()=> controller.abort()
    },[])
    return (
        <>
            <button>点击刷新页面</button>
        </>
    )
}