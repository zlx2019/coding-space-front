
/**
 * React.memo(FC) 是一个高阶组件，通常会用该组件来包裹一些自定义子组件
 * 主要作用就是当一个父组件渲染时，下面的子组件状态未更改的情况下，不会重新渲染子组件
 *  - 接收一个函数式组件作为参数，并且将该组件包装过后，返回一个新组件，并且持有缓存功能
 *  - 如果该组件的props没有变化，那么则会一直返回缓存中的内容
 */

import React, { useState } from "react";

export const App = () => {
    console.log("App组件渲染...");
    
    const [_,setState] = useState({})

    return (
        <>
            <h1>App组件</h1>
            <button onClick={()=> setState({})}>渲染App组件</button>
            <A/>
        </>
    )
}


// 使用 memo 将A组件包裹，当父组件渲染时，不需要重新渲染该组件
const A = React.memo(() =>{
    console.log("A组件渲染...");
    return (
        <>
            <h2>A组件</h2>
            <B/>
        </>
    )
}
)
const B = () =>{
    console.log("B组件渲染...");
    return (
        <>
            <h3>B组件</h3>
            <C/>
        </>
    )
}

// 使用memo 高阶组件包裹
const C = React.memo(() => {
    console.log("C组件渲染...");
    return (<h4>C组件</h4>)
})