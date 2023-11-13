# React组件
 React组件分为两种
 - 函数式组件
 - 类组件

### 函数组件
函数式组件就是一个返回`JSX`语法的Js普通函数
```javascript
function App(){
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}
```
以上就是一个最简单的函数组件。
注意: 组件名(函数名)必须大写字母开头。

### 类组件
类组件方式,类组件相比较函数式组件较为麻烦一些,它需要以下两点操作:
- 继承`React.Component`对象
- 实现`render()`方法,该方法返回值就是一个Jsx语法表达式
```javascript
import React from "react";
class User extends React.Component{
    render() {
        return (
            <>
                <h1>Hello User(类组件)</h1>
            </>
        )
    }
}
```
<hr>
## 总结
- 无论是函数组件还是类组件都能实现一样的功能
- 函数组件的实现方式更为简单优雅
- 推荐使用函数组件

## props-组件数据传递
在React中,组件与组件之前的数据通过类似于标签属性的方式进行传递.
### 函数组件传递数据
在组件函数中,定义一个`props`参数,用来接收父组件传递的所有数据:
```javascript
export function App(props){
    return(
        <>
            <h1>{props.message}</h1>
        </>
    )
}
```
使用该组件,并且传递数据:
```javascript
<App message="Hello App"/>
```
注意: **函数组件内的`props`数据是只读的,无法进行修改。**

<hr>

## state-组件响应式数据
Vue2如果想定义一个自动响应渲染视图的变量只需要在`data(){}`中定义即可,而Vue3则需要通过`ref()`或者`reactive()`来定义。

而在React中,相比较起来会较为麻烦,需要通过`useState()`函数来定义
```javascript
import {useState} from "react";
const [message,setMessage] = useState("hello")
```
该函数返回一个数组:
- 第一个返回值为变量初始值,一般用于初始化页面的初始变量。
- 第二个返回值为修改值的钩子函数,修改值必须通过该函数。
### 示例:
```javascript
import {useState} from "react";
export const App=() => {
    // 创建一个响应式变量,初始值为0
    const [counter,setCounter] = useState(0)

    // 响应式修改值
    // 递增方法
    const incr =() =>{
        // value参数为上一次修改后的最新的变量值
        setCounter(value=> value+1)
    }
    // 递减方法
    const decr = () => {
        setCounter(value=> value-1)
    }
    return  (
        <>
            <h1 >{counter}</h1>
            <button onClick={incr}>+1</button>
            <button onClick={decr}>-1</button>
        </>
    )
}
```