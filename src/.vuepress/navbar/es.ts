import { navbar } from "vuepress-theme-hope";

export const esNavbar = navbar([
  "/es/",
  { 
    text: "Empezar", 
    icon: "rocket", 
    link: "/es/get-started/" 
  },
  { 
    text: "Guia", 
    icon: "book-open", 
    link: "/es/guide/" 
  },
  { 
    text: "Acceder al sistema", 
    icon: "/assets/img/vue-logo-small.png", 
    link: "http://api.adempiere.io/vue" 
  },
]);
