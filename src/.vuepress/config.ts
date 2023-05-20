import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "DevEpos",
      description: "Mostly Tooling for ABAP Development (ADT)"
    }
    // "/de/": {
    //   lang: "de-DE",
    //   title: "DevEpos",
    //   description: "DevEpos Homepage",
    // },
  },
  theme,
  plugins: [
    searchProPlugin({
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
    })
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
