/**
 * useState()函数，能让函数式组件拥有状态，它是一个管理hooks API
 * 通过useState() 可以实现状态的初始化、读取、更新;
 */

import {useState} from 'react'
import {Button} from 'semantic-ui-react'


export const Counter:React.FC = () => {
    // 通过useState,定义一个count变量
    // 默认值为0，如果想要更改值，需要通过setCount()函数
    const [count,setCount] = useState(0);

    // 增加数值函数
    const add = (val: number)=>{
        setCount(prev=> prev + val)
    }
    // 减少数值函数
    const decr = (val: number)=>{
        setCount(prev=> prev - val)
    }

    return (
        <>
            <h2>当前Count的值: {count}</h2>
            <div>
            <Button basic color='orange' onClick={()=> add(1)}>+1</Button>
            <Button basic color='yellow' onClick={()=> decr(1)}>-1</Button>
            </div>
        </>
    )
}

