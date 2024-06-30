import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([ { 
  text: "Get Started", 
  icon: "rocket", 
  link: "/get-started/" 
},
  { 
    text: "Guide", 
    icon: "book-open", 
    link: "/guide/" 
  },
  { 
    text: "Access the system", 
    icon: "/assets/img/vue-logo-small.png", 
    link: "http://api.adempiere.io/vue" 
  },
]);
