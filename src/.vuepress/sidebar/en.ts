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
          children: [
            {
              text: "Overview",
              link: "overview/",
              icon: "circle-info",
              children: []
            },
            {
              text: "Release Notes",
              link: "release-notes/",
              icon: "lightbulb",
              children: []
            }
          ]
        },
        {
          text: "ABAP Tags",
          link: "abap-tags/README.md",
          prefix: "abap-tags/",
          children: [
            {
              text: "Overview",
              link: "overview/",
              icon: "circle-info",
              children: []
            },
            {
              text: "Release Notes",
              link: "release-notes/",
              icon: "lightbulb",
              children: []
            }
          ]
        },
        {
          text: "ABAP Code Search",
          link: "abap-code-search/README.md",
          prefix: "abap-code-search/",
          children: [
            {
              text: "Overview",
              link: "overview/",
              icon: "circle-info",
              children: []
            },
            {
              text: "Release Notes",
              link: "release-notes/",
              icon: "lightbulb",
              children: []
            }
          ]
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
          children: [
            {
              text: "Overview",
              link: "overview/",
              icon: "circle-info",
              children: []
            },
            {
              text: "Installation Instructions",
              link: "installation/",
              icon: "download",
              children: []
            }
          ]
        }
      ]
    }
  ]
});
