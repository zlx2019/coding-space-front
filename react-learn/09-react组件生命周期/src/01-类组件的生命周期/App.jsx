import React from "react";

// 一般生命周期指的是类组件的生命周期,因为函数时没有生命周期的,需要通过hooks来模拟


// 定义类组件
class App extends React.Component{
    // 1. 类的构造函数最先执行,因为通过构造函数创建类的实例
    constructor(){
        super()
        console.log("1. App constructor -- 执行类组件构造方法");
        this.state = {
            counter: 0
        }
    }
    add() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    // 2. 其次执行render函数
    render(){
        console.log("2. App render -- 执行类组件渲染方法");
        return(
            <>
                <h1>Hello</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={()=> this.add()}>+1</button>
            </>
        )
    }

    // 3. 将组件挂载到DOM树上后,会执行componentDidMount()钩子函数,表示已经挂载完成
    componentDidMount(){
        console.log("3. App componentDidMount -- 执行类组件挂载完成钩子函数");
    }

    // 4. 当组件状态被修改后,会重新执行render()方法,然后执行componentDidUpdate()钩子函数
    componentDidUpdate(){
        console.log("4. App componentDidUpdate -- 组件被更新");
    }

    // 5. 当组件被销毁之前所执行的钩子函数
    componentWillUnmount(){
        console.log("5. App ComponentWillUnmount -- 组件要被销毁");
    }
}


export default App;