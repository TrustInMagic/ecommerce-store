import React from 'react';
import Nav from '../Nav/Nav';
import styles from './Landing.module.css';
import LandingNav from '../LandingNav/LandingNav';
import {
  landingRightNavButtons,
  landingBottomNavButtons,
} from './landing.config';
import backgroundVideo from '../../assets/death-knights-live-wallpaper-compressed.mp4';

const Landing = ({
  openCart,
  isCartVisible,
  cartContent,
  closeCart,
  transition,
}) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const videoPromise = new Promise((resolve, reject) => {
        const element = document.createElement('video');
        element.src = backgroundVideo;
        element.oncanplaythrough = resolve;
        element.onload = resolve;
        element.onerror = reject;
      });

      videoPromise
        .then((data) => {
          setLoading(false);
        })
        .catch((err) => console.error(err));
    })();
  }, []);

  return (
    <>
      {/* adding this overlay element to disable functionality of main section 
      when cart is visible; features close cart on click */}
      {isCartVisible ? (
        <div className='overlay' onClick={closeCart}></div>
      ) : null}
      <div className={`${styles.landing} ${isCartVisible ? styles.blur : ''}`}>
        <video autoPlay muted loop playsInline className={styles.background}>
          <source src={backgroundVideo} type='video/mp4' />
        </video>
        {loading && <div className={styles.background}></div>}
        <Nav
          openCart={openCart}
          cartContent={cartContent}
          target='landing'
          transition={transition}
        />
        <div className={styles.content}>
          <div className={styles['main-banner']}>
            <h1>Game Store</h1>
            <div className={styles.description}>
              The best destination to buy new games to competitive prices. 24
              hour support, best price guarantee and a flawless UX. Wish for
              more? Tell us below — or check out our{' '}
              <span
                style={{
                  cursor: 'pointer',
                  color: '#22d3ee',
                  fontWeight: '700',
                }}
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
    </>
  );
};

export default Landing;
