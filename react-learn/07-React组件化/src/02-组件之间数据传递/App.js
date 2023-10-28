/**
 * 函数组件之间的数据传递 (父传子)
 * 函数组件中的函数形参中可以定义一个props,用来接收父组件传递下来的数据
 */

/**
 *
 * @param props 参数
 */
export function App(props){
    return(
        <>
            <h1>{props.message}</h1>
        </>
    )
}

/**
 * 也可以使用对象结构的方式
 */
export const Home = ({message}) => {
  return(
      <>
        <h1>{message}</h1>
      </>
  )
}