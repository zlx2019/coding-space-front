// 状态的Action定义工具函数


/**
 * 创建 chang_name Action
 * @param {*} name 参数
 */
const changeNameAction = (name) => {
    return {type: "change_name", name}
}

/**
 * 创建 age_add Action
 * @returns 
 */
const ageAddAction = () => ({type: "add_age"})

// 导出定义action的工具函数，提供给开发者使用
module.exports = {
    changeNameAction,
    ageAddAction
}