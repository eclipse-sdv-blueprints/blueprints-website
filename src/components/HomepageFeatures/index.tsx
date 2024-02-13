import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type BlueprintItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string,
};

const BlueprintList: BlueprintItem[] = [
  {
    title: 'Companion Application',
    Svg: require('@site/static/img/sdv-logo-white.svg').default,
      description: (
        <>
          The companion application is an example to showcase how to create a vehicle application which senses and actuates signals in the vehicle for Eclipse Leda with help of Eclipse Velocitas and Eclipse Kuksa .
        </>
      ),
      link: "https://github.com/eclipse-sdv-blueprints/companion-application",
  },
  {
    title: 'Fleet Management',
    Svg: require('@site/static/img/sdv-logo-white.svg').default,
    description: (
      <>
        The truck fleet management blueprint is focused on capitalizing
         on all the data that a fleet of trucks generates. There are also a variety 
         of apps and services running on a fleet of vehicles that must be tracked
         and managed. 
      </>
    ),
    link: 'https://github.com/eclipse-sdv-blueprints/fleet-management',
  },
  {
    title: 'ROS Racers',
    Svg: require('@site/static/img/sdv-logo-white.svg').default,
    description: (
      <>
        Based on ROS, this blueprint orchestrate and manage the F1Tenth stacks
         that power the miniature vehicles racing around a track. Blueprints documentation 
         the best place to get started.
      </>
    ),
    link: "https://github.com/eclipse-sdv-blueprints/ros-racer",
  },
  {
    title: 'Insurance and Data Spaces',
    Svg: require('@site/static/img/sdv-logo-white.svg').default,
    description: (
      <>
        A showcase for integrating Eclipse Software Defined Vehicle (SDV) and Eclipse Dataspaces for insurance applications. Enable exchange of vehicle and risk events to support risk assesment,
         underwriting processes and customer experiences
      </>
    ),
    link: "https://github.com/eclipse-sdv-blueprints/insurance",
  },
  {
    title: 'Software Orchestration',
    Svg: require('@site/static/img/sdv-logo-white.svg').default,
    description: (
      <>
        This blueprint aims to showcase an example of how a proposed in-vehicle software orchestration architecture with connectivity to the cloud can help developers build and manage complex services and applications that tackle advanced scenarios like workload orchestration, scheduling, placement and resilience. 
      </>
    ),
    link: "https://github.com/eclipse-sdv-blueprints/software-orchestration",
  },
];

function Blueprint({ title, Svg, description, link }: BlueprintItem) {
  return (
    <div className={clsx('col col--4')}>
       <div className="text--center padding-horiz--md">
        <div
          id="box"
          className="text--center blueprint-box"
          style={{
            backgroundColor: '#531b4c',
            borderRadius: '20px',
            padding: '0rem',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <a href={link}>
            <Svg className={styles.blueprintSvg} role="img" />
          </a>
        </div>
        <h1>{title}</h1>
        {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.blueprints}>
      <div className="container">
        <div className="row">
          {BlueprintList.map((props, idx) => (
            <Blueprint key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
