/**
 * 随机生成一种颜色
 */
function randomColor(){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgb(${r},${g},${b})`
}

// 获取所有class 为item 的dom元素
const itemElems = document.querySelectorAll('.item')
// 为每一个元素设置随机背景颜色
for (const item of itemElems){
    item.style.backgroundColor = randomColor();
}

