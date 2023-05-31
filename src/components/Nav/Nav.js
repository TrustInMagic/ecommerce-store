import React from 'react';
import styles from './Nav.module.css';
import CartSvg from '../../helper-components/CartSvg';
import { Link } from 'react-router-dom';

const Nav = ({
  isForLanding,
  handleSearch,
  handleQuery,
  query,
  openCart,
  cartContent,
}) => {
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <Link to='/' className={styles.button}>
          <img src='./assets/icons/game-store.svg' alt='' />
          <div className={styles['button-name']}>Game Store</div>
        </Link>
        {isForLanding ? (
          <Link to='/store' className={styles.button}>
            <img src='./assets/icons/browse-store.svg' alt='' />
            <div className={styles['button-name']}>Browse Store</div>
          </Link>
        ) : (
          <div className={styles.search}>
            <input
              value={query}
              type='search'
              placeholder='Search Games...'
              onChange={(e) => handleQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch();
              }}
            />
            <img
              src='./assets/icons/search.svg'
              alt=''
              onClick={handleSearch}
            />
          </div>
        )}
      </div>
      <div className={styles.right}>
        <a className={styles.button} href='https://github.com/TrustInMagic'>
          <img src='./assets/icons/github.svg' alt='' />
          <div className={styles['button-name']}>trustinmagic</div>
        </a>
        <div className={styles.button} onClick={openCart}>
          <CartSvg full={cartContent.length > 0 ? true : false} />
          <div className={styles['button-name']}>
            Cart: {cartContent.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav
