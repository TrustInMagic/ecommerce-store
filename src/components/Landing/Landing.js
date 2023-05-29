import React from 'react';
import Nav from '../Nav/Nav';
import styles from './Landing.module.css';
import LandingNav from '../LandingNav/LandingNav';
import {
  leftNavButtons,
  rightNavButtons,
  landingRightNavButtons,
  landingBottomNavButtons,
} from './landing.config';

const Landing = ({ openCart, blur, cartContent }) => {
  return (
    <div className={`${styles.landing} ${blur ? styles.blur : ''}`}>
      <video autoPlay muted loop playsInline className={styles.video}>
        <source
          src='./assets/death-knights-live-wallpaper.mp4'
          type='video/mp4'
        />
      </video>
      <Nav
        leftButtons={leftNavButtons}
        rightButtons={rightNavButtons}
        openCart={openCart}
        cartContent={cartContent}
      />
      <div className={styles.content}>
        <div className={styles['main-banner']}>
          <h1>Game Store</h1>
          <div className={styles.description}>
            The best destination to buy new games to competitive prices. 24 hour
            support, best price guarantee and a flawless UX. Wish for more? Tell
            us below — or check out our{' '}
            <span
              style={{ cursor: 'pointer', color: '#22d3ee', fontWeight: '700' }}
            >
              careers
            </span>
            .
          </div>
        </div>
        <LandingNav
          buttons={landingRightNavButtons}
          title='Quick Navigation'
          position='right'
        />
        <LandingNav buttons={landingBottomNavButtons} position='bottom' />
      </div>
      <span />
    </div>
  );
};

export default Landing;
