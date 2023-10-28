/**
 *  类组件的state数据操作
 *  1. 在构造方法内定义state
 *  2. 通过组件的this.setState()来修改state数据
 */

import React from "react";

/**
 * 定义Home(类组件)
 */
export class Home extends React.Component{
    // 构造方法
    constructor() {
        super();
        // 定义状态数据
        this.state = {
            counter: 0
        }
    }

    // 递增
    incr(){
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }
    // 递减
    decr(){
        this.setState(prevState=>({
            counter: prevState.counter - 1
        }))
    }

    // 实现render方法
    render(){
        return(
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={this.incr.bind(this)}>+1</button>
                <button onClick={this.decr.bind(this)}>-1</button>
            </>
        )
    }
}