import { createElement, render, renderDom } from './element.js'
import diff from './diff'

let vertualDom1 = createElement(
    'ul', { class: 'list' }, [
        createElement('li', { class: 'item' }, [ 'a' ]),
        createElement('li', { class: 'item' }, [ 'b' ]),
        createElement('li', { class: 'item' }, [ 'c' ]),
    ]
)

let vertualDom2 = createElement(
    'ul', { class: 'list-group' }, [
        createElement('li', { class: 'item' }, [ 'a' ]),
        createElement('li', { class: 'item' }, [ 'b' ]),
        createElement('li', { class: 'item' }, [ 'c' ]),
    ]
)

let patches = diff(vertualDom1, vertualDom2)

// console.log(vertualDom)

let el = render(vertualDom1)
console.log(el)

// index.html root
renderDom(el, window.root)



