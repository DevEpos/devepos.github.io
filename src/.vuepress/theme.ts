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
    searchPro: {
      indexContent: true,
      // add supports for category and tags
      customFields: [
        {
          getter: page => (page.frontmatter as any).category,
          formatter: "Category: $content"
        },
        {
          getter: page => page.frontmatter.tag,
          formatter: "Tag: $content"
        }
      ]
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: true,
      demo: false,
      echarts: false,
      figure: true,
      flowchart: false,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: false,
      mark: true,
      mermaid: false,
      playground: {
        presets: ["ts", "vue"]
      },
      revealJs: {
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
      vPre: true
    }
  }
});
