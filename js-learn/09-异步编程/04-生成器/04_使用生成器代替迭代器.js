
/**
 * 在之前介绍迭代器时，我们写了一个方法用于创建数组的迭代器，实现还是较为复杂的
 * 现在学了生成器，我们就可以将生成器当做迭代器来使用;
 */

const names = ["zhangsan", "lisi", "wangwu"]
const nums = [1,2,3,4]

// 定义生成器函数，作为迭代器来使用
function * createArrayIterator(arr){
    for(let index in arr){
        yield arr[index]
    }
}


const namesIter = createArrayIterator(names)
for(let item of namesIter){
    console.log(item);
}
// zhangsan
// lisi
// wangwu

const numsIter  = createArrayIterator(nums)
for(let item of numsIter){
    console.log(item);
}
// 1
// 2
// 3
// 4
