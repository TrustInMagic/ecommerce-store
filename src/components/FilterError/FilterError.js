import React from 'react';
import styles from './FilterError.module.css'

const FilterError = ({ error }) => {
  return (
    <div className={styles.error}>
      <h3>{error[0]}</h3>
      <div>{error[1]}</div>
    </div>
  );
};

export default FilterError;
