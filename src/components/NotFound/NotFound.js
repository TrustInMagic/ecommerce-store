import React from 'react';
import styles from './NotFound.module.css';
import { useNavigate } from 'react-router';
import useComponentTransition from '../../utils/custom-hooks/useComponentTransition';
import { animated } from '@react-spring/web';

const NotFound = () => {
  const [progress, setProgress] = React.useState(false);
  const navigate = useNavigate();
  const { transition, setShowComponent } = useComponentTransition(
    { y: -500, opacity: 0.5 },
    { y: 0, opacity: 1 },
    { y: -300, opacity: 0.5}
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(true);
      setTimeout(() => setShowComponent(false), 3900)
      setTimeout(() => navigate('./store'), 4100);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={styles['error-page']}>
      {transition((style, item) =>
        item ? (
          <animated.div className={styles.error} style={style}>
            <img src='/assets/icons/404.png' alt='' />
            <div className={styles.text}>
              <h3>
                <span>/this-page</span> is not available!
              </h3>
              <div className={styles['error-text']}>
                The page you tried to access is not available. You will be
                redirected to our browse section shortly. If you think this is
                an error, <strong>contact us!</strong>
              </div>
            </div>
            <div
              className={`${styles.progress} ${
                progress ? styles['progress-on'] : ''
              }`}
            ></div>
          </animated.div>
        ) : (
          ''
        )
      )}
    </div>
  );
};

export default NotFound;
