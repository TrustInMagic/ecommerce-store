import React from 'react';
import { useParams } from 'react-router';
import games from '../../data-structures/games';
import styles from './GameDetails.module.css';
import { Link } from 'react-router-dom';
import ArrowSvg from '../../helper-components/ArrowSvg';
import Nav from '../Nav/Nav';
import CustomSvg from '../../helper-components/CustomSvg';

const GameDetails = ({ openCart, addToCart, cartContent }) => {
  const { gameName } = useParams();
  let displayedGame = null;

  for (let game of games) {
    if (game.name === gameName) {
      displayedGame = game;
    }
  }

  return (
    <div className={styles['game-details']}>
      <Nav
        target='game-details'
        openCart={openCart}
        cartContent={cartContent}
      />
      <div className={styles.header}>
        <Link className={styles.back} to='/store'>
          ￩ Store
        </Link>
        <h1>{displayedGame.name}</h1>
      </div>
      <div className={styles.content}>
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
        <div className={styles.details}>
          <div className={styles.about}>
            <h3>About</h3>
            <div className={styles.description}>{displayedGame.about}</div>
          </div>
          <div className={styles['show-more']}>More ▼</div>
          <div className={styles.more}>
            <a className={styles.website} href={`${displayedGame.websiteUrl}`}>
              {displayedGame.name} Website
            </a>
            <div className={styles['extra-info']}>
              Released: {displayedGame.more.released}
            </div>
            <div className={styles['extra-info']}>
              Platforms: {displayedGame.more.platforms}
            </div>
            <div className={styles['extra-info']}>
              Main Genre: {displayedGame.more.mainGenre}
            </div>
            <div className={styles['extra-info']}>
              Developers: {displayedGame.more.developers}
            </div>
            <div className={styles['extra-info']}>
              Publishers: {displayedGame.more.publishers}
            </div>
          </div>

          <div className={styles['purchase-details']}>
            <div className={styles.price}>${displayedGame.price}</div>
            {/* <div
              className={styles['svg-container']}
              onClick={(e) => {
                e.preventDefault();
                handleWishList(game);
              }}
            >
              <CustomSvg
                fill={isLiked ? 'red' : 'white'}
                path='M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z'
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
