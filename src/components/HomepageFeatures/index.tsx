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
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'ROS Racers',
    Svg: require('@site/static/img/sdv-logo-white.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Insurance',
    Svg: require('@site/static/img/sdv-logo-white.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
