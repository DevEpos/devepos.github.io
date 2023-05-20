import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, deNavbar } from "./navbar/index.js";
import { enSidebar, deSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://devepos.com",
  author: {
    name: "DevEpos",
    url: "https://github.com/DevEpos"
  },

  iconAssets: "fontawesome-with-brands",
  editLink: false,
  logo: "/logo.svg",
  favicon: "/favicon.png",

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,
      
      // sidebar
      sidebar: enSidebar,
      footer: "",
      copyright: "Copyright © 2021-present Ludwig Stockbauer-Muhr",
      displayFooter: true
    }

    /**
     * German locale config
     */
    // "/de/": {
    //   // navbar
    //   navbar: deNavbar,

    //   // sidebar
    //   sidebar: deSidebar,

    //   footer: "Default footer",

    //   displayFooter: true,

    //   // page meta
    //   metaLocales: {
    //     editLink: "Diese Seite auf GitHub bearbeiten",
    //   },
    // },
  },

  plugins: {
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    }
  }
});
