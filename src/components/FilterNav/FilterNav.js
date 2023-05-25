import React from 'react';
import CustomSvg from '../../helper-components/CustomSvg';
import styles from './FilterNav.module.css';

const FilterNav = ({ filter, clearFilter }) => {
  const gray = '#71717a';

  return (
    <div className={styles.nav}>
      <div className={styles['left-nav']}>
        <button>
          Filter by: <span style={{ fontWeight: '900' }}>{filter}</span>
        </button>
        <button style={{ fontWeight: '900' }} onClick={clearFilter}>
          Clear Filter
        </button>
      </div>
      <div className={styles['right-nav']}>
        <span style={{ color: gray }}>Display options:</span>
        <CustomSvg
          fill={gray}
          path='M20,13 L16,13 L16,20 L20,20 L20,13 Z M20,11 L20,4 L16,4 L16,11 L20,11 Z M4,13 L4,20 L8,20 L8,13 L4,13 Z M4,11 L8,11 L8,4 L4,4 L4,11 Z M14,11 L14,4 L10,4 L10,11 L14,11 Z M14,13 L10,13 L10,20 L14,20 L14,13 Z M22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 Z'
        />
        <CustomSvg
          stroke={gray}
          strokeWidth={2}
          path='M3 9H21M3 15H21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z'
        />
      </div>
    </div>
  );
};

export default FilterNav;
