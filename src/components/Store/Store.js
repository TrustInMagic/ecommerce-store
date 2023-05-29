import React from 'react';
import Nav from '../Nav/Nav';
import StoreNav from '../StoreNav/StoreNav';
import Footer from '../Footer/Footer';
import FilterNav from '../FilterNav/FilterNav';
import GameCard from '../GameCard/GameCard';
import games from '../../data-structures/games';
import FilterError from '../FilterError/FilterError';
import { rightNavButtons, leftNavButtons } from './store.config';
import styles from './Store.module.css';

const Store = () => {
  const [displayedGames, setDisplayedGames] = React.useState(games);
  const [filter, setFilter] = React.useState('none');
  const [error, setError] = React.useState(null);
  const [display, setDisplay] = React.useState('grid');
  const [query, setQuery] = React.useState('');
  const [wishList, setWishList] = React.useState([]);

  const handleWishList = (clickedGame) => {
    setWishList((prevWishList) => {
      if (
        prevWishList.some(
          (iteratedGame) => iteratedGame.name === clickedGame.name
        )
      ) {
        return prevWishList.filter((game) => game.name !== clickedGame.name);
      } else {
        return [clickedGame, ...prevWishList];
      }
    });
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

  return (
    <div className={styles.store}>
      <Nav
        leftButtons={leftNavButtons}
        rightButtons={rightNavButtons}
        handleSearch={handleSearch}
        handleQuery={handleQuery}
        query={query}
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
          <div
            className={
              display === 'grid'
                ? styles['grid-collection']
                : styles['row-collection']
            }
          >
            {typeof displayedGames === 'object' ? (
              displayedGames.map((game) => (
                <GameCard
                  game={game}
                  key={game.name}
                  handleWishList={handleWishList}
                  isLiked={wishList.some(
                    (iteratedGame) => iteratedGame.name === game.name
                  )}
                />
              ))
            ) : (
              <FilterError error={error} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
