import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Guide",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
