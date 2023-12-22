---
title: Perlin噪声
icon: page
# 设置写作时间
date: 2023-04-08
# 一个页面可以有多个分类
category:
  - game
# 一个页面可以有多个标签
tag:
  - 算法
  - 柏林算法
  - Perlin

# 此页面会出现在文章收藏中
star: true
---

柏林噪声是一种常见的噪声生成算法，很多沙盒游戏的地图创建都使用了此方法，相比于普通噪声，它可以生成更自然、平滑的曲线。

<!-- more -->

## 柏林噪声

- fade函數：$6t^5-15t^4+10t^3$
- 綫性插值函數：$f(t)=a+t*(b-a)$

``` CS
class Perlin
    {
        /// <summary>
        /// 哈希表
        /// </summary>
        private int[] p = new int[] { 151,160,137,91,90,15,131,13,201,95,96,53,
            194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,
            247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,
            237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,
            166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,
            245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,
            89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,
            64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,
            59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,
            154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,
            110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,
            210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,
            31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,
            236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180 };

        /// <summary>
        /// 缓和曲线函数
        /// </summary>
        /// <param name="t">value</param>
        /// <returns></returns>
        private double fade(double t) { return t * t * t * (t * (t * 6 - 15) + 10); }

        /// <summary>
        /// 线性插值函数
        /// </summary>
        /// <param name="t"></param>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <returns></returns>
        private double lerp(double t,double a,double b) { return a + t * (b - a); }

        /// <summary>
        /// 点乘
        /// </summary>
        /// <param name="hash">哈希值</param>
        /// <param name="x">x</param>
        /// <param name="y">y</param>
        /// <returns></returns>
        private double dot(int hash,double x,double y)
        {
            switch (hash & 3)
            {
                case 0: return x + y;   //(1, 1)
                case 1: return -x + y;  //(-1, 1)
                case 2: return x - y;   //(1, -1)
                case 3: return -x - y;  //(-1, -1)
                default: return 0;
            }
        }

        //1维柏林噪声
        public double perlin1(double x)
        {
            int xn = (int)Math.Floor(x);
            double xf = x - xn;
            double u = fade(xf);
            int a = p[xn & 255]*2-255;
            int b = p[(xn+1) & 255]*2-255;
            double v = lerp(u, a*xf, b*(xf-1));
            return v/128;
        }

        //2维柏林噪声
        public double perlin2(double x,double y)
        {
            int xn = (int)Math.Floor(x);
            int yn = (int)Math.Floor(y);
            double xf = x - xn;
            double yf = y - yn;
            double u = fade(xf);
            double v = fade(yf);
            int aa = p[(p[xn & 255] + yn) & 255];
            int ab = p[(p[(xn + 1) & 255] + yn) & 255];
            int ba = p[(p[xn & 255] + yn + 1) & 255];
            int bb = p[(p[(xn + 1) & 255] + yn + 1) & 255];
            double v1 = lerp(u, dot(aa, xf, yf), dot(ab, xf - 1, yf));
            double v2 = lerp(u, dot(ba, xf, yf - 1), dot(bb, xf - 1, yf - 1));
            double v3 = lerp(v, v1, v2);
            return v3/Math.Sqrt(2);
        }

    }
```

## 效果

- 1维柏林噪声

![1维柏林噪声](https://colinaa.blob.core.windows.net/img/1维.png "1维柏林噪声")

- 2维柏林噪声

![2维柏林噪声](https://colinaa.blob.core.windows.net/img/2维.png "2维柏林噪声")
