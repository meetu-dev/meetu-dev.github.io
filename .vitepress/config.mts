import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "迷兔",
  description:
    "迷兔社,迷兔人工智能,迷兔AI,集合国内外流行AI模型应用,ChatGPT,GPT-4.0,Claude,文心一言,通义千问,LLama2,讯飞星火,腾讯混元",
  lang: "zh",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-MJ79QL6TXQ",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MJ79QL6TXQ');`,
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "迷兔",
    logo: "/logo.png",
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
              { text: "迷兔AI安卓版", link: "/download#安卓用户下载" },
              {
                text: "备用站点(Ctrl+D保存)",
                link: "https://meetu-dev.github.io",
              },
            ],
          },
        ],
      },
      {
        text: "其他",
        items: [
          {
            items: [
              { text: "Inke 笔记", link: "https://inke.app" },
              { text: "ChatGPT镜像", link: "https://gcloudlab.github.io" },
            ],
          },
        ],
      },
      { text: "社区", link: "/contact" },
    ],

    sidebar: [
      {
        text: "导览",
        items: [
          { text: "新手指引", link: "/quickstart" },
          { text: "下载APP", link: "/download" },
          { text: "计费规则", link: "/mibi" },
          { text: "关于部署", link: "/deploy" },
          { text: "联系我们", link: "/contact" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "我们的产品", link: "/product" },
          { text: "用户协议", link: "/termsuser" },
          { text: "隐私政策", link: "/privacy" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/meetu-dev/meetu-dev" },
      { icon: "twitter", link: "https://twitter.com/yesmoree" },
    ],

    footer: {
      // message: "友链: <a href='https://inke.app' target='_blank'>Inke Note</a>",
      copyright: "Copyright © 2023-迷兔AI",
    },
  },
});
