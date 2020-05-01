# 节点 node

HTML 和 CSS 在 JS 中的提现，就是节点

## 获取节点

- getElementById()

  通过 ID 来获取页面上的节点

- getElementsByTagName()

  通过标签名称获取节点

- getElementsByClassName()

  通过class值获取节点

- getElementsByName()

  通过 name 获取节点

- querySelectorAll()

  通过选择器获取元素节点

## 节点相关属性

- childNodes

  获取的元素节点的子节点列表

- children

  获取子节点中的元素节点列表

- nodeType

  节点类型

返回值|节点名称|节点类型
-|-|-
3|文本节点|textnode
2|属性节点|
1|元素节点|elementnode

- attributes

  可以获取到文本节点获取元素的所有属性的集合

- innerHTML

  可以获取到文本节点设置节点的内部内容

- innerText

  可以获取到文本节点设置节点的内部文本内容

- className

  可以获取到文本节点设置节点的 class 值

- nodeName

  可以获取到文本节点返回节点的大写字母标签名称

- nodeValue

  可以获取到文本节点返回节点的 value 值

- childNodes

  可以获取到文本节点返回节点的子元素的 nodelist 对象

- firstChild

  返回节点对象的第一个子元素

  可以获取到文本节点

- lastChild

  返回节点对象的最后一个子元素

  可以获取到文本节点

- parentNode

  返回节点的父级节点

- previousSibling

  返回上一个兄弟节点

- nextSibling

  返回下一个兄弟节点

- chileElementCount

  返回所有元素节点(不包括文本节点和注释节点，ie8 不支持)

- offsetHeight / offsetWidth / offsetLeft / offsetTop

  返回元素的相对应的属性

- scrollHeight / scrollWidth / scrollLeft / scrollTop

  返回元素整个元素的宽度和高度(包括了滚动条和隐藏的部分)

## 节点元素的方法

- appendChild(节点名称)

  向节点中添加子节点

- getAttributeNode(属性)

  返回指定的元素的属性节点

- hasAttribute(属性)

  如果元素拥有指定的某个属性，则返回true，否则返回false

- insertBefore(需要插入的节点，指定的节点)

  在指定的节点之前插入新的节点

- removeAttribute()

  从元素中移除指定的属性

- removeChild()

  从元素的节点列表中移除指定的子节点

- replaceChild(新节点，旧节点)

  把指定节点进行替换

- item()

  通过指定的下标获取相应的节点
