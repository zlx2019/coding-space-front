import ReactDOM from 'react-dom/client'
// 引入样式文件
import './index.css'

// 导入App根组件
import {App} from "./App";

// 获取root元素
const root = ReactDOM.createRoot(document.getElementById('root'))

let notes = [
    {"month": "四月","day": "19日","title":"学习React第一天","times": 40},
    {"month": "四月","day": "20日","title":"学习React第二天","times": 140},
    {"month": "四月","day": "21日","title":"学习React第三天","times": 60},
    {"month": "四月","day": "22日","title":"学习React第四天","times": 10},
]

// 将App根组件替换掉原生的模板root元素
root.render(<App notes={notes}/>)