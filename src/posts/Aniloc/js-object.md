---
# 这是文章的标题
title: JavaScript对象
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Aniloc
# 设置写作时间
date: 2022-11-16
# 一个页面可以有多个分类
category:
  - Aniloc
# 一个页面可以有多个标签
tag:
  - js
# 此页面会在文章列表置顶
# sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
# 不出现在文章列表
article: true
---

JavaScirpt 中万物皆对象，可以分为三种：实例对象，函数对象，原型对象。...

<!-- more -->

所有的对象都有`__proto__`属性。
只有函数对象拥有`prototype`属性。
只有原型对象拥有`constructor`属性。

通过`function colina(){}`来创建一个函数对象colina。
通过`var a = new colina()`来创建一个实例对象。

函数对象创建时自动产生对应的原型对象。
创建时，函数对象的`prototype`指向其原型对象，
函数对象对应的原型对象的`constructor`指向该函数对象。
a的`__proto__`指向对应的原型对象（即colina的prototype）。

js中本身存在两个函数对象: Function和Object
和其对应的两个原型对象:`Function.prototype`和`Object.prototype`
所有函数对象的`__proto__`指向Function的原型对象（即`Function.prototype`）
所有原型对象的`__proto__`指向Object的原型对象（即`Object.prototype`），
除了`Object.prototype`本身（为null）。

在查找一个对象的属性时，js先查找本身，找不到就顺着`__proto__`往上找，直到null。


