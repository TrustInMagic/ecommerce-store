import React from 'react';
import styles from './Nav.module.css';
import CartSvg from '../../helper-components/CartSvg';
import { Link } from 'react-router-dom';
import useDelayedNavigation from '../../utils/custom-hooks/useDelayedNavigation';
import homeImg from '../../assets/icons/game-store.svg';
import storeImg from '../../assets/icons/browse-store.svg';
import searchImg from '../../assets/icons/search.svg';
import githubImg from '../../assets/icons/github.svg';

const Nav = ({
  target,
  handleSearch,
  handleQuery,
  query,
  openCart,
  cartContent,
  transition,
  setShowStore,
  setShowGameDetails,
}) => {
  const navigateWithDelay = useDelayedNavigation();

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <Link
          onClick={() => {
            setShowStore && setShowStore(false);
            setShowGameDetails && setShowGameDetails(false);
            navigateWithDelay('/', 200);
          }}
          className={`${styles.button} ${styles['home-button']}`}
        >
          <img src={homeImg} alt='' />
          <div className={styles['button-name']}>Home</div>
        </Link>
        {target === 'landing' ? (
          <Link
            className={styles.button}
            onClick={() => {
              transition();
              navigateWithDelay('/store', 2000);
            }}
          >
            <img src={storeImg} alt='' />
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
            <img src={searchImg} alt='' onClick={handleSearch} />
          </div>
        ) : null}
      </div>
      <div className={styles.right}>
        <a
          className={`${styles.button} ${styles['github-button']}`}
          href='https://github.com/TrustInMagic'
        >
          <img src={githubImg} alt='' />
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
