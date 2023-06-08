# React基础入门
- 回顾元素DOM的基本操作
- 使用React元素基本操作
  - 创建React元素
  - 创建ReactRoot元素
  - 将React元素渲染到ReactRoot元素中
- React三大核心API
  - React.createElement()
    
    用来创建React元素,一旦创建则无法修改,只能销毁后重新创建新的元素来替补。<br>
    **示例**: 创建一个`div`元素
    ```javascript
    const btn = React.createElement('div',{
    // id属性
    id: 'btn_id' ,
    // class属性
    className: 'btn_class',
    // style属性
    style: {color: 'red'},
    // 绑定事件
    onClick: ()=> alert("点击了一下~")
    },"按钮")
    ```

  - ReactDOM.createRoot()
  
    创建React根元素容器,根容器用来放置React元素。<br>
    **示例:** 获取`id`属性为`root`的DOM元素作为根元素。
    ```javascript
     const root = ReactDOM.createRoot(document.getElementById('root'))
    ```
    
  - ReactDOM.createRoot().render()
  
    首次执行该函数时会将根元素中的所有DOM元素 替换为指定的React元素,后续的连续调用则会使用diff算法进行高效的比对更新。