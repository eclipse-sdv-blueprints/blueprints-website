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
            'companion-application/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Fleet Management',
          link: { type: 'doc', id: 'fleet-management/introduction'},
          items: []
        },
        {
          type: 'category',
          label: 'Service to Signal',
          link: { type: 'doc', id: 'service-to-signal/README'},
          items: [
            'service-to-signal/components/horn-service-kuksa/README',
            'service-to-signal/components/horn-client/README',
            'service-to-signal/components/actuator-provider/README'
          ]
        },
        {
          type: 'category',
          label: 'ROS Racer',
          link: { type: 'doc', id: 'ros-racer/README'},
          items: [
            'ros-racer/quickstart',
            'ros-racer/visualizations',
            'ros-racer/demo/README',
          ]
        },
        {
          type: 'category',
          label: 'E2E Demo Blueprint',
          link: { type: 'doc', id: 'e2e-demo-blueprint/introduction'},
          items: [
            'e2e-demo-blueprint/architecture',
            'e2e-demo-blueprint/hardware',
            'e2e-demo-blueprint/setup-guide',
            'e2e-demo-blueprint/signal-mapping',
            'e2e-demo-blueprint/communication-workflow',
            'e2e-demo-blueprint/fleet-analysis',
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
