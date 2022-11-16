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
          { text: "状态模式", icon: "edit", link: "state" },
          // { text: "苹果2", icon: "edit", link: "2" },
          // "3",
          // "4",
        ],
      },
      // { text: "樱桃", icon: "edit", link: "cherry" },
      // { text: "火龙果", icon: "edit", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
      { text: "HTML总结", icon: "edit", link: "html-1" },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
