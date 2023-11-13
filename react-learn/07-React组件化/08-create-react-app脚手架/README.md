# 使用Webpack和create-react-app 创建React项目

请事先安装好Nodejs

## 安装流程
### 1. 安装脚手架
```shell
npm install create-react-app -g
```

### 2. 创建项目
```shell
create-react-app [项目名]
```
注意: 项目名不能有大写字母

### 3. 运行项目
```shell
npm run start
```

### 4. 测试
```shell
npm run test
```

### 5. 打包项目
```shell
npm run build
```

### 6. 
```shell
npm run eject
```

## 目录结构解析

```lua
├── build -- 打包后
├── public -- 入口index.html
└── src    -- 源代码 
├── package.json    -- 依赖管理
├── package-lock.json
```


## 自定义项目结构

### 1. 删除`src/`下的所有文件

### 2. 创建`App.jsx`组件
```javascript
export default function App(){
    return (
        <>
            <h1>Hello React</h1>
        </>
    )
}
```

### 2. 新建`index.js`入口文件
```javascript
// 引入ReactDOM
// 新版本18 需要从`react-dom/client`包引入
import ReactDOM from 'react-dom/client'

// 导入组件
import App from './App'

// 挂载root元素
const root = ReactDOM.createRoot(document.getElementById('root'))
// 渲染
root.render(<App/>)

```