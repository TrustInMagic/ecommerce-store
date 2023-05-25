import React from 'react';
import styles from './Nav.module.css';

const Nav = ({ leftButtons, rightButtons }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        {leftButtons.map((button) => {
          return button.name !== 'Search Bar' ? (
            <a className={styles.button} key={button.name} href={button.href}>
              <img src={button.iconSrc} alt='' />
              <div className={styles['button-name']}>{button.name}</div>
            </a>
          ) : (
            <div className={styles.search} key={button.name}>
              <input type='search' placeholder='Search Games...' />
              <img src={button.iconSrc} alt='' />
            </div>
          );
        })}
      </div>
      <div className={styles.right}>
        {rightButtons.map((button) => {
          return (
            <a className={styles.button} key={button.name} href={button.href}>
              <img src={button.iconSrc} alt='' />
              <div className={styles['button-name']}>{button.name}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
