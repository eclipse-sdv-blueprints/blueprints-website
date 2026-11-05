/*
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Assisted-by: GPT-6
 */

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
          label: 'CarMate',
          link: { type: 'doc', id: 'carmate/introduction'},
          items: [
            'carmate/architecture',
            'carmate/getting-started',
            'carmate/components',
          ]
        },
        {
          type: 'category',
          label: 'Scenario Orchestration',
          link: { type: 'doc', id: 'scenario-orchestration/README'},
          items: [
            {
              type: 'category',
              label: 'Resource Isolation',
              link: { type: 'doc', id: 'scenario-orchestration/resource-isolation/README'},
              items: [
                'scenario-orchestration/resource-isolation/Introduction',
                {
                  type: 'category',
                  label: 'Single Node',
                  items: [
                    'scenario-orchestration/resource-isolation/single_node/test_script/README',
                    'scenario-orchestration/resource-isolation/single_node/serial-bridge/serial/README',
                    'scenario-orchestration/resource-isolation/single_node/kuksa-bridge/README',
                    'scenario-orchestration/resource-isolation/single_node/led-normal-controller/README',
                    'scenario-orchestration/resource-isolation/single_node/led-timpani-controller/README',
                    'scenario-orchestration/resource-isolation/single_node/monitoring/README',
                  ]
                },
                {
                  type: 'category',
                  label: 'Multi Node',
                  items: [
                    'scenario-orchestration/resource-isolation/multi_node/test_script/README',
                    {
                      type: 'category',
                      label: 'NUC Master',
                      link: { type: 'doc', id: 'scenario-orchestration/resource-isolation/multi_node/nuc_master/README'},
                      items: [
                        'scenario-orchestration/resource-isolation/multi_node/nuc_master/arduino/README',
                        'scenario-orchestration/resource-isolation/multi_node/nuc_master/serial-bridge/serial/README',
                      ]
                    },
                    {
                      type: 'category',
                      label: 'NUC Guest',
                      link: { type: 'doc', id: 'scenario-orchestration/resource-isolation/multi_node/nuc_guest/README'},
                      items: [
                        'scenario-orchestration/resource-isolation/multi_node/nuc_guest/arduino/README',
                        'scenario-orchestration/resource-isolation/multi_node/nuc_guest/kuksa-bridge/README',
                        'scenario-orchestration/resource-isolation/multi_node/nuc_guest/led-normal-controller/README',
                        'scenario-orchestration/resource-isolation/multi_node/nuc_guest/led-timpani-controller/README',
                        'scenario-orchestration/resource-isolation/multi_node/nuc_guest/monitoring/README',
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Commercial SDV Stack',
          link: { type: 'doc', id: 'commercial-sdv-stack/README'},
          items: [
            'commercial-sdv-stack/ecu-sim/README',
            'commercial-sdv-stack/odx/README',
            'commercial-sdv-stack/uservices/README',
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
            {
              type: 'category',
              label: 'Bridges',
              items: [
                'e2e-demo-blueprint/bridge-gamecontroller',
                'e2e-demo-blueprint/bridge-kuksa-livi',
                'e2e-demo-blueprint/bridge-mqtt-grpc',
              ]
            },
            {
              type: 'category',
              label: 'Device Guides',
              items: [
                'e2e-demo-blueprint/device-joystick-ecu',
                'e2e-demo-blueprint/device-led-ecu',
                'e2e-demo-blueprint/device-rfid-ecu',
                'e2e-demo-blueprint/device-threadx-ecu',
                'e2e-demo-blueprint/device-ivi-livi',
              ]
            },
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
