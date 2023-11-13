// 导入Item子组件
import {Item} from "./components/Item";

/**
 * 定义项目根组件
 * @returns {JSX.Element}
 * @constructor
 */
export const App = ({notes}) =>{
    return (
        <div className="container">
            {/*使用子组件*/}
            {notes.map((item,index) => <Item note={item} key={index}/>)}
        </div>
    )
}