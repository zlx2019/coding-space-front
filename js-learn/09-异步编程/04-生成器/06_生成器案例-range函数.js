/**
 * 使用生成器，实现类似于Python中的range函数
 * 生成一个序列，范围为 0 ~ n;
 */

// 定义 range的生成器


/**
 * 生成器: 根据指定的数字范围，生成数字项
 * @param start 起始数
 * @param end   结尾数(不包含)
 */
function * rangeGenerator(start,end){
    for(let i = start; i < end; i++){
        yield i
    }
}

// 利用生成器，创建指定数字范围的数组
function range(i,j){
    if(i && j){
        return Array.from(rangeGenerator(i,j))
    }
    return Array.from(rangeGenerator(0,i))
}

console.log(range(2)); // [ 0, 1 ]
console.log(range(4)); // [ 0, 1, 2, 3 ]
console.log(range(6)); // [ 0, 1, 2, 3, 4, 5 ]
console.log(range(2,7)); // [ 2, 3, 4, 5, 6 ]