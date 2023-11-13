import {Component} from "react";

/**
 * 类组件方式,类组件相比较函数式组件较为麻烦一些
 *  1. 它需要继承React.Component对象,并且实现render函数
 *  2. `状态数据`需要设置在组件中的`state`中
 *
 */

// 定义User组件
export class User extends Component{

    // 实现render()函数
    render() {
        return (
            <>
                <h1>Hello User(类组件)</h1>
            </>
        )
    }
}