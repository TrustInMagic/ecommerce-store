import React from 'react';
import ArrowSvg from '../../helper-components/ArrowSvg';
import styles from './ImgSlider.module.css';

const ImgSlider = ({ game }) => {
  const [activeImgIdx, setActiveImgIdx] = React.useState(0);

  const displayNextImg = () => {
    setActiveImgIdx((prevIdx) => {
      if (prevIdx === game.imgUrl.length - 1) {
        return 0;
      } else return prevIdx + 1;
    });
  };

  const displayPrevImg = () => {
    setActiveImgIdx((prevIdx) => {
      if (prevIdx === 0) {
        return game.imgUrl.length - 1;
      } else return prevIdx - 1;
    });
  };

  React.useEffect(() => {
    const intervalId = setInterval(displayNextImg, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className={styles['img-slider']}>
      <div className={styles['img-container']}>
        {game.imgUrl.map((url, idx) => {
          const opacity = idx === activeImgIdx ? 1 : 0;
          return (
            <img
              src={require(`../../${url}`)}
              alt=''
              key={url}
              className={`${styles.img} ${styles[`img-${idx}`]}`}
              style={{ opacity: opacity }}
            />
          );
        })}
      </div>
      <div className={styles['arrow-nav']}>
        <div className={styles['previous']} onClick={displayPrevImg}>
          <ArrowSvg path='M659.2 917.333333l66.133333-66.133333L386.133333 512 725.333333 172.8 659.2 106.666667 256 512z' />
        </div>
        <div className={styles['next']} onClick={displayNextImg}>
          <ArrowSvg path='M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z' />
        </div>
      </div>
      <div className={styles['dot-nav']}>
        {game.imgUrl.map((url, idx) => {
          const activeDot = activeImgIdx === idx ? true : false;
          return (
            <div
              className={`${styles.dot} ${
                activeDot ? styles['dot-active'] : ''
              }`}
              key={url}
              onClick={() => setActiveImgIdx(idx)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImgSlider;
