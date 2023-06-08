import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.title}>
        <img src='assets/icons/game-store.svg' alt='' />
        <div>Game Store</div>
      </div>
      <div className={styles['top-part']}>
        <div className={styles.links}>
          <div>Company</div>
          <span>About</span>
          <span>Press Center</span>
          <span>Careers</span>
        </div>
        <div className={styles.links}>
          <div>Consoles</div>
          <span>Playstation 5</span>
          <span>Xbox One</span>
          <span>Switch</span>
        </div>
        <div className={styles.links}>
          <div>Resources</div>
          <span>Help Center</span>
          <span>Contact</span>
        </div>
        <div className={styles.links}>
          <div>Product Help</div>
          <span>Support</span>
          <span>File a Bug</span>
        </div>
      </div>
      <div className={styles['mid-part']}>
        <span>
          This page was built by{' '}
          <a href='https://www.linkedin.com/in/tim-ionescu-650a78110/'>
            trustinmagic
          </a>
          .<br></br>
          Design inspired by <u>Rawg, Rawg.io</u>. This page was built solely
          for educational purposes.
        </span>
        <div className={styles['download-app']}>
          <img
            className={styles.apple}
            src='assets/buttons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
            alt=''
          />
          <img
            className={styles.google}
            src='assets/buttons/google-play-badge.png'
            alt=''
          />
        </div>
      </div>
      <div className={styles['bottom-part']}>
        <div className={styles['bottom-links']}>
          <u>Privacy</u>
          <u>Security</u>
          <u>Cookies</u>
          <u>Legal</u>
          <u>Guidelines</u>
        </div>
        <div className={styles.social}>
          <img src='assets/icons/twitter.svg' alt='' />
          <img src='assets/icons/instagram.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
