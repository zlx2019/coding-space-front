import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import { About } from "./components/About";

/**
 * 使用React-Router进行
 * 
 */
function App() {
  return (
    <div className='container'>
      <h1>导航栏</h1>

      <Router>
        <Routes>
          {/* 
            注册路由 
              - path: 路径
              - elemt: 对应要路由的组件
          */}
          <Route path="/"  element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
