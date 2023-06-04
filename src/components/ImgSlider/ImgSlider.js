import React from 'react';
import ArrowSvg from '../../helper-components/ArrowSvg';
import styles from './ImgSlider.module.css'

const ImgSlider = ({game}) => {
    const white = '#FFFFFF';
    const dirtyWhite = '#d1d1d1';
    const [leftArrowNavFill, setLeftArrowNavFill] = React.useState('#d1d1d1');
    const [rightArrowNavFill, setRightArrowNavFill] = React.useState('#d1d1d1');

  return (
    <div className={styles['img-slider']}>
      <div className={styles['img-container']}>
        {game.imgUrl.map((url, idx) => (
          <img
            src={`../.${url}`}
            alt=''
            key={url}
            className={`${styles.img} ${styles[`img-${idx}`]}`}
          />
        ))}
      </div>
      <div className={styles['arrow-nav']}>
        <div
          className={styles['previous']}
          onMouseEnter={() => setLeftArrowNavFill(white)}
          onMouseLeave={() => setLeftArrowNavFill(dirtyWhite)}
        >
          <ArrowSvg
            fill={leftArrowNavFill}
            path='M659.2 917.333333l66.133333-66.133333L386.133333 512 725.333333 172.8 659.2 106.666667 256 512z'
          />
        </div>
        <div
          className={styles['next']}
          onMouseEnter={() => setRightArrowNavFill(white)}
          onMouseLeave={() => setRightArrowNavFill(dirtyWhite)}
        >
          <ArrowSvg
            fill={rightArrowNavFill}
            path='M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z'
          />
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
