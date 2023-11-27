/**
 * WeakSet类似于Set，但是它有如下特点:
 *  - WeakSet只能存放对象类型,不能存放基本类型
 *  - WeakSet中的元素对象，都是弱引用，弱引用在Gc时，会直接被回收掉;
 *  - 并且WeakSet是不可遍历的，因为里面的元素随时可能会被回收掉，所以这是一种危险行为;
 * 
 * 那么WeakSet有什么样的应用场景呢？这里简单举个栗子，
 *  需求:
 *      定义一个Person类，在类中定义一个running()实例方法，但是要求该方法只能被Person的实例对象调用，其他方式进行调用;
 * 
 * 这个时候我们就可以使用WeakSet来实现，其实使用Set也可以实现，但是需要手动管理内存，而使用WeakSet则无需管理内存泄露问题;
 */

// 用于存放Person的实例对象
// 一旦某个对象不再存在强引用，会被GC回收掉;
const instancePool = new WeakSet()

class Person{
    constructor(){
        // 将实例化的每个对象都放入缓存池
        instancePool.add(this)
    }
    running(){
        // 判断调用者是否是Person的实例，如果不是则无法调用
        if(!instancePool.has(this)){
            console.log("不是Person实例，无法调用running()!");
            return
        }
        console.log("running~");
    }
}

const p = new Person()
// 独立调用方式
const run = p.running
run() // 不是Person实例，无法调用running()!

// 间接调用方式
const obj = {run: run}
obj.run() // 不是Person实例，无法调用running()!


// 只能使用Person实例调用
p.running() // running~