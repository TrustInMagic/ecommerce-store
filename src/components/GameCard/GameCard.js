import React from 'react';
import styles from './GameCard.module.css';
import CustomSvg from '../../helper-components/CustomSvg';
import { Link } from 'react-router-dom';

const GameCard = ({
  game,
  handleWishList,
  isLiked,
  addToCart,
  isInCart,
  handleAnimation,
  toggleAnimation,
}) => {
  const [animation, setAnimation] = React.useState(0);

  React.useEffect(() => {
    const renderAnimations = () => {
      return toggleAnimation ? setAnimation(1) : setAnimation(0);
    };

    renderAnimations();
  }, [toggleAnimation]);

  return (
    <Link
      className={styles.card}
      key={game.name}
      to={`/store/games/${game.name}`}
    >
      <img src={game.imgUrl[0]} alt='' />
      <div className={styles.content}>
        <div className={styles.buy}>
          {isInCart ? (
            <div className={styles.added}>Added ✓</div>
          ) : (
            <div
              className={styles.add}
              onClick={(e) => {
                e.preventDefault();
                addToCart(game);
              }}
            >
              Add to cart ➕
            </div>
          )}

          <div className={styles.price}>${game.price}</div>
        </div>
        <h3>{game.name}</h3>
        <div
          className={styles['svg-container']}
          onClick={(e) => {
            e.preventDefault();
            handleAnimation();
            handleWishList(game);
          }}
          animation={animation}
        >
          <CustomSvg
            fill={isLiked ? 'red' : 'white'}
            path='M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z'
          />
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
