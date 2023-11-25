// 引入store
import store from "../store"
import {subAction} from "../store/action"

// counter减少方法
const sub = (num)=>{
    // // 对store派发action，完成counter的减少
    store.dispatch(subAction(num))
}

const Profile = ()=>{
    return(
        <div>
            <h2>Profile</h2>
            <div>
                <button onClick={()=> sub(1)}>-1</button>
                <button onClick={()=> sub(3)}>-3</button>
                <button onClick={()=> sub(5)}>-5</button>
            </div>
        </div>
    )
}

export default Profile