import React from 'react';
import styles from './LandingNav.module.css';
import { Link } from 'react-router-dom';

const LandingNav = ({ buttons, title, position }) => {
  return (
    <div
      className={
        position === 'bottom' ? styles['bottom-nav'] : styles['right-nav']
      }
    >
      {title ? <div className={styles.title}>{title}</div> : null}
      <div className={styles['button-container']}>
        {buttons.map((button) => {
          return button.internal === false ? (
            <a className={styles.button} href={button.href} key={button.name}>
              <img src={button.iconSrc} alt='' />
              <div className={styles['button-name']}>{button.name}</div>
            </a>
          ) : (
            <Link className={styles.button} to={button.href} key={button.name}>
              <img src={button.iconSrc} alt='' />
              <div className={styles['button-name']}>{button.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LandingNav;
