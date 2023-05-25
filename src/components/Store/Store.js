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
  // first element of the error var will always be the main error message
  // subsequent elements will represent notes or additional messages.
  const [error, setError] = React.useState(null);

  const handleWishList = (gameName, action) => {
    for (let game of games) {
      if (game.name === gameName) {
        action === 'add' ? (game.wishList = true) : (game.wishList = false);
      }
    }
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
    const filteredGames = games.filter((game) => game.wishList === true);
    setDisplayedGames(filteredGames);
    setFilter('Wishlist');
  };

  const sortByRatings = () => {
    const sortedGames = [...games].sort((a, b) => b.rating - a.rating);
    setDisplayedGames(sortedGames);
    setFilter('Ratings');
  };

  const sortByReviews = () => {
    setFilter('Reviews');
    for (let game of displayedGames) {
      if (game.reviews) {
        const sortedGames = [...games].sort((a, b) => b.reviews - a.reviews);
        setDisplayedGames(sortedGames);
      } else {
        setDisplayedGames('no-reviews');
        setError(['There are no reviews yet!', 'You can add some, soon.']);
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
  };

  return (
    <div className={styles.store}>
      <Nav leftButtons={leftNavButtons} rightButtons={rightNavButtons} />
      <div className={styles.content}>
        <StoreNav filterBy={filterBy} currentFilter={filter} />
        <div className={styles['mid-content']}>
          <h2 className={styles.title}>Trending and interesting</h2>
          <span>Based on player counts and ratings</span>
          <FilterNav filter={filter} clearFilter={clearFilter} />
          <div className={styles.collection}>
            {typeof displayedGames === 'object' ? (
              displayedGames.map((game) => (
                <GameCard
                  game={game}
                  key={game.name}
                  handleWishList={handleWishList}
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
