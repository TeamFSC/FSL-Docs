import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details

export default defineConfig({
  base: '/',

  lang: 'zh',
  title: 'FSL Launcher - 使用指南',
  description: '简易、快速、全能的 Minecraft 启动器',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',

      title: 'FSL Launcher - User Guide',
      description: 'A simple, fast, omnipotent Minecraft Launcher.',

      themeConfig: {
        outline: {
          label: 'Page Navs',
        },

        sidebar: [
          {
            text: 'About',
            items: [
              { text: 'Welcome', link: '/en/About/Mainpage' },
              { text: 'Credits', link: '/en/About/Credits' },
            ],
          },
        ],

        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },

        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search Docs',
                buttonAriaLabel: 'Search Docs',
              },
              modal: {
                noResultsText: 'Cannot found correlation results',
                resetButtonTitle: 'Clear search fliters',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Toggle',
                  closeText: 'Close',
                },
              },
            },
          },
        },

        footer: {
          message:
            'All the contents in docs are under CC BY-NC-SA 4.0 lincense.',
          copyright: 'Copyright © FSC-Team',
        },
      },
    },
  },

  themeConfig: {
    nav: [{ text: '快速开始', link: '/About/credits.md' }],

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    footer: {
      message: '文档的所有内容均以 CC BY-NC-SA 4.0 许可协议进行共享',
      copyright: 'Copyright © FSC-Team',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/FutureStudios-FSC/FSL-Launcher',
      },
    ],

    outline: {
      label: '页面导航',
    },

    sidebar: [
      {
        text: '关于',
        items: [
          { text: '欢迎', link: '/About/Mainpage.md' },
          { text: '制作人员', link: '/About/Credits.md' },
        ],
      },
    ],
  },
});
