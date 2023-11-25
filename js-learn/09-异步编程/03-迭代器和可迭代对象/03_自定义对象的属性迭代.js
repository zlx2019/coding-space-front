
/**
 * 在之前我们提到过，对象的 属性 遍历可以通过 for-in 来遍历，而不能通过 for-of 遍历
 * 我们可以通过迭代器，使得对象的属性也可以 for-of遍历；
 */

/**
 * 创建一个可以迭代对象 key 的迭代器
 */
function createIterator(){
    // 获取对象的所有属性名称
    const keys = Object.keys(this)
    let index = 0
    // 创建迭代器并且作为返回值;
    return {
        next: () => {
            if(index < keys.length){
                return {done: false, value: keys[index++]}
            }
            return {done: true}
        }
    }
}


// 定义一个可迭代对象
const userInfo = {
    name: "张三",
    age: 22,
    height: 188.8,
    [Symbol.iterator]: function(){
        return createIterator.apply(this)
    }
}

// 迭代该对象的所有key
for(const key of userInfo){
    console.log(key);
}