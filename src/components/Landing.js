import React from 'react';
import Nav from './Nav';
import styles from '../styles/Landing.module.css';

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

  return (
    <div className={styles.landing}>
      <Nav leftButtons={leftNavButtons} rightButtons={rightNavButtons} />
      <div className={styles.content}>
        <div className={styles['main-banner']}>
          <h1>Game Store</h1>
          <div className={styles.description}>
            The best destination to buy new games to competitive prices. 24 hour
            support, "best price" guarantee and a flawless UX. Wish for more?
            Tell us below — or check out our{' '}
            <span
              style={{ cursor: 'pointer', color: '#22d3ee', fontWeight: '700' }}
            >
              careers
            </span>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
