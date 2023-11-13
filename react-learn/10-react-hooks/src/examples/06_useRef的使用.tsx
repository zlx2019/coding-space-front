import { log } from 'console';
import React,{useRef,FC} from 'react'
import { Button,Input } from "semantic-ui-react";


/**
 * useRef() hook 用于获取元素的原生DOM对象
 * 下面通过 useRef 获取 input 元素的dom,并且进行聚焦
 */
export const App: FC = ()=>{

    // 使用 useRef hook 创建Ref对象
    const inputRef = useRef<HTMLInputElement>()

    const btnClick = ()=>{
        // inputRef.current 对象就是原生dom对象
        console.log(inputRef.current);
        // 让输入框聚焦
        inputRef.current?.focus()
        
    }

    return (
        <>
            {/* 将inputRef对象 绑定到要获取的dom元素上 */}
            <Input ref={inputRef} type='text'/>
            <br/>
            <Button onClick={btnClick}>获取Input聚焦</Button>
        </>
    )
}