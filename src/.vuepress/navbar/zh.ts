import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "C++",
        icon: "edit",
        prefix: "CPlusPlus/",
        children: [
          { text: "值和引用", icon: "edit", link: "value" },
          { text: "模板01", icon: "edit", link: "template1" },
          // "3",
          // "4",
        ],
      },
      {
        text: "设计模式",
        icon: "edit",
        prefix: "设计模式/",
        children: [
          { text: "简单工厂模式", icon: "edit", link: "simpleFactory" },
          { text: "状态模式", icon: "edit", link: "state" },
          // "3",
          // "4",
        ],
      },
      {
        text: "算法",
        icon: "edit",
        prefix: "算法/",
        children: [
          { text: "Perlin噪声", icon: "edit", link: "perlin" },
          { text: "二分搜索", icon: "edit", link: "bound" },
          // "3",
          // "4",
        ],
      },
      {
        text: "前端",
        icon: "edit",
        prefix: "html/",
        children: [
          { text: "JS三个点", icon: "edit", link: "dot" },
          { text: "HTML总结", icon: "edit", link: "html-1" },
        ],
      },
      // { text: "樱桃", icon: "edit", link: "cherry" },
      // { text: "火龙果", icon: "edit", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.vuepress/zh/",
  },
]);
