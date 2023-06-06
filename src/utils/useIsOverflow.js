import React from 'react';

const useIsOverflow = (ref) => {
  const [isOverflow, setIsOverflow] = React.useState(undefined);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;
      setIsOverflow(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [ref]);

  return isOverflow;
};

export default useIsOverflow;
