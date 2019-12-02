function diff(oldTree, newTree) {
    let patches = {}

    let index = 0

    // 递归树 比较后的结果放到补丁包中
    walk(oldTree, newTree, index, patches)

    return patches
}

function diffAttr(oldAttrs, newAttrs) {

    let patch = {}

    // 判断老的属性和新的属性的关系
    for (let key in oldAttrs) {
        if (oldAttrs[key] !== newAttrs[key]) {
            patch[key] = newAttrs[key] // 有可能是undefined
        }
    }

    // 老节点没有新节点的属性
    for (let key in newAttrs) {
        if (!oldAttrs.hasOwnProperty(key)) {
            patch[key] = newAttrs[key]
        }
    }

    return patch

}
// const ATTRS = ATTRS
function walk(oldNode, newNode, index, patches) {

    let currentPatch = []
    if (oldNode.type === newNode.type) {
        // 比较属性是否有修改
        let attrs = diffAttr(oldNode.props, newNode.props)
        console.log(attrs)
        // if (Object.keys(attrs).length) {
        //     currentPatch.push({ type: ATTRS, attrs })
        // }

    }

}

// 规则：
/*
    1.当节点类型相同时，会比较属性，产生一个属性的补丁包{type: 'ATTRS', arrt: {class: 'list-group'}}
    2.新的DOM节点不存在，{type: 'REMOVE', index: XXX}
    3.节点类型不相同，直接采用替换模式{type: 'REMOVE', newNode: newNode}
    4.文本的变化 {type: "TEXT", text:1}
*/

export  default  diff;