import ReactDOM from 'react-dom/client'

// 导入组件
import {App,Home} from './App'
import {User} from './User'

const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染组件
root.render(
    <>
        <App/>
        <Home/>
        <User/>
    </>
)