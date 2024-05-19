import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/es/": [
    "",
    {
      text: "Empezar",
      link: "get-started/",
      icon: "rocket",
      children: [
        "get-started/Develop/",
        "get-started/Build/",
        "get-started/Docker/"
      ]
    },
    { text: "Guide", icon: "book-open", link: "/guide/" },
  ],
});
