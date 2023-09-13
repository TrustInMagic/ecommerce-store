import React from 'react';
import styles from './GameCard.module.css';
import CustomSvg from '../../helper-components/CustomSvg';
import { animated } from '@react-spring/web';
import useDelayedNavigation from '../../utils/custom-hooks/useDelayedNavigation';
import { ShowStoreContext } from '../Store/Store';
import useComponentTransition from '../../utils/custom-hooks/useComponentTransition';

const GameCard = ({ game, handleWishList, isLiked, addToCart, isInCart }) => {
  const navigateWithDelay = useDelayedNavigation();
  const { transition } = useComponentTransition(
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0 }
  );
  const setShowStore = React.useContext(ShowStoreContext);

  return transition((style, item) =>
    item ? (
      <animated.div
        className={styles.card}
        key={game.name}
        onClick={() => {
          setShowStore(false);
          navigateWithDelay(`/store/games/${game.name}`, 200);
        }}
        style={style}
      >
        <img src={require(`../../${game.imgUrl[0]}`)} alt='' />
        <div className={styles.content}>
          <div className={styles.buy}>
            {isInCart ? (
              <div className={styles.added}>Added ✓</div>
            ) : (
              <div
                className={styles.add}
                onClick={(e) => {
                  e.stopPropagation();
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
              e.stopPropagation();
              handleWishList(game);
            }}
          >
            <CustomSvg
              fill={isLiked ? 'red' : 'white'}
              path='M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z'
            />
          </div>
        </div>
      </animated.div>
    ) : (
      ''
    )
  );
};

export default GameCard;
