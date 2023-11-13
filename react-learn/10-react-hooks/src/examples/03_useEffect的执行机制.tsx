

/**
 * useEffect hook函数，一般用于与组件渲染无关的事情，如监听页面渲染、监听状态变化等
 * 语法如下:
 *  useEffect(fn,deps?)
 *  参数一: 要执行的回调函数
 *  参数二: 要监听的状态数据数组
 *      - 如果监听的状态发生了变化，则执行fn回调函数,反之不会执行
 *      - 如果没有指定任何状态，那么每次渲染完成之后则会调用fn回调函数
 *      - 如果deps，为空数组的情况下，那么fn只会在组件第一次渲染完后执行一次;
 * 
 *  注意事项: 
 *      - 不要再useEffect的回调函数内，修改依赖项，这样会造成死循环。
 */

import React,{useState,useEffect} from "react";

export const App: React.FC = ()=>{
    const [_,setState] = useState({})
    const flushed = ()=>{
        setState({})
    }
    // 不监听任何依赖项，函数重新渲染后，则执行该回调
    useEffect(()=>{
        console.log(`重新渲染~ ${Date.now()}`);        
    })
    return (
        <>
        <button onClick={flushed}>点击刷新页面</button>
        </>
    )
}