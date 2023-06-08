import React from 'react';
import CustomSvg from '../../helper-components/CustomSvg';
import styles from './FilterNav.module.css';

const FilterNav = ({ filter, clearFilter, changeDisplay, display }) => {
  const gray = '#71717a';
  const white = '#fff';

  return (
    <div className={styles.nav}>
      <div className={styles['left-nav']}>
        <button>
          Filter by:{' '}
          <span className={styles.filter} data-testid='filter-span'>
            {filter}
          </span>
        </button>
        <button style={{ fontWeight: '900' }} onClick={clearFilter}>
          Clear Filter
        </button>
      </div>
      <div className={styles['right-nav']}>
        <span className={styles['display-options']}>Display options:</span>
        <div onClick={() => changeDisplay('grid')}>
          <CustomSvg
            fill={display === 'grid' ? white : gray}
            path='M20,13 L16,13 L16,20 L20,20 L20,13 Z M20,11 L20,4 L16,4 L16,11 L20,11 Z M4,13 L4,20 L8,20 L8,13 L4,13 Z M4,11 L8,11 L8,4 L4,4 L4,11 Z M14,11 L14,4 L10,4 L10,11 L14,11 Z M14,13 L10,13 L10,20 L14,20 L14,13 Z M22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 Z'
          />
        </div>
        <div onClick={() => changeDisplay('collection')}>
          <CustomSvg
            fill={display === 'collection' ? white : gray}
            path='M20,8 L20,4 L4,4 L4,8 L20,8 Z M20,16 L4,16 L4,20 L20,20 L20,16 Z M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,10 L4,14 L20,14 L20,10 L4,10 Z'
          />
        </div>
      </div>
    </div>
  );
};

export default FilterNav;
