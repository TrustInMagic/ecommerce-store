import React from 'react';
import styles from './FilterError.module.css'

const FilterError = ({ error }) => {
  return (
    <div className={`${styles.error} filter-error`}>
      <h3>{error.error}</h3>
      <div>{error.message}</div>
    </div>
  );
};

export default FilterError;
