import React from 'react';
import { filters, genres } from './store-nav.config';
import styles from './StoreNav.module.css';

const StoreNav = ({ filterBy, currentFilter }) => {
  return (
    <div className={styles.nav}>
      <h3>Filters</h3>
      <div className={styles.filters}>
        {filters.map((filter) => {
          return (
            <div
              className={styles.filter}
              key={filter.name}
              onClick={() => {
                filterBy(filter.name);
              }}
            >
              <img
                src={filter.iconSrc}
                alt=''
                style={
                  currentFilter === filter.name
                    ? { filter: 'invert(10)', transition: 'filter 0.3s' }
                    : {}
                }
              />
              <div className={styles['filter-name']}>{filter.name}</div>
            </div>
          );
        })}
      </div>
      <h3>Genres</h3>
      <div className={styles.genres}>
        {genres.map((genre) => (
          <div
            className={styles.genre}
            key={genre.name}
            onClick={() => {
              filterBy(genre.name);
            }}
          >
            <img
              src={genre.iconSrc}
              alt=''
              style={
                currentFilter === genre.name
                  ? { filter: 'invert(10)', transition: 'filter 0.3s' }
                  : {}
              }
            />
            <div className={styles['genre-name']}>{genre.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreNav;
