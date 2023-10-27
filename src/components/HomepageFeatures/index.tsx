import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type BlueprintItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const BlueprintList: BlueprintItem[] = [
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
  },
];

function Blueprint({title, Svg, description}: BlueprintItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{backgroundColor: '#531b4c', borderRadius: '200px' }}>
        <Svg className={styles.blueprintSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
