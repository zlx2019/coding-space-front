# React组件
 React组件分为两种
 - 函数式组件
 - 类组件

## 函数组件
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

## 类组件
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

## 总结
- 无论是函数组件还是类组件都能实现一样的功能
- 函数组件的实现方式更为简单优雅
- 推荐使用函数组件