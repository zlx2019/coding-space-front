/**
 * 上一步我们手写了一个迭代器，借助于迭代器对数组进行了遍历;
 * 但是你会发现这样存在一个问题，那就是迭代器与 目标对象是两者分开的，也就意味着一个对象想要迭代，就得有一个对应的迭代器;
 * 这样似乎有些麻烦，所以我们可以将迭代器和目标对象结合在一起，或者说绑定在一起;
 * 
 * 可迭代对象就是将对象自己的迭代器绑定在自己身上;
 * 
 * 可迭代对象协议:
 *  - 当一个对象中包含 一个名为 `[Symbol.iterator]`的函数时，它就是一个可迭代对象，该函数用于获取对象的迭代器;
 *  - 可迭代对象 可以使用 for of 来自动遍历
 */


// 手写一个可迭代对象，在对象内设置一个数组属性，迭代该对象时就迭代这个数组;
const info = {
    friends: ['张三','李四','王五'],
    // 获取对象迭代器的方法
    [Symbol.iterator]: function(){
        let index = 0
        // 创建迭代器对象
        const iter = {
            next: ()=>{
                if(index < this.friends.length){
                    return {done: false, value: this.friends[index++]}
                }
                return {done: true}
            }
        }
        return iter
    }
}

// 获取可迭代对象的迭代器
const infoIter = info[Symbol.iterator]()
// 手动迭代对象
console.log(infoIter.next()); // { done: false, value: '张三' }
console.log(infoIter.next()); // { done: false, value: '李四' }
console.log(infoIter.next()); // { done: false, value: '王五' }
console.log(infoIter.next()); // { done: true }


// 通过 for-of 直接遍历可迭代对象
for(const item of info){
    console.log(item);
}

// 张三
// 李四
// 王五

// 一个可迭代对象 必然有 Symbol.iterator方法
const stu = [1,2,3]
console.log(stu[Symbol.iterator]); // [Function: values]
// 执行该方法 获得迭代器对象
console.log(stu[Symbol.iterator]()); // Object [Array Iterator] {}

