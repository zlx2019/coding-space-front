import {useRef} from "react";


export const App = ()=>{
    /**
     * 使用React获取原生DOM对象
     *      使用react的useRef()函数创建一个容器,用于存储原生DOM的容器
     *      然后将容器挂载到指定的标签元素的`ref`属性上,react就会自动获取该元素的DOM
     */
    const titleRef = useRef()


    const getTitleRef = ()=>{
        console.log(titleRef)
        console.log(titleRef.current)
        //获取了DOM就可以直接操作DOM
        titleRef.current.innerText = "哈哈哈"
    }

    return (
        <>
            {/* 绑定ref属性,用来将DOM注入到容器中*/}
            <h1 id="title" ref={titleRef}>Hello,我是标题</h1>
            <button onClick={getTitleRef}>获取DOM</button>
        </>
    )
}