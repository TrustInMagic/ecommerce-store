import React from 'react';
import styles from './StoreNav.module.css';

const StoreNav = ({ filterBy, currentFilter }) => {
  const filters = [
    { name: 'Wishlist', iconSrc: './assets/icons/wishlist.svg' },
    { name: 'Ratings', iconSrc: './assets/icons/ratings.svg' },
    { name: 'Reviews', iconSrc: './assets/icons/reviews.svg' },
  ];

  const genres = [
    { name: 'Action', iconSrc: './assets/icons/action.svg' },
    { name: 'Strategy', iconSrc: './assets/icons/strategy.svg' },
    { name: 'RPG', iconSrc: './assets/icons/rpg.svg' },
    { name: 'Shooter', iconSrc: './assets/icons/shooter.svg' },
    { name: 'Adventure', iconSrc: './assets/icons/adventure.svg' },
    { name: 'Puzzle', iconSrc: './assets/icons/puzzle.svg' },
    { name: 'Racing', iconSrc: './assets/icons/racing.svg' },
    { name: 'Sports', iconSrc: './assets/icons/sports.svg' },
  ];

  

  return (
    <div className={styles.nav}>
      <h3>Filters</h3>
      <div className={styles.filters}>
        {filters.map((filter) => { 
          console.log(currentFilter, filter.name)
        return (
          <div
            style={
              currentFilter === filter.name
                ? { filter: 'invert(10)', transition: 'filter 0.3s' }
                : {}
            }
            className={styles.filter}
            key={filter.name}
            onClick={() => {
              filterBy(filter.name);
            }}
          >
            <img src={filter.iconSrc} alt='' />
            <div className={styles['filter-name']}>{filter.name}</div>
          </div>
        );
        })}
      </div>
      <h3>Genres</h3>
      <div className={styles.genres}>
        {genres.map((genre) => (
          <div className={styles.genre} key={genre.name}>
            <img src={genre.iconSrc} alt='' />
            <div className={styles['genre-name']}>{genre.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreNav;
