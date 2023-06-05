import React from 'react';
import styles from './AboutGame.module.css';

const AboutGame = ({ game }) => {
  const [detailsVisible, setDetailsVisible] = React.useState(false);

  return (
    <>
      <div className={styles.about}>
        <h3>About</h3>
        <div className={styles.description}>{game.about}</div>
      </div>
      <div className={styles.more}>
        {detailsVisible ? (
          <div />
        ) : (
          <div
            onClick={() => {
              setDetailsVisible(true);
            }}
            className={styles['handle-more']}
          >
            More ▼
          </div>
        )}
        <div
          className={detailsVisible ? styles['show-more'] : styles['hide-more']}
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
        {detailsVisible ? (
          <div
            className={styles['handle-more']}
            onClick={() => setDetailsVisible(false)}
          >
            Hide ▲
          </div>
        ) : null}
      </div>
    </>
  );
};

export default AboutGame;
