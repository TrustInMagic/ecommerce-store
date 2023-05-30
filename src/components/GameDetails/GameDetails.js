import React from 'react';
import { useParams } from 'react-router';
import games from '../../data-structures/games';
import styles from './GameDetails.module.css';
import { Link } from 'react-router-dom';
import ArrowSvg from '../../helper-components/ArrowSvg';

const GameDetails = () => {
  const { gameName } = useParams();
  let displayedGame = null;

  for (let game of games) {
    if (game.name === gameName) {
      displayedGame = game;
    }
  }

  return (
    <div className={styles['game-details']}>
      <div className={styles.header}>
        <Link className={styles.back} to='/store'>
          ￩ Store
        </Link>
        <h1>{displayedGame.name}</h1>
      </div>
      <div className={styles['img-slider']}>
        <div className={styles['img-container']}>
          {displayedGame.imgUrl.map((url, idx) => (
            <img
              src={`../.${url}`}
              alt=''
              key={url}
              className={`${styles.img} ${styles[`img-${idx}`]}`}
            />
          ))}
        </div>
        <div className={styles['arrow-nav']}>
          <ArrowSvg
            className={styles['previous']}
            fill='#d1d1d1'
            path='M659.2 917.333333l66.133333-66.133333L386.133333 512 725.333333 172.8 659.2 106.666667 256 512z'
          />
          <ArrowSvg
            className={styles['next']}
            fill='#d1d1d1'
            path='M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z'
          />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
