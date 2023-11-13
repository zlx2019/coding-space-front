/**
 * useEffect() 函数能够监听状态的变化，一旦被监听的状态产生变化后，将会执行一个回调函数
 * 通过如下案例:
 */

import { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'


const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    // 增加数值函数
    const add = (val: number) => {
        setCount(prev => prev + val)
        // 通过useState修改状态值是异步的，如果你执行setXXX函数后立即读取状态，并不一定会读取到最新的值
        // console.log(count); // 错误的值
    }

    // 如果想在一个状态变化后第一时间感知到，可以通过 useEffect()函数来实现
    // useEffect(fn,[val])
    // 参数一: 要执行的回调函数
    // 参数二: 一个数组，数组内的元素则是要监听的状态
    useEffect(()=>{
        console.log(count);
        
    },[count])

    return (
        <>
            <h2>当前Count的值: {count}</h2>
            <Button basic color='orange' onClick={() => add(1)}>+1</Button>
        </>
    )
}


export default Counter;