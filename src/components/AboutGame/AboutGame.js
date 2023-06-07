import React from 'react';
import styles from './AboutGame.module.css';
import useIsOverflow from '../../utils/custom-hooks/useIsOverflow';
import { useTransition, animated } from '@react-spring/web';

const AboutGame = ({ game }) => {
  const [detailsVisible, setDetailsVisible] = React.useState(false);
  const ref = React.useRef();
  const isOverflow = useIsOverflow(ref);

  const transitionHide = useTransition(detailsVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const transitionMore = useTransition(!detailsVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className={styles['game-details']}>
      <div className={isOverflow ? styles['about-container'] : ''}>
        <div className={styles.about} ref={ref}>
          <h3>About</h3>
          <div className={styles.description}>{game.about}</div>
        </div>
      </div>
      <div className={styles['extra-details']}>
        {transitionMore((style, item) =>
          item ? (
            <animated.div
              onClick={() => {
                setDetailsVisible(true);
              }}
              className={`${styles['handle-more']} ${styles['more-button']}`}
              style={style}
            >
              More ▼
            </animated.div>
          ) : (
            ''
          )
        )}
        <div
          className={`${detailsVisible && styles['show-more']} ${styles.more}`}
        >
          <a className={styles.website} href={`${game.websiteUrl}`}>
            {game.name} Website
          </a>
          <div className={styles['extra-info']}>
            Released: {game.more.released}
          </div>
          <div className={styles['extra-info']}>
            Platforms: {game.more.platforms}
          </div>
          <div className={styles['extra-info']}>
            Main Genre: {game.more.mainGenre}
          </div>
          <div className={styles['extra-info']}>
            Developers: {game.more.developers}
          </div>
          <div className={styles['extra-info']}>
            Publishers: {game.more.publishers}
          </div>
        </div>
        {transitionHide((style, item) =>
          item ? (
            <animated.div
              className={styles['handle-more']}
              onClick={() => setDetailsVisible(false)}
              style={style}
            >
              Hide ▲
            </animated.div>
          ) : (
            ''
          )
        )}
      </div>
    </div>
  );
};

export default AboutGame;
