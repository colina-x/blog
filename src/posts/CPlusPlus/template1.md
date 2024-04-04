---
title: 现代C++模板
date: 2024-3-26
author: Colina
category:
  - c++
tag: 
  - 现代c++
  - c++
  - 模板
star: true
sticky: true
---

在现代 C++ 中，模板是一种强大的工具，它们允许编写通用代码，使得程序更加灵活和可重用。本篇博客将介绍 C++ 中的函数模板，模板参数推导，以及万能引用与引用折叠，这些都是模板编程中不可或缺的重要概念。

<!-- more -->

## 1. 函数模板

函数模板是一种通用函数定义的方式，允许以一种泛型的方式定义函数，从而使得同一份代码能够适用于不同类型的参数。

```cpp
template <typename T>
T max(T a,T b){
    return a > b ? a : b;
}
```

上述代码定义了一个简单的函数模板 add，它接受两个参数，并返回它们的和。 `typename T` 表示这是一个模板参数，可以是任意类型，还可以使用 `class T` 来定义。

## 2. 模板的使用

在使用模板时编译器会根据使用情况在编译期实例化使用的函数，所以是静态的不产生运行时开销。

C++ 中的模板参数推导允许编译器在调用函数模板时自动推断模板参数的类型，也可以显式的指定类型。

```cpp
template <typename T>
T max(T a,T b){
    return a > b ? a : b;
}

int main(){
    int a{ 1 };
    int b{ 2 };
    max(a, b);          // 函数模板 max 被推导为 max<int>
    max<double>(a, b);  // 传递模板类型实参，函数模板为 max<double>
}
```

## 3. 模板参数推导

模板参数可以是参数的一部分，例如使用 `const&`

```cpp
template<typename T>
T max(const T& a, const T& b) {
    return a + b;
}
```

这时使用 `max(1, 2)` 或 `max<int>(x,x)` ， `T` 是 `int` ，但是函数形参类型会推导为 `int&` 。

在指代不清时时无法自动推导的

```cpp
using namespace std::string_literals;   // string字面量
int main(){
    max(1, 1.2);            // Error 无法确定你的 T 到底是要 int 还是 double
    max("luse"s, "乐");     // Error 无法确定你的 T 到底是要 std::string 还是const char[N]
}
```

可以通过显式指定函数模板的（T）类型解决这种问题：

```cpp
max<double>(1, 1.2);
max<std::string>("luse"s, "乐");
```

或者说显式类型转换：

```cpp
max(static_cast<double>(1), 1.2);
```

string可以显式构造一个无名变量

```cpp
max("luse"s, std::string("乐"));    //Error
```

由于[实参依赖查找(ADL)](https://zh.cppreference.com/w/cpp/language/adl)，使用了 `std::string` 会在 `std::` 命名空间下查找函数，与 `std::max` 重名了，解决办法是指定全局命名空间 `::` ：

```cpp
::max("luse"s, std::string("乐"));
```

## 4. 万能引用与引用折叠

万能引用（又叫转发引用）是 C++11 中引入的特性，通过使用 `&&` 符号，可以创建可以接受任意类型的引用的模板参数，即**接受左值表达式那形参类型就推导为左值引用，接受右值表达式，那就推导为右值引用**

```cpp
template<typename T>
void f(T&&t){}
    int a = 10;
    f(a);       // a 是左值表达式，f 是 f<int&> 但是它的形参类型是 int&
    f(10);      // 10 是右值表达式，f 是 f<int> 但它的形参类型是 int&&
```

[引用折叠](https://zh.cppreference.com/w/cpp/language/reference)是 C++ 中对模板函数参数引用进行简化的规则，用于处理模板参数中的引用嵌套和组合情况。

即：**右值引用的右值引用折叠成右值引用，所有其他组合均折叠成左值引用**

```cpp
typedef int&  lref;
typedef int&& rref;
int n;

lref&  r1 = n; // r1 的类型是 int&
lref&& r2 = n; // r2 的类型是 int&
rref&  r3 = n; // r3 的类型是 int&
rref&& r4 = 1; // r4 的类型是 int&&

template <class Ty>
constexpr Ty&& forward(Ty& Arg) noexcept {
    return static_cast<Ty&&>(Arg);
}

int a = 10;            // 不重要
::forward<int>(a);     // 返回 int&& 因为 Ty 是 int，Ty&& 就是 int&&
::forward<int&>(a);    // 返回 int& 因为 Ty 是 int&，Ty&& 就是 int&
::forward<int&&>(a);   // 返回 int&& 因为 Ty 是 int&&，Ty&& 就是 int&&
```

参考自 [现代C++模板教程](https://mq-b.github.io/Modern-Cpp-templates-tutorial/md/%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86-%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/01%E5%87%BD%E6%95%B0%E6%A8%A1%E6%9D%BF)
