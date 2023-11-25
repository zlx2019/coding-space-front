
// 定义类
class User{
    constructor(name,age,height,hobby){
        this.name = name
        this.age = age
        this.height = height
        this.hobby = hobby
    }
    // 获取实例的迭代器方法
    [Symbol.iterator](){
        const entries = Object.entries(this)
        let index = 0
        return {
            next: ()=>{
                if(index < entries.length){
                    return {done: false, value: entries[index++]}
                }
                return {done: true}
            },
            // 当迭代过程中，还未完成时，主动中断后执行的函数
            // 比如说迭代过程中，break、return、throw了;
            return: ()=>{
                return {done: true}
            }
        }
    }

    // 迭代遍历 实例的属性和值
    show(){
        for(const entrie of this){
            const [key,value] = entrie
            console.log(`${key} - ${value}`);
        }
    }
}

const u1 = new User("王五",18,188.8,['唱','跳','rap'])
u1.show()
// name - 王五
// age - 18
// height - 188.8
// hobby - 唱,跳,rap