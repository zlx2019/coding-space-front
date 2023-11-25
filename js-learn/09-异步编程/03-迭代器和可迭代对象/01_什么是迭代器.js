/**
 * 迭代器(Iterator) 是一种可以对可迭代对象进行遍历的特殊对象,并且这个遍历过程中，完全不会暴露内部的细节，如索引、索引越界等异常;
 * 
 * 简单来说，迭代器就是用来辅助某个对象进行遍历的对象;
 * 在Js中，只要一个对象符合迭代器协议，那么这个对象就可以是一个迭代器;
 * 
 * 迭代器协议 实现 next()方法,next()方法需要满足如下规则:
 *  - 返回一个对象,该对象必须包含 down、value两个属性
 *  - done: Boolean类型，表示是否已经迭代完所有元素，true表示已完成，没有可迭代元素了;
 *  - value: 元素值;
 */


// 下面我们写一个最简陋的迭代器
// names是一个数组，而数组本身是有迭代器的，所以可以使用for in 来遍历
// 但是我们这里不使用原生提供的迭代器，而是自己手写一个
const names = ['张三','李四','王五']


// 1.创建迭代器对象
let index = 0
const customIter = {
    // 2. 定义next方法，每一次迭代都会执行该方法，获取元素
    next: function(){
        // 3.返回一个对象，将元素设置到value属性中，down属性为false，表示还没有结束;
        // 如果已经没有元素了，就将 down属性设置为true;
        if(index < names.length){
            return {done: false, value: names[index++]}
        }
        return {done: true}
    }
}


// 使用自定义的迭代器来获取names中的每一项元素
// 获取第一项元素
console.log(customIter.next());  // { done: false, value: '张三' }
console.log(customIter.next());  // { done: false, value: '李四' }
console.log(customIter.next());  // { done: false, value: '李四' }
console.log(customIter.next());  // { done: true }
// 返回值的donw为true时，表示迭代结束

for(const item in customIter){
    console.log(item);
}