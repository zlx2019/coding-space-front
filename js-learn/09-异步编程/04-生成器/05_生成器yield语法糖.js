
function * createArrayIterator(arr){
    for(let index in arr){
        yield arr[index]
    }
}
// 这种使用生成器来替代迭代器，可以简写为如下这种
function * createArrayIterator2(iterable){
    yield* iterable
}


// 这两种定义方式，是一样的，只不过 yield* 是一种语法糖
const names = ["a","b","c"]
for(let item of createArrayIterator(names)){
    console.log(item);
}
for(let item of createArrayIterator2(names)){
    console.log(item);
}