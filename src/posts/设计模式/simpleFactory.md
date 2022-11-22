---
title: 简单工厂模式
date: 2022-11-22
author: Colina
category:
  - 状态模式
tag: 
  - 状态模式
  - 游戏开发
star: true
sticky: true
---

UML基本图示及简单工厂模式总结

<!-- more -->

## UML类图

![UML类图图示](https://colinaa.blob.core.windows.net/img/SF1.JPG)
*--来自大话设计模式*

`动物`矩形框代表一个类（class）。类图分三层，第一层是类的名称，如果是抽象类就用斜体；第二层是类的特性，通常是字段和属性。第三层是类的操作，通常是方法或行为。前面的符号`+`表示public，`-`表示private，`#`表示protected。

`飞翔`表示接口图，与类图的区别是顶端有`<<interface>>`，第一行是接口名称，第二行是接口方法。接口还可以像`唐老鸭`类上的圆圈表示。

继承关系用空心三角形+实线表示。

实现接口用空心三角形+虚线表示。

关联关系是一个类知道另一个类，体现为一个类里引用到了另一个类，用实线箭头表示。

聚合关系是一种弱拥有关系，体现为A可以包含B，但B不是A的一部分，用空心菱形+实线箭头表示。

合成关系是一种强拥有关系，体现了严格的部分与整体的关系，他们的生命周期一样，用实心菱形+实线箭头表示，两端还有两个数字，称为基数，表明一个类可以有几个实例，如一只鸟有两个翅膀。

依赖关系用虚线箭头表示。

## 简单工厂模式

简单工厂模式属于创建型模式，它提供了一种创建对象的最佳方式。
在工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。

### 介绍

- **意图：** 定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。
- **优点：**
 1. 一个调用者想创建一个对象，只要知道其名称就可以了。
 2. 扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。
 3. 屏蔽产品的具体实现，调用者只关心产品的接口。
- **缺点：**

  每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。

### 实现                           

例如需要写一个计算器程序，给定两个数进行加减乘除运算。使用简单工厂模式，可以实现代码复用，易移植，还容易维护、修改、增加，只需要更改或添加指定类，并修改工厂类即可。

![简单工厂模式示例](https://colinaa.blob.core.windows.net/img/SF2.png)

```cs
class Program
{
    static void Main(string[] args)
    {
        Operation oper;
        oper = OperationFactory.createOperate("+");
        oper.NumberA = 1;
        oper.NumberB = 2;
        double result = oper.GetResult();
        Console.WriteLine(result);
    }
}
/// <summary>
/// 运算符类
/// </summary>
public class Operation
{
    private double _numberA = 0;
    private double _numberB = 0;
    public double NumberA
    {
        get { return _numberA; }
        set { _numberA = value; }
    }
    public double NumberB
    {
        get { return _numberB; }
        set { _numberB = value; }
    }
    public virtual double GetResult()
    {
        double result = 0;
        return result;
    }
}
/// <summary>
/// 加
/// </summary>
class OperationAdd : Operation
{
    public override double GetResult()
    {
        double result = 0;
        result = NumberA + NumberB;
        return result;
    }
}
/// <summary>
/// 减
/// </summary>
class OperationSub : Operation
{
    public override double GetResult()
    {
        double result = 0;
        result = NumberA - NumberB;
        return result;
    }
}
/// <summary>
/// 乘
/// </summary>
class OperationMul : Operation
{
    public override double GetResult()
    {
        double result = 0;
        result = NumberA * NumberB;
        return result;
    }
}
/// <summary>
/// 除
/// </summary>
class OperationDiv : Operation
{
    public override double GetResult()
    {
        double result = 0;
        if (NumberB == 0)
            throw new Exception("除数不能为0");
        result = NumberA / NumberB;
        return result;
    }
}
/// <summary>
/// 运算符工厂类
/// </summary>
public class OperationFactory
{
    public static Operation createOperate(string operate)
    {
        Operation oper = null;
        switch (operate)
        {
            case "+":
                oper = new OperationAdd();
                break;
            case "-":
                oper = new OperationSub();
                break;
            case "*":
                oper = new OperationMul();
                break;
            case "/":
                oper = new OperationDiv();
                break;
        }
        return oper;
    }
}
```

运行结果：
```cs
3
```