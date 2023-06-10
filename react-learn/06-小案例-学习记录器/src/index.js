import ReactDOM from 'react-dom/client'
// 引入样式文件
import './index.css'

// 导入App根组件
import {App} from "./App";

// 获取root元素
const root = ReactDOM.createRoot(document.getElementById('root'))


// 将App根组件替换掉原生的模板root元素
root.render(<App/>)