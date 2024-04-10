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

## 5. 有默认实参的模板类型形参

简单的例子：

```cpp
template<typename T = int>
void f();

f();            // 默认为 f<int>
f<double>();    // 显式指明为 f<double>
```

```cpp
using namespace std::string_literals;

template<typename T1,typename T2,typename RT = 
    decltype(true ? T1{} : T2{}) >

RT max(const T1& a, const T2& b) { // RT 是 std::string
    return a > b ? a : b;
}

int main(){
    auto ret = ::max("1", "2"s);
    std::cout << ret << '\n';
}
```

这样 `max(const T1& a, const T2& b)` 函数可以接受两个不同类型的参数，返回类型 `typename RT = decltype(true ? T1{} : T2{})` 为T1与T2的“公共类型”，详细可见 `decltype` 的说明。

可以使用C++11的后置返回类型简化：

```cpp
template<typename T,typename T2>
auto max(const T& a, const T2& b) -> decltype(true ? a : b){
    return a > b ? a : b;
}
```

但是**这两种返回类型是不同的**，使用后置返回类型推断的是a的类型即 `const T&` ，而默认模板实参是 `T`

C++20简写函数模板可以写为：
```cpp
decltype(auto) max(const auto& a, const auto& b)  {
    return a > b ? a : b;
}
```

注意 `auto` 与 `decltype(auto)` 的区别。

## 6. 非类型模板形参

非类型模板形参，就是模板不接受类型，而是接受值或对象

```cpp
template<std::size_t N>
void f() { std::cout << N << '\n'; }

f<100>();
```

非类型模板形参当然也可以有默认值：

```cpp
template<std::size_t N = 100>
void f() { std::cout << N << '\n'; }

f();     // 默认      f<100>
f<66>(); // 显式指明  f<66>
```

## 7. 重载函数模板

函数模板与非模板函数可以重载。例如：

```cpp
template<typename T>
void test(T) { std::puts("template"); }

void test(int) { std::puts("int"); }

test(1);        // 匹配到test(int)
test(1.2);      // 匹配到模板
test("1");      // 匹配到模板
```

- ***通常优先选择非模板的函数***。

## 8. 可变参数模板

C++可以用模板做到可变参数

### 形参包

