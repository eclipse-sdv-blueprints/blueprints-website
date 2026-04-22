// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** Make HTML in markdown files compatible with MDX (JSX) parsing. */
function mdxFixHtml(filename, content) {
  if (!filename.endsWith('.md')) return undefined;
  let fixed = typeof content === 'string' ? content : Buffer.from(content).toString('utf-8');
  // Self-close void HTML elements for JSX compatibility
  fixed = fixed.replace(/<(img|br|hr|input)(\s[^>]*?)?(?<!\/)>/gi, '<$1$2 />');
  // Remove inline style attributes (JSX requires style objects, not strings)
  fixed = fixed.replace(/\s+style="[^"]*"/gi, '');
  // Ensure blank line before closing </details> so MDX separates HTML from markdown
  fixed = fixed.replace(/([^\n])\n<\/details>/g, '$1\n\n</details>');
  // Fix repo-relative links that don't match the docs site structure.
  // Cross-plugin files can't be resolved by the markdown link checker, so we use
  // URL-format paths (no .md) that will resolve correctly at runtime.
  // Markdown-style links
  fixed = fixed.replace(/\(docs\/quickstart\.md(#[^)]*)?\)/g, '(./quickstart$1)');
  fixed = fixed.replace(/\(\.\.\/demo\/README\.md\)/g, '(./demo/)');
  fixed = fixed.replace(/\(demo\/README\.md\)/g, '(./demo/)');
  fixed = fixed.replace(/\(LICENSE\)/g, '(https://github.com/eclipse-sdv-blueprints/ros-racer/blob/main/LICENSE)');
  // HTML href attributes (use URL format without .md since <a> tags aren't processed by markdown)
  fixed = fixed.replace(/href="docs\/quickstart\.md(#[^"]*)?"/g, 'href="./quickstart$1"');
  fixed = fixed.replace(/href="(\.\.\/)?demo\/README\.md"/g, 'href="./demo/"');
  return { filename, content: fixed };
}

/** Fix the removed architecture.drawio.svg reference in fleet-management introduction. */
function fixFleetMgmtImgRef(filename, content) {
  if (!filename.endsWith('.md')) return undefined;
  let fixed = typeof content === 'string' ? content : Buffer.from(content).toString('utf-8');
  fixed = fixed.replace(/architecture\.drawio\.svg/g, 'architecture-zenoh.drawio.svg');
  return { filename, content: fixed };
}

/** Rewrite links to companion-application pages not pulled into the website. */
function fixCompanionAppLinks(filename, content) {
  if (!filename.endsWith('.md')) return undefined;
  let fixed = typeof content === 'string' ? content : Buffer.from(content).toString('utf-8');
  fixed = fixed.replace(
    /\(\.\/modeling-the-companion-application\.md\)/g,
    '(https://github.com/eclipse-sdv-blueprints/companion-application/blob/main/modeling-the-companion-application.md)'
  );
  return { filename, content: fixed };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eclipse SDV Blueprints',
  tagline: 'A collaborative initiative led by Eclipse SDV members to bring the "software defined vehicle" concepts to life. A crucial aspect of each blueprint is to ensure users can easily reproduce it on their own. This requires well-written and highly clear documentation. Users can utilize blueprints as they are, for inspiration or as a foundation to customize and meet their specific needs.',
  favicon: 'img/favicon.ico',
  customFields: {
    liveReload: true,
  },

  // Set the production url of your site here
  url: 'https://chheis.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blueprints-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chheis', // Usually your GitHub org/user name.
  projectName: 'blueprints-website', // Usually your repo name.
  deploymentBranch: 'gh-pages', 

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

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
        documents: ["Readme.md", "architecture-seat-adjuster.md",
        "develop-seat-adjuster.md",
        "deploy-seat-adjuster.md",
        "deploy-seat-adjuster.md",
        "interact-seat-adjuster.md",
        "troubleshooting.md"],
        requestConfig: { responseType: "arraybuffer" },
        modifyContent: fixCompanionAppLinks,
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
        name: "companion-application-img",
        sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/companion-application/main/img",
        outDir: "docs/companion-application/img",
        documents: ["seatadjuster-can.png", "seatadjuster.png", "create-release-tag.png", "action_general_workflow_permissions.png"],
        requestConfig: { responseType: "arraybuffer" }
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
          name: "fleet-management",
          sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/fleet-management/main/docs", // the base url for the markdown (gets prepended to all of the documents when fetching)
          outDir: "docs/fleet-management", // the base directory to output to.
          documents: ["introduction.md"], // the file names to download
          requestConfig: { responseType: "arraybuffer" },
          modifyContent: fixFleetMgmtImgRef,
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
          name: "fleet-management-img", 
          sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/fleet-management/main/img",
          outDir: "docs/img",
          documents: ["architecture-zenoh.drawio.svg"],
          requestConfig: { responseType: "arraybuffer" }
      },
  ], [
      "docusaurus-plugin-remote-content",
        {
          name: "signal-to-service-horn-service",
          sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/service-to-signal/main/components/horn-service-kuksa",
          outDir: "docs/service-to-signal/components/horn-service-kuksa",
          documents: ["README.md"],
          requestConfig: { responseType: "arraybuffer" }
        },
  ], [
        "docusaurus-plugin-remote-content",
          {
            name: "signal-to-service-horn-client",
            sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/service-to-signal/main/components/horn-client",
            outDir: "docs/service-to-signal/components/horn-client",
            documents: ["README.md"],
            requestConfig: { responseType: "arraybuffer" }
          },
  ], [
        "docusaurus-plugin-remote-content",
          {
            name: "signal-to-service-actuator-provider",
            sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/service-to-signal/main/components/actuator-provider",
            outDir: "docs/service-to-signal/components/actuator-provider",
            documents: ["README.md"],
            requestConfig: { responseType: "arraybuffer" }
          },
  ], [
    "docusaurus-plugin-remote-content",
      {
        name: "signal-to-service",
        sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/service-to-signal/main",
        outDir: "docs/service-to-signal",
        documents: ["README.md"],
        requestConfig: { responseType: "arraybuffer" }
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
        name: "signal-to-service-img",
        sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/service-to-signal/main/img",
        outDir: "docs/service-to-signal/img",
        documents: ["overview.drawio.png"],
        requestConfig: { responseType: "arraybuffer" }
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
        name: "ros-racer",
        sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/ros-racer/main",
        outDir: "docs/ros-racer",
        documents: ["README.md"],
        requestConfig: { responseType: "arraybuffer" },
        modifyContent: mdxFixHtml,
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
        name: "ros-racer-docs",
        sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/ros-racer/main/docs",
        outDir: "docs/ros-racer",
        documents: ["quickstart.md", "visualizations.md"],
        requestConfig: { responseType: "arraybuffer" },
        modifyContent: mdxFixHtml,
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
        name: "ros-racer-demo",
        sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/ros-racer/main/demo",
        outDir: "docs/ros-racer/demo",
        documents: ["README.md"],
        requestConfig: { responseType: "arraybuffer" },
        modifyContent: mdxFixHtml,
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
        name: "ros-racer-img",
        sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/ros-racer/main/docs/assets",
        outDir: "docs/ros-racer/docs/assets",
        documents: ["introduction.png"],
        requestConfig: { responseType: "arraybuffer" }
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
        name: "ros-racer-img-docs",
        sourceBaseUrl: "https://raw.githubusercontent.com/eclipse-sdv-blueprints/ros-racer/main/docs/assets",
        outDir: "docs/ros-racer/assets",
        documents: ["demo.png"],
        requestConfig: { responseType: "arraybuffer" }
      },
  ], [
    "docusaurus-plugin-remote-content",
      {
        name: "e2e-demo-blueprint",
        sourceBaseUrl: "https://raw.githubusercontent.com/chheis/eclipse-sdv-e2e-demo-blueprint/main/docs/website",
        outDir: "docs/e2e-demo-blueprint",
        documents: [
          "introduction.md",
          "architecture.md",
          "hardware.md",
          "setup-guide.md",
          "signal-mapping.md",
          "communication-workflow.md",
          "fleet-analysis.md",
        ],
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
        title: '',
        logo: {
          alt: 'Eclipse SDV Blueprints',
          src: 'logos/eclipsesdvblueprint_transparent.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'overallSidebar',
            position: 'left',
            label: 'Documentation',
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
                label: 'Companion Application',
                to: '/docs/companion-application/',
              },
              {
                label: 'Service to Signal',
                to: '/docs/service-to-signal/',
              },
              {
                label: 'Fleet Management',
                to: '/docs/fleet-management/introduction',
              },
              {
                label: 'ROS Racer',
                to: '/docs/ros-racer/',
              },
              {
                label: 'E2E Demo Blueprint',
                to: '/docs/e2e-demo-blueprint/introduction',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'SDV Blueprints on GitHub',
                href: 'https://github.com/eclipse-sdv-blueprints',
              },              {
                label: 'Eclipse Foundation',
                href: 'https://www.eclipse.org',
              },
              {
                label: 'Privacy policy',
                href: 'ttps://www.eclipse.org/legal/privacy.php',
              },
              {
                label: 'Website terms of use',
                href: 'https://www.eclipse.org/legal/termsofuse.php',
              },
              {
                label: 'Legal',
                href: 'https://www.eclipse.org/legal',
              }
            ],
          },
        ],
        copyright: `<a style="color:#fff;text-decoration:none;" href="https://www.eclipse.org/legal/copyright.php">Copyright © ${new Date().getFullYear()} Eclipse Foundation. All Rights Reserved.</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;