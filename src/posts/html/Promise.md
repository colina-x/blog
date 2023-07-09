---
icon: edit
title: Promise
date: 2023-07-09
author: Colina
category:
  - 前端
tag: 
  - js
  - ES6
star: true
sticky: true
---

Promise是JS异步编程中的重要概念，异步抽象处理对象，是目前比较流行Javascript异步编程解决方案之一

<!-- more -->

## 异步编程

* fs 文件操作

  ``` js
  request('fs').readFile('./index.html', (err,data) => {})
  ```

* 数据库操作
* AJAX

  ``` js
  $.get('/server',(data)=>{})
  ```

* 定时器

  ``` js
  setTimeout(()=>{}, 2000)
  ```

## 为什么要用Promise

### 1.指定回调函数方式更灵活

* 旧：必须在启动异步任务前确定
* promise：启动异步任务 => 返回promise对象 => 给promise对象绑定回调函数(甚至可以在异步任务结束后指定/多个)

### 2.支持`链式调用`解决回调地狱问题

#### 回调地狱

```js
asyncFunc1(opt, (...args1) => {
  asyncFunc2(opt, (...args2) => {
    asyncFunc3(opt, (...args3) => {
      asyncFunc4(opt, (...args4) => {
        // some opeeration
      })
    })
  })
})
```

缺点：

* 不便于阅读
* 不便于异常处理

## promise 状态

实例对象的一个属性 `PromiseState`

* `pending` 未决定的
* `resolved` / `fullfilled` 成功
* `rejected` 失败

只能由`pending`转为`resolved`或`rejected`，且只能改变一次

1. resolve `pending => resolved`
2. reject `pending => rejected`
3. 抛出异常 `pending => rejected`

## promise 对象的值

实例对象的一个属性 `PromiseResult`

保存着对象 `成功` 或 `失败` 的结果

* resolve
* reject

## promise 工作流程

![promise 工作流程](https://colinaa.blob.core.windows.net/img/promise工作流程.png)

## 常用API

### 1. 构造函数 `Promise(executor){}`

1. `executor`: 执行器函数  (resolve, reject) => {}
2. `resolve`: 成功时调用函数  value => {}
3. `reject`: 失败时调用函数  reason => {}

* 说明：`executor` 会在 `Promise` 内部立即同步调用，异步操作在执行器中执行

### 2. `Promise.prototype.then` 方法: (onResolved, onRejected) => {}

1. `onResolved`: 成功的回调函数 (value) => {}
2. `onRejected`: 失败的回调函数 (reason) => {}

* 说明：返回一个新的 Promise 对象

### 3. `Promise.prototype.catch` 方法: (onRejected) => {}

1. `onRejected`: 失败的回调函数 (reason) => {}

### 4. `Promise.resolve` 方法: (value) => {}

1. `value`: 成功的数据或 promise 对象

* 说明：返回一个成功/失败的 promise 对象，只有当 `value` 为失败的 promise 对象才是失败

### 5. `Promise.reject` 方法: (reason) => {}

1. `reason`: 失败的原因

* 说明：返回一个失败的 promise 对象

### 6. `Promise.all` 方法: (promises) => {}

1. `promises`: 包含n个 promise 的数组

* 说明：返回一个新的 promise 对象，只有所有 promise 都成功才成功，数据为所有 promise 数据组成的数组

### 7. `Promise.race` 方法: (promises) => {}

1. `promises`: 包含n个 promise 的数组

* 说明：返回一个新的 promise 对象，第一个完成的 promise 的结果状态就是最终的结果状态

