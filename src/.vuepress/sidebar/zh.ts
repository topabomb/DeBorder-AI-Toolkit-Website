import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "指南",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
