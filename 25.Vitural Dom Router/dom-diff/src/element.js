
// 虚拟DOM元素的类 DOM diff 比较两个对象的区别
// DOM diff作用 根据两个虚拟对象创建出补丁，描述改变的内容，用该补丁更新DOM
// DOM diff 通过JS层面的计算，返回一个patch对象，通过特定的操作解析patch对象，
// 完成页面的重新渲染
class Element {

    constructor(type, props, children) {

        this.type = type
        this.props = props
        this.children = children

    }

}

// 渲染虚拟DOM，返回Object
function createElement(type, props, children) {

    return new Element(type, props, children)

}

// 设置属性
function setAttr(node, key, value) {
    
    switch (key) {

        // node 是一个input或者textArea
        case 'value':
            if (node.tagName.toUpperCase() === 'INPUT'
                || node.tagName.toUpperCase() === 'TEXTAREA')
            {
                node.value = value
            } else {
                node.setAttribute(key, value)
            }
            break;
        case 'style':
            node.style.cssText = value
            break;
        default:
            node.setAttribute(key, value)
    }

}

// render方法可以将虚拟DOM转化为真实DOM
function render(eleObj) {

    let el = document.createElement(eleObj.type) // DOM类型
    for (let key in eleObj.props) { // 元素的属性

        // 设置属性的方法
        setAttr(el, key, eleObj.props[key])
    }

    // 遍历子节点  如果是虚拟DOM，递归继续渲染，文本节点直接渲染
    eleObj.children.forEach(child => {
        // 判断child是不是一个element元素
        child = (child instanceof Element)
            ?
                render(child)
            :
                // 可能child是一个文本节点，字符串
                document.createTextNode(child)
                el.appendChild(child)
    })

    return el

}

function renderDom(el, target) {

    target.appendChild(el)

}

export { createElement, render, Element, renderDom }

// 差异计算：先序深度优先遍历
// 1、用JavaScript对象模拟DOM
// 2、将虚拟DOM转换为真实DOM，并插入页面
// 3、如果有事件发生修改了。虚拟DOM比较两颗虚拟DOM树的差异，得到patch差异对象
// 4、把差异对象应用到真正的DOM树上
