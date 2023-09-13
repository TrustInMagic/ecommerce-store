import React from 'react';
import styles from './LandingNav.module.css';
import { Link } from 'react-router-dom';
import getRandomGameName from '../../utils/random-game-name';

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
              <img src={require(`../../${button.iconSrc}`)} alt='' />
              <div className={styles['button-name']}>{button.name}</div>
            </a>
          ) : button.name !== 'Play Dice' ? (
            <Link className={styles.button} to={button.href} key={button.name}>
              <img src={require(`../../${button.iconSrc}`)} alt='' />
              <div className={styles['button-name']}>{button.name}</div>
            </Link>
          ) : (
            <Link
              className={styles.button}
              to={`store/games/${getRandomGameName()}`}
              key={button.name}
            >
              <img src={require(`../../${button.iconSrc}`)} alt='' />
              <div className={styles['button-name']}>{button.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LandingNav;
