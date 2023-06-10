import {Component} from "react";

/**
 * 类组件方式,类组件相比较函数式组件较为麻烦一些
 * 它需要继承React.Component对象,并且实现render函数
 *
 */

// 定义User类
export class User extends Component{
    render() {
        return (
            <>
                <h1>Hello User(类组件)</h1>
            </>
        )
    }
}