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
      // { text: "樱桃", icon: "edit", link: "cherry" },
      // { text: "火龙果", icon: "edit", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
      {
        text: "前端",
        icon: "edit",
        prefix: "html/",
        children: [
          { text: "JS三个点", icon: "edit", link: "dot" },
          { text: "HTML总结", icon: "edit", link: "html-1" },
        ],
      },
      {
        text: "Aniloc的分享",
        icon: "edit",
        prefix: "Aniloc/",
        children: [
          { text: "JS对象", icon: "edit", link: "js-object" },
          { text: "测试", icon: "edit", link: "test" },
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
