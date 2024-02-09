// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eclipse SDV Blueprints',
  tagline: 'A collaborative initiative led by Eclipse SDV members to bring the "software defined vehicle" concepts to life. A crucial aspect of each blueprint is to ensure users can easily reproduce it on their own. This requires well-written and highly clear documentation. Users can utilize blueprints as they are, for inspiration or as a foundation to customize and meet their specific needs.',
  favicon: 'img/favicon.ico',
  customFields: {
    liveReload: true,
  },

  // Set the production url of your site here
  url: 'https://sdv-blueprints.eclipse.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eclipse-sdv-blueprints', // Usually your GitHub org/user name.
  projectName: 'blueprints-website', // Usually your repo name.
  deploymentBranch: 'gh-pages', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins:[ 
    [
    "docusaurus-plugin-remote-content",
      {
        name: "companion-application",
        sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/companion-application/main",
        outDir: "docs/companion-application",
        documents: ["Readme.md", "architecture-seat-adjuster.md", "interact-seat-adjuster.md", "deploy-seat-adjuster.md"],
        requestConfig: { responseType: "arraybuffer" }
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
        name: "companion-application-img",
        sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/companion-application/main/img",
        outDir: "docs/companion-application/img",
        documents: ["seatadjuster-can.png", "seatadjuster.png"],
        requestConfig: { responseType: "arraybuffer" }
      },
  ],[
    "docusaurus-plugin-remote-content",
      {
          name: "fleet-management", 
          sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/fleet-management/main/docs", // the base url for the markdown (gets prepended to all of the documents when fetching)
          outDir: "docs/fleet-management", // the base directory to output to.
          documents: ["introduction.md"], // the file names to download
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
          name: "fleet-management-img", 
          sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/fleet-management/main/img", // the base url for the markdown (gets prepended to all of the documents when fetching)
          outDir: "docs/img", // the base directory to output to.
          documents: ["architecture.drawio.svg"], // the file names to download
          requestConfig: { responseType: "arraybuffer" }
      },
  ]],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/sdvblueprints-social-card.jpg',
      navbar: {
        title: 'Eclipse SDV Blueprints',
        logo: {
          alt: 'Eclipse SDV Blueprints',
          src: 'img/sdv-logo-color.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/eclipse-sdv-blueprints',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://www.facebook.com/eclipse.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/sdveclipse',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/eclipse-sdv-blueprints',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eclipse Foundation. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
