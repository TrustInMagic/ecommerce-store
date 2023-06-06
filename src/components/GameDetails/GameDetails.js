import React from 'react';
import { useParams } from 'react-router';
import games from '../../data-structures/games';
import styles from './GameDetails.module.css';
import PurchaseDetails from '../PurchaseDetails/PurchaseDetails';
import ImgSlider from '../ImgSlider/ImgSlider';
import AboutGame from '../AboutGame/AboutGame';
import useComponentTransition from '../../utils/useComponentTransition';
import { animated } from '@react-spring/web';
import useDelayedNavigation from '../../utils/useDelayedNavigation';
import Nav from '../Nav/Nav';

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
  const navigateWidthDelay = useDelayedNavigation();
  const { transition, setShowComponent } = useComponentTransition(
    {
      x: -300,
      y: 0,
    },
    { x: 0, y: 0},
    { x: 500, y: 0}
  );

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
      {transition((style, item) =>
        item ? (
          <div className={styles['game-details-container']}>
            <animated.div
              className={`${styles['game-details']} ${
                isCartVisible ? styles.blur : ''
              }`}
              style={style}
            >
              <Nav
                target='game-details'
                openCart={openCart}
                cartContent={cartContent}
                setShowGameDetails={setShowComponent}
              />
              <div className={styles.header}>
                <div
                  className={styles.back}
                  onClick={() => {
                    setShowComponent(false);
                    navigateWidthDelay('/store', 200);
                  }}
                >
                  ￩ Store
                </div>
                <h1>{displayedGame.name}</h1>
              </div>
              <div className={styles.content}>
                <ImgSlider game={displayedGame} />
                <div className={styles['right-section']}>
                  <AboutGame game={displayedGame} />
                  <PurchaseDetails
                    game={displayedGame}
                    addToCart={addToCart}
                    wishList={wishList}
                    handleWishList={handleWishList}
                    isAddedToCart={cartContent.some(
                      (iteratedGame) => iteratedGame.name === displayedGame.name
                    )}
                  />
                </div>
              </div>
            </animated.div>
          </div>
        ) : (
          ''
        )
      )}
    </>
  );
};

export default GameDetails;
