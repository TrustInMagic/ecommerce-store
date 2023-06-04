import React from 'react';
import styles from './Nav.module.css';
import CartSvg from '../../helper-components/CartSvg';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({
  target,
  handleSearch,
  handleQuery,
  query,
  openCart,
  cartContent,
  transition,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <Link to='/' className={`${styles.button} ${styles['home-button']}`}>
          <img
            src={`${
              target === 'game-details' ? '../' : ''
            }../assets/icons/game-store.svg`}
            alt=''
          />
          <div className={styles['button-name']}>Home</div>
        </Link>
        {target === 'landing' ? (
          <Link
            className={styles.button}
            onClick={() => {
              transition();
              setTimeout(() => {
                navigate('/store');
              }, 2000);
            }}
          >
            <img src='./assets/icons/browse-store.svg' alt='' />
            <div className={styles['button-name']}>Store</div>
          </Link>
        ) : target === 'store' ? (
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
        ) : null}
      </div>
      <div className={styles.right}>
        <a
          className={`${styles.button} ${styles['github-button']}`}
          href='https://github.com/TrustInMagic'
        >
          <img
            src={`${
              target === 'game-details' ? '../' : ''
            }../assets/icons/github.svg`}
            alt=''
          />
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

export default Nav;
