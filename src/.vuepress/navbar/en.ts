import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Home",
    icon: "house",
    link: "/"
  },
  {
    text: "Projects",
    icon: "circle-info",
    prefix: "/projects/",
    children: [
      {
        text: "ADT Plug-ins",
        icon: "plug",
        prefix: "adt-plugins/",
        link: "adt-plugins/",
        children: [
          "abap-search-and-analysis-tools/",
          "abap-tags/",
          "abap-code-search/",
          "abap-callhierarchy/"
        ]
      },
      {
        text: "SAP GUI Programs",
        icon: "desktop",
        prefix: "sap-gui/",
        link: "sap-gui/",
        children: [
          {
            text: "DB Browser",
            link: "db-browser/README.md",
            prefix: "db-browser/"
          }
        ]
      }
    ]
  },
  {
    text: "Eclipse Update Sites",
    link: "https://eclipse.devepos.com"
  }
]);
