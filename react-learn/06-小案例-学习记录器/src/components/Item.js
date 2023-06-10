/**
 * 定义函数组件,并且导出
 * @returns {JSX.Element}
 * @constructor
 */
export function Item(){
    return(
        <div className="item">
            {/*组件左边部分*/}
            <div className="left">
                <div className="month">四月</div>
                <div className="day">19日</div>
            </div>

            {/*组件右边部分*/}
            <div className="right">
                <div className="title">
                    <h2>学习React第一章</h2>
                </div>
                <div className="times">
                    40分钟
                </div>
            </div>
        </div>
    )
}