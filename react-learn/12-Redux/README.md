# Redux

## 什么是Redux?
Redux是一个Js应用的`状态管理`容器，不仅仅限于与React集成，Vue也可以;

## 为什么需要Redux?
React主要解决视图层的DOM渲染，但是`State`留给开发者来管理,并且它非常轻量级(依赖只有2kb);

## Redux核心概念

### Store
要管理的数据(state);

### action
所有被管理的数据的变化，都必须通过`派发(dispatch)`一个`action`来进行更新;
action是一个对象，用于描述更新的`type`和`content`

### reducer
reducer是一个纯函数，主要负责`state`的操作逻辑,根据派发的`action`执行不同的操作，返回新的`State`，并且更新到`Store`；

### 状态管理流程
1. 定义初始数据，形成一个`State`;
2. 创建`State`对应的`reducer`方法，实现`State`的操作逻辑，用于获取最新或默认的`State`;
3. 创建`Store`，将`reducer`方法传递进去;
4. 通过`Store`的`dispatch`方法，派发一个`action`行为;
5. 调用`Store`的`dispatch`方法，实际会执行对应的`reducer`;
6. 在`reducer`内，根据`action.type`执行不同的操作逻辑，最终返回一个新的`State`;
7. 将新的`State`更新到`Store`中;

## 原生Js整合Redux
### 安装Redux
```sh
npm install redux
```

<br>

```sh
yarn add redux
```

### 定义state
```js
// 初始化状态
const defaultState = {
    name: "张三",
    age: 18,
}
```
### 创建reducer
```js
// 定义状态的reducer函数，负责状态的操作逻辑
// 参数一: 当前的state状态数据;
// 参数二: 本次更新操作的action(dispatch派发的action对象);
// 返回值: 返回值将会是最新的状态数据;
function reducer(state = defaultState,action){
    // 根据action.type，执行不同的操作逻辑，返回不同新的状态
    switch(action.type){
        case "change_name":
            // 返回一个新的对象，作为新的状态
            return {...state, name: action.name}
        case "add_age":
            return {...state, age: state.age += 1}
        default:
            return state
    }
}
```
### 创建store
```js
const {createStore} = require("redux")
// 创建状态，将对应状态的reducer传入
const store = createStore(reducer)
```

### 操作store
```js
// 获取store中的状态数据
store.getState()
// 修改store状态 action 修改store的name属性
store.dispatch({type: "change_name", name: "李四"})
// 修改store状态，派发 action,递增store的age属性
store.dispatch({type: "add_age"})
// 订阅 store 的数据，一旦产生变化后，则执行该回调函数
const cancel = store.subscribe(()=>{
    console.log("store 状态产生变化: ", store.getState());
})
```

## React集成Redux
### 创建项目
```sh
create-react-app xxx
```

### 安装redux

```sh
yarn add redux
```
具体案例参考 [这里](https://github.com/zlx2019/fronts-learn/react-learn/12-Redux/02_React集成Redux)