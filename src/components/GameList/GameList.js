import React from 'react';
import GameCard from '../GameCard/GameCard';
import FilterError from '../FilterError/FilterError';
import styles from './GameList.module.css';

const GameList = ({
  games,
  wishList,
  handleWishList,
  error,
  display,
  addToCart,
  cartContent,
}) => {
  const [toggleAnimation, setToggleAnimation] = React.useState(false);

  const handleAnimation = () => {
    setToggleAnimation(!toggleAnimation)
  }

  return (
    <div
      className={
        typeof games === 'object'
          ? display === 'grid'
            ? styles['grid-collection']
            : styles['row-collection']
          : styles['row-collection']
      }
    >
      {typeof games === 'object' ? (
        games.map((game) => (
          <GameCard
            game={game}
            key={game.name}
            handleWishList={handleWishList}
            isLiked={wishList.some(
              (iteratedGame) => iteratedGame.name === game.name
            )}
            addToCart={addToCart}
            cartContent={cartContent}
            isInCart={cartContent.some(
              (iteratedGame) => iteratedGame.name === game.name
            )}
            handleAnimation={handleAnimation}
            toggleAnimation={toggleAnimation}
          />
        ))
      ) : (
        <FilterError error={error} />
      )}
    </div>
  );
};

export default GameList;
