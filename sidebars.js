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
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Companion Application',
      items: [
        'companion-application/Readme',
        'companion-application/architecture-seat-adjuster',
        'companion-application/interact-seat-adjuster',
        'companion-application/deploy-seat-adjuster',
      ],
    },
    {
      type: 'category',
      label: 'Fleet Management',
      items: [
        'fleet-management/introduction',
      ],
    }
  ],
};

module.exports = sidebars;
