import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "迷途",
  description: "迷途社,迷途智能AI",
  lang: "zh",
  head: [
    ["link", { rel: "icon", href: "/logo.webp" }],
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
    // logo: "/logo.webp",
    darkModeSwitchLabel: "切换主题",
    lastUpdated: {
      text: "编辑于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    returnToTopLabel: "顶部",
    search: {
      provider: "local",
    },
    nav: [
      { text: "开始", link: "/quickstart" },
      {
        text: "下载",
        items: [
          {
            items: [
              { text: "迷途AI安卓版", link: "/download#安卓用户下载" },
              { text: "迷途AI网页版", link: "https://web.meetu.dev" },
            ],
          },
        ],
      },
      {
        text: "产品",
        items: [
          {
            items: [
              { text: "Inke 笔记", link: "https://inke.app" },
              { text: "ChatGPT镜像", link: "https://d.aging.run" },
            ],
          },
        ],
      },
      { text: "联系", link: "/contact" },
    ],

    sidebar: [
      {
        text: "导览",
        items: [
          { text: "快速开始", link: "/quickstart" },
          { text: "下载APP", link: "/download" },
          { text: "支持模型", link: "/model" },
          { text: "计费规则", link: "/mibi" },
          { text: "关于自部署", link: "/host" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "我们的产品", link: "/product" },
          { text: "用户协议", link: "/termsuser" },
          { text: "隐私政策", link: "/privacy" },
          { text: "联系方式", link: "/contact" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/meetu-dev/meetu-dev" },
      { icon: "twitter", link: "https://twitter.com/yesmoree" },
    ],

    footer: {
      copyright: "Copyright © 2023-Meetu",
    },
  },
});
