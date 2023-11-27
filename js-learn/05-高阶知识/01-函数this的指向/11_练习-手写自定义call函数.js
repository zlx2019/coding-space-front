/**
 * call 与 apply非常相似，唯一的不同点就是参数传递方式不同;
 */

function myCall(thisObj, ...args){
    thisObj = (thisObj === null || thisObj === undefined) ? global : Object(thisObj)
    const fn = Symbol()
    Object.defineProperty(thisObj,fn,{
        configurable: true,
        value: this
    })
    thisObj[fn](...args)
    delete thisObj[fn]
}

Function.prototype.myCall = myCall

function foo(...args){
    console.log(`this: ${this}, args: ${args}`);
}

foo.myCall({name: "张三"},1,2,3) // this: [object Object], args: 1,2,3
