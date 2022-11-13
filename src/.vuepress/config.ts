import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Colinaの小窝",
      description: "一个分享技术的网站",
    },
    /*"/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
      },*/
  },

  theme,

  shouldPrefetch: false,
});
