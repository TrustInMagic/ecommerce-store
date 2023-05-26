import React from 'react';
import styles from './GameCard.module.css';
import CustomSvg from '../../helper-components/CustomSvg';

const GameCard = ({ game, handleWishList, wishList }) => {
  return (
    <div className={styles.card} key={game.name}>
      <img src={game.imgUrl[0]} alt='' />
      <div className={styles.content}>
        <div className={styles.buy}>
          <div className={styles.add}>Add to cart ➕</div>
          <div className={styles.price}>{game.price}</div>
        </div>
        <h3>{game.name}</h3>
        <div
          className={styles['svg-container']}
          onClick={() => handleWishList(game)}
        >
          <CustomSvg
            fill={
              wishList.some((iteratedGame) => iteratedGame.name === game.name)
                ? 'red'
                : 'white'
            }
            path='M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z'
          />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
