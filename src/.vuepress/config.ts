import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "DeBorder AI Toolkit",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "DeBorder AI Toolkit",
    },
  },

  theme,


  // Enable it with pwa
  // shouldPrefetch: false,
});
