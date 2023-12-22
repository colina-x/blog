---
title: 策略模式
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

策略模式总结

<!-- more -->

## 介绍

- **定义：** 策略设计模式是一种行为设计模式。当在处理一个业务时，有多种处理方式，并且需要再运行时决定使哪一种具体实现时，就会使用策略模式。

- **优点：**

1. 策略模式提供了管理相关的算法族的办法。策略类的等级结构定义了一个算法或行为族。恰当使用继承可以把公共的代码转移到父类里面，从而避免重复的代码。
2. 策略模式提供了可以替换继承关系的办法。继承可以处理多种算法或行为。如果不是用策略模式，那么使用算法或行为的环境类就可能会有一些子类，每一个子类提供一个不同的算法或行为。但是，这样一来算法或行为的使用者就和算法或行为本身混在一起。决定使用哪一种算法或采取哪一种行为的逻辑就和算法或行为的逻辑混合在一起，从而不可能再独立演化。继承使得动态改变算法或行为变得不可能。
3. 使用策略模式可以避免使用多重条件转移语句。多重转移语句不易维护，它把采取哪一种算法或采取哪一种行为的逻辑与算法或行为的逻辑混合在一起，统统列在一个多重转移语句里面，比使用继承的办法还要原始和落后。

- **缺点：**

1. 客户端必须知道所有的策略类，并自行决定使用哪一个策略类。这就意味着客户端必须理解这些算法的区别，以便适时选择恰当的算法类。换言之，策略模式只适用于客户端知道所有的算法或行为的情况。
2. 策略模式造成很多的策略类，每个具体策略类都会产生一个新类。有时候可以通过把依赖于环境的状态保存到客户端里面，而将策略类设计成可共享的，这样策略类实例可以被不同客户端使用。换言之，可以使用享元模式来减少对象的数量。

## 实现

- **应用场景**

1. 多个类只区别在表现行为不同，可以使用Strategy模式，在运行时动态选择具体要执行的行为。
2. 需要在不同情况下使用不同的策略(算法)，或者策略还可能在未来用其它方式来实现。
3. 对客户隐藏具体策略(算法)的实现细节，彼此完全独立。

![策略模式结构图](https://colinaa.blob.core.windows.net/img/Str1.png "策略模式结构图")

- 具体实现

```cs
class Program
{
    static void Main(string[] args)
    {
        Context context;
        context = new Context(new ConcreateStrategyA());
        context.ContextInterface();

        context = new Context(new ConcreateStrategyB());
        context.ContextInterface();

        context = new Context(new ConcreateStrategyC());
        context.ContextInterface();
    }
}
/// <summary>
/// 抽象算法类
/// </summary>
abstract class Strategy
{
    //计算方法
    public abstract void AlgorithmInterface();
}
/// <summary>
/// 具体算法A
/// </summary>
class ConcreateStrategyA : Strategy
{
    public override void AlgorithmInterface()
    {
        Console.WriteLine("算法A实现");
    }
}
/// <summary>
/// 具体算法B
/// </summary>
class ConcreateStrategyB : Strategy
{
    public override void AlgorithmInterface()
    {
        Console.WriteLine("算法B实现");
    }
}
/// <summary>
/// 具体算法C
/// </summary>
class ConcreateStrategyC : Strategy
{
    public override void AlgorithmInterface()
    {
        Console.WriteLine("算法C实现");
    }
}
/// <summary>
/// 上下文
/// </summary>
class Context
{
    Strategy strategy;
    public Context(Strategy strategy)
    {
        this.strategy = strategy;
    }
    public void ContextInterface()
    {
        strategy.AlgorithmInterface();
    }
}
```

- 运行结果：

```cs
算法A实现
算法B实现
算法C实现
```
