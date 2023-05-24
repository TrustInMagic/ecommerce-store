import React from 'react';
import Nav from '../Nav';
import styles from '../../styles/Landing.module.css';
import LandingNav from './LandingNav';

const Landing = () => {
  const leftNavButtons = [
    { name: 'Game Store', href: '/', iconSrc: './assets/icons/game-store.svg' },
    {
      name: 'Browse Store',
      href: '/store',
      iconSrc: './assets/icons/browse-store.svg',
    },
  ];

  const rightNavButtons = [
    { name: 'trustinmagic', href: '', iconSrc: './assets/icons/github.svg' },
    { name: 'Cart', href: '/cart', iconSrc: './assets/icons/cart.svg' },
  ];

  const landingBottomNavButtons = [
    { name: 'Browse', href: '/store', iconSrc: './assets/icons/browse.svg' },
    { name: 'Play Dice', href: '', iconSrc: './assets/icons/dice.svg' },
    { name: 'GitHub', href: '', iconSrc: './assets/icons/github2.svg' },
    { name: 'LinkedIn', href: '', iconSrc: './assets/icons/linkedin.svg' },
  ];

  const landingRightNavButtons = [
    { name: 'Game Page', href: '', iconSrc: './assets/icons/game.svg' },
    { name: '404 Page', href: '', iconSrc: './assets/icons/404.svg' },
    { name: 'Commit Log', href: '', iconSrc: './assets/icons/git-commit.svg' },
    {
      name: 'Performance',
      href: '',
      iconSrc: './assets/icons/performance.svg',
    },
    { name: 'Technologies', href: '', iconSrc: './assets/icons/tech.svg' },
    { name: 'Sources', href: '', iconSrc: './assets/icons/sources.svg' },
  ];

  return (
    <div className={styles.landing}>
      <video autoPlay muted loop playsInline className={styles.video}>
        <source
          src='./assets/death-knights-live-wallpaper.mp4'
          type='video/mp4'
        />
      </video>
      <Nav leftButtons={leftNavButtons} rightButtons={rightNavButtons} />
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
