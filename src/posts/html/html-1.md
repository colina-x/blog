---
icon: edit
title: HTML总结
date: 2022-11-13
author: Colina
category:
  - 前端
tag: 
  - HTML
  - 前端
star: true
sticky: true
---

HTML学习总结

<!-- more -->

## 标题

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
<!-- 这是注释 hr是水平线 -->
<hr>
水平线
<hr>

```

- 效果
<h1> 一级标题 </h1>
<h2> 二级标题 </h2>
<h3> 三级标题 </h3>
<h4> 四级标题 </h4>
<h5> 五级标题 </h5>
<h6> 六级标题 </h6>
<hr>
水平线
<hr>

## 段落

```html
<p>一个段落</p>
<p>另一个段落</p>
<p>可以用<br>br<br>换行</p>
```

- 效果
<p>一个段落</p>
<p>另一个段落</p>
<p>可以用<br>br<br>换行</p>

## 文本格式化

```html
<b>加粗</b><br>
<i>斜体</i><br>
<!-- 这两个效果一样，下面的表示更重要 -->
<strong>加粗</strong><br>
<em>斜体</em><br>

<big>放大</big><br>
<small>缩小</small><br>
这是<sub>下标</sub><br>
这是<sup>上标</sup><br>
```

- 效果
<b>加粗</b><br>
<i>斜体</i><br>
<strong>加粗</strong><br>
<em>斜体</em><br>

<big>放大</big><br>
<small>缩小</small><br>
这是<sub>下标</sub><br>
这是<sup>上标</sup><br>

## 链接

```html
<a href="https://colinaa.top/">我的主页</a>
```

- 效果
<div>
<a href="https://colinaa.top/">我的主页</a>
</div>

## 图像

```html
<img src="1.jpg" alt="图片"/>
```

alt属性用来在图片加载失败时显示文字描述

- 效果
<div>
<img src="https://colinaa.blob.core.windows.net/img/wWHSnJXJ.webp" />
<!-- <img src="2.jpg" alt="图片"/> -->
</div>

## 表格

```html
<table>
  <caption>表格</caption>
  <tr>
    <th>姓名</th>
    <th>年龄</th>
    <th>分数</th>
  </tr>
  <tr>
    <td>小红</td>
    <td>18</td>
    <td rowspan="2">100</td>
  </tr>
  <tr>
    <td>小明</td>
    <td>20</td>
  </tr>
  <tr>
    <td>小李</td>
    <td colspan="2">19</td>
  </tr>
</table>
```

- 效果
<table>
  <caption>表格</caption>
  <tr>
    <th>姓名</th>
    <th>年龄</th>
    <th>分数</th>
  </tr>
  <tr>
    <td>小红</td>
    <td>18</td>
    <td rowspan="2">100</td>
  </tr>
  <tr>
    <td>小明</td>
    <td>20</td>
  </tr>
  <tr>
    <td>小李</td>
    <td colspan="2">19</td>
  </tr>
</table>

## 列表

### 无序列表

```html
<ul>
  <li>苹果</li>
  <li>橘子</li>
</ul>
```

- 效果
<ul>
  <li>苹果</li>
  <li>橘子</li>
</ul>

### 有序列表

```html
<ol>
  <li>苹果</li>
  <li>橘子</li>
</ol>
```

- 效果

<ol>
  <li>水果
    <ol>
      <li>苹果</li>
      <li>橘子</li>
    </ol>
  </li>
  <li>蔬菜
    <ol>
      <li>白菜</li>
      <li>土豆</li>
    </ol>
  </li>
</ol>

## 区块

```html
<div>div</div>
<span>span</span>
```

### 块级元素
占一行
如h1 p ul table
### 内联元素
不占一行，继续显示
如b td a img
- 效果

1<div>div</div>1<br>
2<span>span</span>2

## 表单
```html
<form action="">
<lable>用户名<input type="text" /> </lable> <br>
<lable>密码<input type="password" /> </lable> <br>
<lable><input type="radio" name="radio" />单选A</lable> <lable><input type="radio" name="radio" />单选B</lable> <br>
<lable><input type="checkbox" name="checkbox" value="A" />多选A</lable> <lable><input type="checkbox" name="checkbox" value="B" />多选B</lable> <br>
<select name="select">
<option value="A">A</option>
<option value="B">B</option>
<option value="C">C</option>
<option value="D">D</option>
</select><br>
<textarea></textarea><br>
<input type="submit" /><input type="button"  value="按钮" /><br>
</form>
```

<form action="#">
<lable>用户名<input type="text" /> </lable> <br>
<lable>密码<input type="password" /> </lable> <br>
<lable><input type="radio" name="radio" checked />单选A</lable> <lable><input type="radio" name="radio" />单选B</lable> <br>
<lable><input type="checkbox" name="checkbox" value="A" />多选A</lable> <lable><input type="checkbox" name="checkbox" value="B" />多选B</lable> <br>
<select name="select">
<option value="A">A</option>
<option value="B">B</option>
<option value="C">C</option>
<option value="D">D</option>
</select><br>
<textarea></textarea><br>
<input type="submit" /><input type="button"  value="按钮" /><br>
</form>

## 常用字符实体
|代码|内容|
|---|---|
|`&nbsp;`|空格|
|`&lt;`|&lt;|
|`&gt;`|&gt;|
|`&amp;`|&amp;|
|`&quot;`|&quot;|

## 11-22 更新HTML5
### 移除元素
- `<acronym>`
- `<applet>`
- `<basefont>`
- `<big>`
- `<center>`
- `<dir>`
- `<font>`
- `<frame>`
- `<frameset>`
- `<noframes>`
- `<strike>`
### 新元素
|标签|描述|
|---|---|
|`<canvas>`|标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API|
|`<audio>`|定义音频内容
|`<video>`|定义视频（video 或者 movie）
|`<source>`|定义多媒体资源 `<video>` 和 `<audio>`
|`<embed>`|定义嵌入的内容，比如插件。
|`<track>`|为诸如 `<video>` 和 `<audio>` 元素之类的媒介规定外部文本轨道。
|`<datalist>`|定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。
|`<keygen>`|规定用于表单的密钥对生成器字段。
|`<output>`|定义不同类型的输出，比如脚本的输出。
|`<article>`|定义页面独立的内容区域。
|`<aside>`|定义页面的侧边栏内容。
|`<bdi>`|允许您设置一段文本，使其脱离其父元素的文本方向设置。
|`<command>`|定义命令按钮，比如单选按钮、复选框或按钮
|`<details>`|用于描述文档或文档某个部分的细节
|`<dialog>`|定义对话框，比如提示框
|`<summary>`|标签包含 details 元素的标题
|`<figure>`|规定独立的流内容（图像、图表、照片、代码等等）。
|`<figcaption>`|定义 `<figure>` 元素的标题
|`<footer>`|定义 section 或 document 的页脚。
|`<header>`|定义了文档的头部区域
|`<mark>`|定义带有记号的文本。
|`<meter>`|定义度量衡。仅用于已知最大和最小值的度量。
|`<nav>`|定义导航链接的部分。
|`<progress>`|定义任何类型的任务的进度。
|`<ruby>`|定义 ruby 注释（中文注音或字符）。
|`<rt>`|定义字符（中文注音或字符）的解释或发音。
|`<rp>`|在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
|`<section>`|定义文档中的节（section、区段）。
|`<time>`|定义日期或时间。|
|`<wbr>`|规定在文本中的何处适合添加换行符。|

更多内容请见[菜鸟教程](https://www.runoob.com/html/html5-new-element.html)
