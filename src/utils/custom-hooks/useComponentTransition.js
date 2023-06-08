import React from 'react';
import { useTransition } from '@react-spring/web';

const useComponentTransition = (from, enter, leave) => {
  const [showComponent, setShowComponent] = React.useState(true);
  const transition = useTransition(showComponent, {
    from: from,
    enter: enter,
    leave: leave,
  });

  return { transition, setShowComponent };
};

export default useComponentTransition;
