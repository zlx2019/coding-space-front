## 使用Vite构建React项目
通过如下命令构建React项目:
###  1.构建项目
**npm**
```shell
 npm create vite [项目名] --template react
```
**yarn**
```shell
yarn create vite [项目名] --template react 
```

### 2.下载依赖
```shell
npm install
或者
yarn install
```

### 3.运行项目
```shell
npm run dev
或者
yarn dev
```


## 配置vite 别名
### 1.下载依赖
```sh
npm i -D @types/node
```

### 2.更改配置
修改`vite.config.js`文件
```js
import {join} from 'path'
export default defineConfig({
  // 配置别名
  resolve: {
    alias: {
      '@': join(__dirname, './src/')
    }
  }
})

```

如果是基于ts，则还需要修改`tsconfig.json`文件
```json
{
  "compilerOptions": {
    /* 配置ts识别 `@`别名 */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

```