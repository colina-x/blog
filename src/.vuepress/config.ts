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
  },

  theme,

  shouldPrefetch: false,
});
