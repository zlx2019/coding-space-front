/**
 * 到目前为止，我们学了迭代器、可迭代对象、yeild关键字、生成器等;
 * 现在我们将这些东西综合到一起，定义一个可迭代类;
 * 需求: 
 *  定义一个Person类，并且该类的实例对象被 for-of 迭代时，迭代该类的所有属性名'
 */

class Person{
    constructor(name,age,height){
        this.name = name
        this.age = age
        this.height = height
    }

    // 获取类的迭代器方法
    // 定义成生成器函数，返回一个生成器(特殊的迭代器)
    *[Symbol.iterator](){
        // 使用 yield* 语法糖优化代码
        // 自动遍历右侧的可迭代对象中的每一个元素
        yield* Object.keys(this)
    }
}

const p = new Person()
for(const name of p){
    console.log(name);
}
// name
// age
// height