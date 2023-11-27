

/**
 * 自定义 bind 函数: 将this和函数绑定，并且作为一个新的函数返回：
 * @param thisObj 要绑定的this对象
 */
function myBind(thisObj,...initArgs){
    thisObj = (thisObj === null || thisObj === undefined) ? global : Object(thisObj)
    const fn = Symbol()
    Object.defineProperty(thisObj,fn,{
        value: this,
    })
    return (...args) => {
        // thisObj.fn(...initArgs.concat(args))
        thisObj[fn](...[...initArgs,...args])
    }
}

Function.prototype.myBind = myBind

function foo(name,age){
    console.log(`this: ${this}, name:${name} age: ${age}`);
}
var newFoo = foo.myBind({})
newFoo("张三",18) // this: thisString, name:张三 age: 18
newFoo("王五",23) // this: thisString, name:王五 age: 23
newFoo("赵六",19) // this: thisString, name:赵六 age: 19
