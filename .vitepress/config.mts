import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "迷途",
  description: "迷途社,迷途智能AI",
  lang: "zh-CN",
  head: [
    [
      "script",
      {
        async: "",
        src: "https://umami.d0tmfb.tech/script.js",
        "data-website-id": "97113bfe-b413-4b49-80fc-d6d0c492c100",
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "迷途",
    logo: "/logo.webp",
    search: {
      provider: "local",
    },
    nav: [
      { text: "教程", link: "/quickstart" },
      {
        text: "下载",
        items: [
          {
            items: [
              { text: "安卓版", link: "/download#安卓用户下载" },
              { text: "网页版", link: "https://web.meetu.dev" },
            ],
          },
        ],
      },
      {
        text: "产品",
        items: [
          {
            items: [{ text: "安卓版", link: "/download#安卓用户下载" }],
          },
        ],
      },
      { text: "联系", link: "/contact" },
    ],

    sidebar: [
      { text: "下载APP", link: "/download" },
      { text: "教程简介", link: "/quickstart" },
      { text: "产品列表", link: "/product" },
      { text: "隐私协议", link: "/private" },
      { text: "联系方式", link: "/contact" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/meetu-dev/meetu-dev" },
    ],

    footer: {
      copyright: "Copyright © 2023-Meetu",
    },
  },
});
