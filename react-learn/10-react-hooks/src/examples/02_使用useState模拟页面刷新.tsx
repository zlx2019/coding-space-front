import React, { useState } from "react";
import { Button } from "semantic-ui-react";


export const App: React.FC = ()=>{
    // 设置一个状态，以空对象为初始值
    const [_,forceUpdate] = useState({})

    // 将调用该函数时，使用一个空对象刷新该状态，借此实现页面的主动刷新
    const onRefresh = ()=> forceUpdate({});

    return(
        <div>
            <Button onClick={onRefresh}>点击刷新 -- {Date.now()}</Button>
        </div>
    )
}