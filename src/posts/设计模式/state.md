---
title: 状态模式（state模式）
date: 2022-11-14
author: Colina
category:
  - 状态模式
tag: 
  - 状态模式
  - 游戏开发
star: true
sticky: true
---

设计模式-状态模式(state)学习总结

<!-- more -->

在游戏开发过程中，有很多对象会根据不同的情况做出不同的行为，这种对象称为有状态的对象，影响对象行为变化的属性称为状态。当有状态的对象被外部事件影响时，其内部的状态就会改变，从而使行为也发生改变。

例如游戏中的怪物可能有巡逻、追击、攻击三个状态，默认处于巡逻状态。当玩家进入到其视野范围时，怪物的状态就改变为追击状态，去追击玩家；当玩家进入到其攻击范围时，就改变为攻击状态，攻击玩家；当玩家离开攻击范围就改变为追击状态，离开视野范围就改为巡逻状态。

传统的解决方法是：考虑到所有的情况，使用if-else或switch-case语句做判断，进行不同情况的处理。但是这种做法在状态复杂时，条件判断过于臃肿，可读性差，拓展困难，维护难度大。添加新状态时要修改判断条件语句，违背了开闭原则，不利于程序拓展。

上述问题用状态模式就可以有效解决。状态模式的思想是：当对象的状态转换条件复杂时，就把相关的判断逻辑提取出来，用不同的类来表示，系统处于哪种状态就用对应的状态类来处理，这样就能把复杂的逻辑判断和状态处理分离，提高代码的可读性和维护性，并且有很好的拓展性。

## 状态模式的定义与特点

<b>状态（state）模式的定义： </b>对有状态的对象，把复杂的“判断逻辑”提取到不同的状态对象中，允许状态对象在其内部状态发生改变时改变其行为。

**优点：**
 1. 封装了转换规则。 
 2. 枚举可能的状态，在枚举状态之前需要确定状态种类。 
 3. 将所有与某个状态有关的行为放到一个类中，并且可以方便地增加新的状态，只需要改变对象状态即可改变对象的行为。
 4. 允许状态转换逻辑与状态对象合成一体，而不是某一个巨大的条件语句块。
 5. 可以让多个环境对象共享一个状态对象，从而减少系统中对象的个数。

**缺点：**
 1. 状态模式的使用必然会增加系统类和对象的个数。
 2. 状态模式的结构与实现都较为复杂，如果使用不当将导致程序结构和代码的混乱。 
 3. 状态模式对”开闭原则“的支持并不太好，对于可以切换状态的状态模式，增加新的状态类需要修改那些负责状态转换的源代码，否则无法切换到新增状态，而且修改某个状态类的行为也需修改对应类的源代码。

**使用场景：** 
 1. 行为随状态改变而改变的场景。
 2. 条件、分支语句的代替者。

## 状态模式的实现


状态模式把受环境改变的对象行为包装在不同的状态对象里，其意图是让一个对象在其内部状态改变的时候，其行为也随之改变。现在我们来分析其基本结构和实现方法。

- 状态模式的结构

状态模式包含以下主要角色。

1.  环境类（Context）角色：也称为上下文，它定义了客户端需要的接口，内部维护一个当前状态，并负责具体状态的切换。
2.  抽象状态（State）角色：定义一个接口，用以封装环境对象中的特定状态所对应的行为，可以有一个或多个行为。
3.  具体状态（Concrete State）角色：实现抽象状态所对应的行为，并且在需要的情况下进行状态切换。

![Colina](https://colinaa.blob.core.windows.net/img/state-1.GIF "状态模式结构图")

- 状态模式的实现

```cs
class Program
{
    static void Main(string[] args)
    {
        Context context = new Context();
        context.Handle();
        context.Handle();
        context.Handle();
        context.Handle();
        Console.ReadKey();
    }
}
/// <summary>
/// 环境类
/// </summary>
class Context
{
    private State state;

    //定义初始状态
    public Context()
    {
        this.state = new ConcreteStateA();
    }
    // 设置状态
    public void setState(State state)
    {
        this.state = state;
    }
    // 获取当前状态
    public State getState()
    {
        return state;
    }
    // 对请求进行处理
    public void Handle()
    {
        state.Handle(this);
    }
}
/// <summary>
/// 抽象状态类
/// </summary>
abstract class State
{
    public abstract void Handle(Context context);
}
/// <summary>
/// 具体状态A
/// </summary>
class ConcreteStateA : State
{
    public override void Handle(Context context)
    {
        Console.WriteLine("当前是状态A");
        context.setState(new ConcreteStateB());
    }
}
/// <summary>
/// 具体状态B
/// </summary>
class ConcreteStateB : State
{
    public override void Handle(Context context)
    {
        Console.WriteLine("当前是状态B");
        context.setState(new ConcreteStateA());
    }
}
```

运行结果

```
当前是状态A
当前是状态B
当前是状态A
当前是状态B 
```