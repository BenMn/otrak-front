import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CircularProgress
      value={progress}
      color="secondary"
      size={31}
      thickness={31}
    />
  );
};

export default Loader;
