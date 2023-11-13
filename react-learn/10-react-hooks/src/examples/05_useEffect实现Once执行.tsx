

import React,{useState,useEffect} from "react";

export const App: React.FC = ()=>{
    const [_,setState] = useState({})
    const flushed = ()=>{
        setState({})
    }
    // 以空数组作为依赖项，只会执行一次回调函数
    useEffect(()=>{
        console.log("组件首次渲染完成.");
         
    },[])
    return (
        <>
        <button onClick={flushed}>点击刷新页面</button>
        </>
    )
}