(模板形参包)[https://zh.cppreference.com/w/cpp/language/parameter_pack]是接受零个或更多个模板实参（非类型、类型或模板）的模板形参。函数形参包是接受零个或更多个函数实参的函数形参。

```cpp
template<typename...Args>
void sum(Args...args){}
```

**args 是函数形参包，Args 是类型形参包，它们的名字我们可以自定义。**

**args 里，就存储了我们传入的全部的参数，Args 中存储了我们传入的全部参数的类型。**

### 形参包展开

想使用形参包就需要(形参包展开)[https://zh.cppreference.com/w/cpp/language/parameter_pack#.E5.8C.85.E5.B1.95.E5.BC.80]

```cpp
void f(const char*, int, double) { puts("值"); }
void f(const char**, int*, double*) { puts("&"); }

template<typename...Args>
void sum(Args...args){  // const char * args0, int args1, double args2
    f(args...);   // 相当于 f(args0, args1, args2)
    f(&args...);  // 相当于 f(&args0, &args1, &args2)
}

int main() {
    sum("luse", 1, 1.2);
}
```

sum 的 `Args...args` 被展开为 `const char * args0, int args1, double args2`。

后随省略号且其中至少有一个形参包的名字的**模式**会被展开成零个或更多个**逗号分隔**的模式实例。

`&args...` 中 `&args` 就是模式，在展开的时候，模式，也就是省略号前面的一整个表达式，会被不停的填入对象并添加 `&`，然后逗号分隔。直至形参包的元素被消耗完。

下面的例子是一个打印所有参数的函数：

```cpp
template<typename...Args>
void print(const Args&...args){    // const char (&args0)[5], const int & args1, const double & args2
    int _[]{ (std::cout << args << ' ' ,0)... };
}

int main() {
    print("luse", 1, 1.2);
}
```

`(std::cout << args << ' ' ,0)...` 是一个包展开，它的模式是`(std::cout << args << ' ' ,0)`，实际展开的时候是：

```cpp
(std::cout << arg0 << ' ' ,0), (std::cout << arg1 << ' ' ,0),(std::cout << arg2 << ' ' ,0)
```

但是为什么要括号里加个逗号零呢？这是因为逗号表达式是从左往右执行的，返回最右边的值作为整个逗号表达式的值，也就是说：每一个 `(std::cout << arg0 << ' ' ,0)` 都会返回 0，这主要是为了符合语法，用来初始化数组。我们创建了一个数组 `int _[]` ，最终这些 `0` 会用来初始化这个数组，当然，这个数组本身没有用，**只是为了创造合适的(包展开场所)[https://zh.cppreference.com/w/cpp/language/parameter_pack#.E5.B1.95.E5.BC.80.E5.9C.BA.E6.89.80]**。

- ***只有在合适的形参包展开场所才能进行形参包展开***。

```cpp
template<typename ...Args>
void print(const Args &...args) {
   (std::cout << args << " ")...; // 不是合适的形参包展开场所 Error！
}
```

还有一个数组的示例：

```cpp
template<typename...Args>
void print(const Args&...args) {
    int _[]{ (std::cout << args << ' ' ,0)... };
}

template<typename T,std::size_t N, typename...Args>
void f(const T(&array)[N], Args...index) {
    print(array[index]...);
}

int main() {
    int array[10]{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    f(array, 1, 3, 5);
}
```

`const T(&array)[N]` 注意，这是一个数组引用，我们也使用到了非类型模板形参 `N`；加括号，`(&array)` 只是为了区分优先级。那么这里的 `T` 是 `int`，`N` 是 10，组成了一个数组类型。

`print(array[index]...)`; 其中 `array[index]...` 是包展开，`array[index]` 是模式，实际展开的时候就是：

`array[arg0], array[arg1], array[arg2]`

### 总结

现在有一个小需求：需要一个函数 `sum`，支持 `sum(1,2,3.5,x,n...)` 即函数 `sum` 支持任意类型，任意个数的参数进行调用，你应该如何实现？

```cpp
#include <iostream>
#include <type_traits>

template<typename...Args,typename RT = std::common_type_t<Args...>>
RT sum(const Args&...args) {
    RT _[]{ static_cast<RT>(args)... };
    RT n{};
    for (int i = 0; i < sizeof...(args); ++i) {
        n += _[i];
    }
    return n;
}

int main() {
    double ret = sum(1, 2, 3, 4, 5, 6.7);
    std::cout << ret << '\n';       // 21.7
}
```

`std::common_type_t` 的作用很简单，就是确定我们传入的共用类型，说白了就是这些东西都能隐式转换到哪个，那就会返回那个类型。

`RT _[]{ static_cast<RT>(args)... };` 创建一个数组，形参包在它的初始化器中展开，初始化这个数组，数组存储了我们传入的全部的参数。

- 因为(窄化转换)[https://zh.cppreference.com/w/cpp/language/list_initialization#.E7.AA.84.E5.8C.96.E8.BD.AC.E6.8D.A2]禁止了列表初始化中 `int` 到 `double` 的隐式转换，所以我们需要显式的转换为“公共类型” `RT`。

`sizeof...` 单纯的获取形参包的元素个数。

调用标准库简化：
```cpp
template<typename...Args,typename RT = std::common_type_t<Args...>>
RT sum(const Args&...args) {
    RT _[]{ args... };
    return std::accumulate(std::begin(_), std::end(_), RT{});
}
```

`RT{}` 构造一个临时无名对象，表示初始值，`std::begin` 和 `std::end` 可以获取数组的首尾地址。

非类型模板形参也可以使用形参包：

```cpp
template<std::size_t... N>
void f(){
    std::size_t _[]{ N... }; // 展开相当于 1UL, 2UL, 3UL, 4UL, 5UL
    std::for_each(std::begin(_), std::end(_), 
        [](std::size_t n){
            std::cout << n << ' ';
        }
    );
}
f<1, 2, 3, 4, 5>();
```

## 9. 模板分文件

参考自 [现代C++模板教程](https://mq-b.github.io/Modern-Cpp-templates-tutorial/md/%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86-%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/01%E5%87%BD%E6%95%B0%E6%A8%A1%E6%9D%BF)
