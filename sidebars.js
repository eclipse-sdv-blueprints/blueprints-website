/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  overallSidebar: [
    {
      type: 'category',
      label: 'Blueprints Documentation',
      link: {
        type: 'generated-index',
        title: 'Overview',
        description: 'You can find the documentation for the following blueprints',
        slug: '/overview',
      },
      items: [
        {
          type: 'category',
          label: 'Companion Application',
          link: { type: 'doc', id: 'companion-application/Readme'},
          items: [
            'companion-application/architecture-seat-adjuster',
            'companion-application/develop-seat-adjuster',
            'companion-application/deploy-seat-adjuster',
            'companion-application/interact-seat-adjuster',
          ],
        },
        {
          type: 'category',
          label: 'Fleet Management',
          link: { type: 'doc', id: 'fleet-management/introduction'},
          items: []
        }
      ]
    }
  ]
};

module.exports = sidebars;
