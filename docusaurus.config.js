// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DBH Bot API',
  tagline: 'DBH\'\s API to help add in bots',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://pnode2.danbot.host:7068',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
    
  plugins: ["docusaurus-plugin-sass"],
  themes: ["docusaurus-json-schema-plugin"],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        },
      navbar: {
        title: 'DBH API Docs',
        logo: {
          alt: 'DBH Logo',
          src: 'img/dbh.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Danbot-Hosting/DBH-Bot-API',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
         },
        ],
      },
      announcementBar: {
        id: 'wip',
        content: 'These docs are still a W.I.P! Not everything will be finished and is still being worked on!',
        backgroundColor: '#eed202',
        textColor: '#00000',
        isCloseable: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Main Website',
                href: 'https://danbot.host',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/DBH',
              },
              {
                label: 'Panel',
                href: 'https://panel.danbot.host',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/DanBot-Hosting/DBH-Bot-API',
              },
            ],
          },
        ],
        copyright: ` Made with ❤️ by <a href="https://danbot.host">DanBot Hosting</a> | © ${new Date().getFullYear()} DBH Bot API Docs`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
