---
title: Javacript三个点
date: 2022-11-27
author: Colina
category:
  - js
tag: 
  - js
---

`...`叫扩展运算符，是ES6新增内容，它可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；还可以在构造字面量对象时将对象表达式按照key-value的方式展开。

<!-- more -->

## 复制数组

::: warning
这是浅拷贝
:::

```js
// 复制
var arr1 = [1, 2, 3]
var arr2 = [...arr1]
console.log(arr2)
// [1, 2, 3]

// 对象的复制
var obj1 = {name:'Tom', age:18}
var obj2 ={...obj1}
console.log(obj2)
//  {name:'Tom', age:18}
```

## 合并

```js
// 数组的合并
var arr1 = [1, 2, 3]
var arr2 =[4, 5, 6]
var mergeArr = [...arr1,...arr2]
console.log(mergeArr)
// [1, 2, 3, 4, 5, 6]

// 对象的合并
var obj1 = {name: 'Colina'}
var obj2 = {height:180}
var mergeObj = {...obj1, ...obj2}
console.log(mergeObj)
// {name: "Colina", height: 180}
```

## 添加

```js
// 向数组中添加元素
var arr1 = [1, 2, 3]
var arr2 = [...arr1, 4]
console.log(arr2)
// [1, 2, 3, 4]

// 向对象中添加属性
var obj1 = {name: 'Colina'}
var obj2 ={...obj1, age:18}
console.log(obj2)
//  {name:'Colina', age:18}
```

## 字符串转数组

```js
var arr1 = [...'hello']
console.log(arr1)
// ["h", "e", "l", "l", "o"]
```

## 函数传参

```js
// 函数传参
function f(v,w,x,y,z) { }
var args = [2,3]
f(1,...args,4,...[5])

// 不定长参数
function f(a, b, ...rest) { }
f(1, 2, 'a', new Date())
```

- 常用在`Math`中

```js
var arr1 = [-1, 0, 1, 2]
var max = Math.max(...arr1)
console.log(max)
// 2
```

如果直接传数组就会返回`NaN`，因为他不知道数组的最大值是什么

## 解构对象

```js
var user = {
  username: 'Colina',
  password: 'password',
  age:18
}
var {username, ...rest} = user
console.log(username)
console.log(rest)
// Colina
// {password: 'password', age: 18}
```
