import React from 'react';
import Nav from '../Nav';
import StoreNav from './StoreNav';
import Footer from './Footer';
import FilterNav from './FilterNav';
import GameCard from './GameCard';
import games from '../../data-structures/games';
import styles from '../../styles/Store.module.css';

const Store = () => {
  const [displayedGames, setDisplayedGames] = React.useState(games);
  const [filter, setFilter] = React.useState('none');

  const leftNavButtons = [
    { name: 'Game Store', href: '/', iconSrc: './assets/icons/game-store.svg' },
    { name: 'Search Bar', href: '', iconSrc: './assets/icons/search.svg' },
  ];

  const rightNavButtons = [
    { name: 'trustinmagic', href: '', iconSrc: './assets/icons/github.svg' },
    { name: 'Cart', href: '/cart', iconSrc: './assets/icons/cart.svg' },
  ];

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
      default:
        break;
    }
  };

  const clearFilter = () => {
    setDisplayedGames(games);
    setFilter('none');
  };

  const filterByWishlist = () => {
    const filteredGames = games.filter((game) => game.wishList === true);
    setDisplayedGames(filteredGames);
    setFilter('WishList');
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
            {displayedGames.map((game) => (
              <GameCard
                game={game}
                key={game.name}
                handleWishList={handleWishList}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
