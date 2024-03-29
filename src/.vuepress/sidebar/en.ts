import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      icon: "plug",
      text: "ADT Plug-ins",
      prefix: "projects/adt-plugins/",
      link: "projects/adt-plugins/",
      children: [
        {
          text: "ABAP Search and Analysis Tools",
          link: "abap-search-and-analysis-tools/README.md",
          prefix: "abap-search-and-analysis-tools/",
          children: []
        },
        {
          text: "ABAP Tags",
          link: "abap-tags/README.md",
          prefix: "abap-tags/",
          children: []
        },
        {
          text: "ABAP Code Search",
          link: "abap-code-search/README.md",
          prefix: "abap-code-search/",
          children: []
        },
        {
          text: "ABAP Search Favorites",
          link: "abap-search-favorites/README.md",
          prefix: "abap-search-favorites/",
          children: []
        },
        {
          text: "ABAP Call Hierarchy",
          link: "abap-callhierarchy/README.md",
          prefix: "abap-callhierarchy/",
          children: []
        }
      ]
    },
    {
      icon: "desktop",
      text: "SAP GUI Programs",
      prefix: "projects/sap-gui/",
      link: "projects/sap-gui/",
      children: [
        {
          text: "DB Browser",
          link: "db-browser/README.md",
          prefix: "db-browser/",
          children: []
        }
      ]
    }
  ],
  "/projects/adt-plugins/abap-code-search": "structure",
  "/projects/adt-plugins/abap-search-and-analysis-tools": "structure",
  "/projects/adt-plugins/abap-tags": "structure",
  "/projects/adt-plugins/abap-search-favorites": "structure",
  "/projects/adt-plugins/abap-callhierarchy": "structure",
  "/projects/sap-gui/db-browser": "structure"
});
