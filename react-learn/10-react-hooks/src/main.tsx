import ReactDOM from 'react-dom/client'

/**
 * 程序主入口文件
 */

// 导入自定义样式文件
import '@/index.css'

// 导入 semantic 样式文件
import 'semantic-ui-css/semantic.min.css'
import { App } from './examples/08_memo的使用'

// 渲染根组件
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App/>
)
