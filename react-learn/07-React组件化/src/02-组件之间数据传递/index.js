import ReactDOM from 'react-dom/client'

import {App, Home} from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/*使用组件,并且传递message参数*/}
        <App message="Hello App"/>
        <Home message="Hello Home"/>
    </>
)