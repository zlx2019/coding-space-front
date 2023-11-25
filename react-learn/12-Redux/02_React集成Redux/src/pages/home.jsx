import store from "../store"
import {addAction} from "../store/action"

const add = (num)=>{
    // 对store派发action，完成counter的增加
    store.dispatch(addAction(num))
}

// Home 组件，实现Counter的增加功能
const Home = ()=>{
    return (
        <div>
            <h2>Home</h2>
            <div>
                <button onClick={()=> add(1)}>+1</button>
                <button onClick={()=> add(3)}>+3</button>
                <button onClick={()=> add(5)}>+5</button>
            </div>
        </div>
    )
}

export default Home