## 创建流程

### 1. 初始化项目,创建`package.json`文件
   ```shell
    yarn init -y
    ```
   也可以使用npm
   ```shell
   npm init -y
   ```
### 2. 安装React所需依赖
   ```shell
   yarn add react react-dom react-scripts
   ```
   npm方式
   ```shell
   npm install react react-dom react-scripts
   ```
   `react-scripts`库包含了react所需的一系列库。
### 3. 创建主页模板文件 `public/index.html`
   ```html
   <!doctype html>
   <html lang="zh">
   <head>
       <meta charset="UTF-8">
       <title>Index</title>
   </head>
   <body>
       <!--根元素-->
       <div id="root"></div>
   </body>
   </html>
   ```
### 4. 创建js入口文件 `src/index.js`
   ```javascript
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
   ```
### 5. 运行项目:
   ```shell
   npx react-scripts start
   ```
### 6. 打包项目:
   ```shell
   npx react-scripts build
   ```
### 7. 添加脚本命令<br>
   修改`package.json`文件,添加内容如下:
   ```shell
   "scripts": {
      "start": "react-scripts start", //运行项目
      "build": "react-scripts build" // 打包项目
   }
   ```
   配置了脚本命令后就可以更简化的使用如下命令进行运行和打包:
   ```shell
   yarn start
   yarn build
   // 或者
   npm run start
   npm run build
   ```