import React from 'react';
import Nav from '../Nav/Nav';
import StoreNav from '../StoreNav/StoreNav';
import Footer from '../Footer/Footer';
import FilterNav from '../FilterNav/FilterNav';
import games from '../../data-structures/games';
import GameList from '../GameList/GameList';
import styles from './Store.module.css';
import { useTransition, animated } from '@react-spring/web';

export const ShowStoreContext = React.createContext();

const Store = ({
  openCart,
  isCartVisible,
  addToCart,
  cartContent,
  closeCart,
  wishList,
  handleWishList,
}) => {
  const [displayedGames, setDisplayedGames] = React.useState(games);
  const [filter, setFilter] = React.useState('none');
  const [error, setError] = React.useState(null);
  const [display, setDisplay] = React.useState('grid');
  const [query, setQuery] = React.useState('');

  const useStoreTransition = () => {
    const [showStore, setShowStore] = React.useState(true);
    const transition = useTransition(showStore, {
      from: { x: -300, y: 0, opacity: 0.5 },
      enter: { x: 0, y: 0, opacity: 1 },
      leave: { x: 500, y: 0, opacity: 0.5 },
    });

    return { transition, setShowStore };
  };

  const filterBy = (filter) => {
    switch (filter) {
      case 'Wishlist':
        filterByWishlist();
        break;
      case 'Ratings':
        sortByRatings();
        break;
      case 'Reviews':
        sortByReviews();
        break;
      default:
        filterByGenre(filter);
    }
  };

  const filterByWishlist = () => {
    setDisplayedGames(wishList);
    setFilter('Wishlist');
  };

  const sortByRatings = () => {
    const sortedGames = [...games].sort((a, b) => b.rating - a.rating);
    setDisplayedGames(sortedGames);
    setFilter('Ratings');
  };

  const sortByReviews = () => {
    setFilter('Reviews');
    for (let game of games) {
      if (game.reviews) {
        const sortedGames = [...games].sort((a, b) => b.reviews - a.reviews);
        setDisplayedGames(sortedGames);
      } else {
        setDisplayedGames('no-reviews');
        setError({
          error: 'There are no reviews yet!',
          message: 'You can add some, soon.',
        });
      }
    }
  };

  const filterByGenre = (genre) => {
    const filteredGames = games.filter((game) => game.more.mainGenre === genre);
    setDisplayedGames(filteredGames);
    setFilter(genre);
  };

  const clearFilter = () => {
    setDisplayedGames(games);
    setFilter('none');
    setQuery('');
  };

  const changeDisplay = (display) => {
    setDisplay(display);
  };

  const handleSearch = () => {
    const searchedGames = [];
    for (let game of games) {
      if (game.name.toLocaleLowerCase().includes(query)) {
        searchedGames.push(game);
      }
    }

    setDisplayedGames(searchedGames);
  };

  const handleQuery = (message) => {
    if (message.length === 0) setDisplayedGames(games);
    setQuery(message);
  };

  const { transition, setShowStore } = useStoreTransition();

  return (
    <>
      {/* adding this overlay element to disable functionality of main section 
      when cart is visible; features close cart on click */}
      {isCartVisible ? (
        <div className='overlay' onClick={closeCart}></div>
      ) : null}
      <div className={styles['store-container']}>
        {transition((style, item) =>
          item ? (
            <animated.div
              className={`${isCartVisible ? styles.blur : ''}`}
              style={style}
            >
              <Nav
                handleSearch={handleSearch}
                handleQuery={handleQuery}
                query={query}
                openCart={openCart}
                cartContent={cartContent}
                target='store'
                setShowStore={setShowStore}
              />
              <div className={styles.content}>
                <StoreNav filterBy={filterBy} currentFilter={filter} />
                <div className={styles['mid-content']}>
                  <h2 className={styles.title}>Trending and interesting</h2>
                  <span>Based on player counts and ratings</span>
                  <FilterNav
                    filter={filter}
                    clearFilter={clearFilter}
                    changeDisplay={changeDisplay}
                    display={display}
                  />
                  <ShowStoreContext.Provider value={setShowStore}>
                    <GameList
                      games={displayedGames}
                      wishList={wishList}
                      handleWishList={handleWishList}
                      error={error}
                      display={display}
                      addToCart={addToCart}
                      cartContent={cartContent}
                    />
                  </ShowStoreContext.Provider>
                </div>
              </div>
              <Footer />
            </animated.div>
          ) : (
            ''
          )
        )}
      </div>
    </>
  );
};

export default Store;
