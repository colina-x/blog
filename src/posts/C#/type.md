---
# 这是文章的标题
title: C#类型（1）
# 这是页面的图标
icon: page
# 设置写作时间
date: 2023-04-19
# 一个页面可以有多个分类
category:
  - c#
  - 面试
# 一个页面可以有多个标签
tag:
  - 基础语法
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
---


<!-- more -->

## 值类型和引用类型

在C#中，变量分为两种类型：值类型和引用类型。值类型包括简单数据类型，枚举类型，结构体类型；引用类型包括类、接口、委托和数组。

### 区别

值类型和引用类型的主要区别在于它们在内存中的存储方式。值类型的变量直接包含它们的数据，而引用类型的变量则包含对内存位置的引用，该内存位置存储实际数据。

这意味着将值类型变量分配给另一个变量时，它会创建该值的副本。但是，将引用类型变量分配给另一个变量时，它只会复制内存位置的引用，而不是实际数据。因此，两个变量都指向相同的数据。

### 存放位置

通常情况下，局部变量存放在栈上，类中的成员存放在堆上，static修饰的存放在数据段中。也就是说大多数变量是放在栈上的，包括引用类型的变量，但实际的数据还是存放在堆上。也能够说明引用类型浅拷贝的问题，复制的是一个值类型的引用地址，而不是存放的数据。

结构体中包括引用类型时，引用变量存在栈上，数据放在堆上，复制时是浅拷贝。

类中成员一般都放在堆上。

`string`是引用类型，但是他不能更改，每次复制都要重新开辟一块空间。需要频繁更改可以使用`StringBuilder`。

### 装箱拆箱

**装箱**是将值类型转换为引用类型的过程。当您将值类型赋值给`object`类型或接口类型变量时，会发生装箱。在装箱过程中，值类型的值被复制到托管堆上，并创建一个新的对象，该对象包含该值。

**拆箱**是将引用类型转换为值类型的过程。当您将`object`类型或接口类型变量赋值给值类型变量时，会发生拆箱。在拆箱过程中，引用类型变量指向的对象中的值被复制到栈上。

例如：

```cs
int a = 1; // 值类型
object b = a; // 装箱
int c = (int)b; // 拆箱
```

装箱和拆箱操作可能会对性能产生负面影响，因为它们涉及到在栈和托管堆之间复制数据。这会增加内存分配和垃圾回收的开销，从而降低应用程序的性能。

例如，在装箱过程中，值类型的值被复制到托管堆上，并创建一个新的对象，该对象包含该值。这会增加内存分配的开销，并且当该对象不再使用时，还需要通过垃圾回收来释放内存。

同样，在拆箱过程中，引用类型变量指向的对象中的值被复制到栈上。这也会增加内存分配的开销。

## ArrayList和List

`ArrayList`类可以存储任何类型的对象，将所有数据以`object`类型存储。但是，由于它不是泛型类型，因此在使用时需要进行装箱和拆箱操作，这会影响性能。

`List`是一个泛型类型，可以存储特定类型的对象。由于它是泛型类型，因此在使用时不需要进行装箱和拆箱操作，性能更好。