import React from 'react';
import { useParams } from 'react-router';
import games from '../../data-structures/games';
import styles from './GameDetails.module.css';
import { Link } from 'react-router-dom';
import PurchaseDetails from '../PurchaseDetails/PurchaseDetails';
import ImgSlider from '../ImgSlider/ImgSlider';
import AboutGame from '../AboutGame/AboutGame';
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
          <ImgSlider game={displayedGame} />
          <div className={styles['right-section']}>
            <AboutGame game={displayedGame} />
            <PurchaseDetails
              game={displayedGame}
              addToCart={addToCart}
              wishList={wishList}
              handleWishList={handleWishList}
              cartContent={cartContent}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
