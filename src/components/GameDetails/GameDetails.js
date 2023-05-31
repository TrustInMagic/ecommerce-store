import React from 'react';
import { useParams } from 'react-router';
import games from '../../data-structures/games';
import styles from './GameDetails.module.css';
import { Link } from 'react-router-dom';
import ArrowSvg from '../../helper-components/ArrowSvg';
import Nav from '../Nav/Nav';
import CustomSvg from '../../helper-components/CustomSvg';

const GameDetails = ({
  openCart,
  addToCart,
  cartContent,
  wishList,
  handleWishList,
  isCartVisible,
  closeCart,
}) => {
  const { gameName } = useParams();
  const [detailsVisible, setDetailsVisible] = React.useState(false);

  const white = '#FFFFFF';
  const dirtyWhite = '#d1d1d1';
  const [leftArrowNavFill, setLeftArrowNavFill] = React.useState('#d1d1d1');
  const [rightArrowNavFill, setRightArrowNavFill] = React.useState('#d1d1d1');

  let displayedGame = null;

  for (let game of games) {
    if (game.name === gameName) {
      displayedGame = game;
    }
  }

  return (
    <>
      {/* adding this overlay element to disable functionality of main section 
      when cart is visible; features close cart on click */}
      {isCartVisible ? (
        <div className='overlay' onClick={closeCart}></div>
      ) : null}
      <div
        className={`${styles['game-details']} ${
          isCartVisible ? styles.blur : ''
        }`}
      >
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
              <div
                className={styles['previous']}
                onMouseEnter={() => setLeftArrowNavFill(white)}
                onMouseLeave={() => setLeftArrowNavFill(dirtyWhite)}
              >
                <ArrowSvg
                  fill={leftArrowNavFill}
                  path='M659.2 917.333333l66.133333-66.133333L386.133333 512 725.333333 172.8 659.2 106.666667 256 512z'
                />
              </div>
              <div
                className={styles['next']}
                onMouseEnter={() => setRightArrowNavFill(white)}
                onMouseLeave={() => setRightArrowNavFill(dirtyWhite)}
              >
                <ArrowSvg
                  fill={rightArrowNavFill}
                  path='M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z'
                />
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.about}>
              <h3>About</h3>
              <div className={styles.description}>{displayedGame.about}</div>
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
                className={
                  detailsVisible ? styles['show-more'] : styles['hide-more']
                }
              >
                <a
                  className={styles.website}
                  href={`${displayedGame.websiteUrl}`}
                >
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
              {detailsVisible ? (
                <div
                  className={styles['handle-more']}
                  onClick={() => setDetailsVisible(false)}
                >
                  Hide ▲
                </div>
              ) : null}
            </div>
            <div className={styles['purchase-details']}>
              <div className={styles.price}>${displayedGame.price}</div>
              <div
                className={styles['svg-container']}
                onClick={(e) => {
                  e.preventDefault();
                  handleWishList(displayedGame);
                }}
              >
                <CustomSvg
                  fill={
                    wishList.some(
                      (iteratedGame) => iteratedGame.name === displayedGame.name
                    )
                      ? 'red'
                      : 'white'
                  }
                  path='M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z'
                />
              </div>
              <div className={styles.buy}>
                {cartContent.some(
                  (iteratedGame) => iteratedGame.name === displayedGame.name
                ) ? (
                  <div className={styles.added}>Added ✓</div>
                ) : (
                  <div
                    className={styles.add}
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(displayedGame);
                    }}
                  >
                    Add to cart ➕
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
