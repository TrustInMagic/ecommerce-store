import React from 'react';
import styles from './LandingNav.module.css';

const LandingNav = ({ buttons, title, position }) => {
  return (
    <div
      className={
        position === 'bottom' ? styles['bottom-nav'] : styles['right-nav']
      }
    >
      {title ? <div className={styles.title}>{title}</div> : null}
      <div className={styles['button-container']}>
        {buttons.map((button) => (
          <a className={styles.button} href={button.href} key={button.name}>
            <img src={button.iconSrc} alt='' />
            <div className={styles['button-name']}>{button.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LandingNav;
