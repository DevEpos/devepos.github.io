import { defineUserConfig } from "vuepress";
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
  theme

  // Enable it with pwa
  // shouldPrefetch: false,
});
