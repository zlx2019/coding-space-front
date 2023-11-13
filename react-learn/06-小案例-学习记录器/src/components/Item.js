/**
 * 定义函数组件,并且导出
 * @param props 组件数据
 * @returns {JSX.Element}
 * @constructor
 */
export function Item({note}){
    return(
        <div className="item">
            {/*组件左边部分*/}
            <div className="left">
                <div className="month">{note.month}</div>
                <div className="day">{note.day}</div>
            </div>

            {/*组件右边部分*/}
            <div className="right">
                <div className="title">
                    <h2>{note.title}</h2>
                </div>
                <div className="times">
                    {note.times}分钟
                </div>
            </div>
        </div>
    )
}