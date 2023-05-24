import React from 'react';
import Nav from '../Nav';
import StoreNav from './StoreNav';
import Footer from './Footer';
import styles from '../../styles/Store.module.css';

const Store = () => {
  const leftNavButtons = [
    { name: 'Game Store', href: '/', iconSrc: './assets/icons/game-store.svg' },
    { name: 'Search Bar', href: '', iconSrc: './assets/icons/search.svg' },
  ];

  const rightNavButtons = [
    { name: 'trustinmagic', href: '', iconSrc: './assets/icons/github.svg' },
    { name: 'Cart', href: '/cart', iconSrc: './assets/icons/cart.svg' },
  ];

  return (
    <div className={styles.store}>
      <Nav leftButtons={leftNavButtons} rightButtons={rightNavButtons} />
      <div className={styles.content}>
        <StoreNav />
        <div className={styles['mid-content']}></div>
      </div>
      <Footer/>
    </div>
  );
};

export default Store;
