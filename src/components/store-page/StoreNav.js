import React from 'react';
import styles from '../../styles/StoreNav.module.css';

const StoreNav = () => {
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
        {filters.map((filter) => (
          <div className={styles.filter} key={filter.name}>
            <img src={filter.iconSrc} alt='' />
            <div className={styles['filter-name']}>{filter.name}</div>
          </div>
        ))}
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
