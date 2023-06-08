# JSX语法学习
## 什么是JSX?
- JSX是JavaScript的语法扩展,使得我们可以类似于HTML的形式来使用JS。
- JSX也是React中声明式编程的体现。

```javascript
// 创建根元素,并且往根元素中渲染一个h1标签
ReactDOM.createRoot(document.querySelector('#root')).render(<h1>Hello React</h1>)
```