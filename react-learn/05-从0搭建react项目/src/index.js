// 入口文件

// 引入ReactDOM 客户端渲染
import ReactDOM from 'react-dom/client'

// 创建一个元素(组件)
const App= <div>
    <h1>Hello React</h1>
</div>

// 获取主页模板中的根元素,转换为React根元素
const root = ReactDOM.createRoot(document.getElementById('root'))

// 将元素(组件)渲染到根元素
root.render(App)