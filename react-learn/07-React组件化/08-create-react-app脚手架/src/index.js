// 引入ReactDOM
// 新版本18 需要从`react-dom/client`包引入
import ReactDOM from 'react-dom/client'

// 导入组件
import App from './App'
import Home from './Home'
import Ablout from './About'

// 挂载root元素
const root = ReactDOM.createRoot(document.getElementById('root'))
// 渲染
root.render(
  <>
    <App />
    <Home />
    <Ablout />
  </>
)
