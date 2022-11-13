<template><div><h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1>
<nav class="table-of-contents"><ul><li><router-link to="#标题">标题</router-link></li><li><router-link to="#段落">段落</router-link></li><li><router-link to="#文本格式化">文本格式化</router-link></li><li><router-link to="#链接">链接</router-link></li><li><router-link to="#图像">图像</router-link></li><li><router-link to="#表格">表格</router-link></li><li><router-link to="#列表">列表</router-link><ul><li><router-link to="#无序列表">无序列表</router-link></li><li><router-link to="#有序列表">有序列表</router-link></li></ul></li><li><router-link to="#区块">区块</router-link><ul><li><router-link to="#块级元素">块级元素</router-link></li><li><router-link to="#内联元素">内联元素</router-link></li></ul></li><li><router-link to="#表单">表单</router-link></li><li><router-link to="#字符实体">字符实体</router-link></li></ul></nav>
<h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>一级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>二级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>三级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>四级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">></span></span>五级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>六级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 这是注释 hr是水平线 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
水平线
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>效果</li>
</ul>
<h1> 一级标题 </h1>
<h2> 二级标题 </h2>
<h3> 三级标题 </h3>
<h4> 四级标题 </h4>
<h5> 五级标题 </h5>
<h6> 六级标题 </h6>
<hr>
水平线
<hr>
<h2 id="段落" tabindex="-1"><a class="header-anchor" href="#段落" aria-hidden="true">#</a> 段落</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>一个段落<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>另一个段落<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>可以用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>br<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>换行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>效果</li>
</ul>
<p>一个段落</p>
<p>另一个段落</p>
<p>可以用<br>br<br>换行</p>
<h2 id="文本格式化" tabindex="-1"><a class="header-anchor" href="#文本格式化" aria-hidden="true">#</a> 文本格式化</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>加粗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">></span></span>斜体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 这两个效果一样，下面的表示更重要 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>加粗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>斜体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>big</span><span class="token punctuation">></span></span>放大<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>big</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>缩小<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
这是<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub</span><span class="token punctuation">></span></span>下标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
这是<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sup</span><span class="token punctuation">></span></span>上标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sup</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>效果
<b>加粗</b><br>
<i>斜体</i><br>
<strong>加粗</strong><br>
<em>斜体</em><br></li>
</ul>
<p><big>放大</big><br>
<small>缩小</small><br>
这是<sub>下标</sub><br>
这是<sup>上标</sup><br></p>
<h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://colinaa.top/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我的主页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>效果</li>
</ul>
<div>
<a href="https://colinaa.top/">我的主页</a>
</div>
<h2 id="图像" tabindex="-1"><a class="header-anchor" href="#图像" aria-hidden="true">#</a> 图像</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>alt属性用来在图片加载失败时显示文字描述</p>
<ul>
<li>效果</li>
</ul>
<div>
<img src="1.jpg" />
<img src="2.jpg" alt="图片"/>
</div>
<h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>caption</span><span class="token punctuation">></span></span>表格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>caption</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>分数<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>小红<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">rowspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>小明<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>小李<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">colspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>19<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>效果
<span><table border="1">
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
</li>
</ul>
</table>
</span>
<h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2>
<h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>苹果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>橘子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>效果</li>
</ul>
<ul>
<li>苹果</li>
<li>橘子</li>
</ul>
<h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>苹果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>橘子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>效果</li>
</ul>
<ol>
<li>水果<ol>
<li>苹果</li>
<li>橘子</li>
</ol></li>
<li>蔬菜<ol>
<li>白菜</li>
<li>土豆</li>
</ol></li>
</ol>
<h2 id="区块" tabindex="-1"><a class="header-anchor" href="#区块" aria-hidden="true">#</a> 区块</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>div<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块级元素" tabindex="-1"><a class="header-anchor" href="#块级元素" aria-hidden="true">#</a> 块级元素</h3>
<p>占一行
如h1 p ul table</p>
<h3 id="内联元素" tabindex="-1"><a class="header-anchor" href="#内联元素" aria-hidden="true">#</a> 内联元素</h3>
<p>不占一行，继续显示
如b td a img</p>
<ul>
<li>效果</li>
</ul>
<p>1<div>div</div>1<br>
2<span>span</span>2</p>
<h2 id="表单" tabindex="-1"><a class="header-anchor" href="#表单" aria-hidden="true">#</a> 表单</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lable</span><span class="token punctuation">></span></span>用户名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lable</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lable</span><span class="token punctuation">></span></span>密码<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lable</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>单选<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lable</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>多选<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lable</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><form action="">
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
<h2 id="字符实体" tabindex="-1"><a class="header-anchor" href="#字符实体" aria-hidden="true">#</a> 字符实体</h2>
<p><code v-pre>&amp;nbsp;</code>空格
<code v-pre>&amp;lt;</code>&lt;
<code v-pre>&amp;gt;</code>&gt;
<code v-pre>&amp;amp;</code>&amp;
<code v-pre>&amp;quot;</code>&quot;</p>
</div></template>


