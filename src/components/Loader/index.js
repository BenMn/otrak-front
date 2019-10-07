// Import NPM
import React from 'react';

// Material UI Styling Method
import { makeStyles } from '@material-ui/core/styles';

// Material UI Component
import { CircularProgress, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

// Default Loader : Red (secondary)
const Loader = () => {
  const classes = useStyles();
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
    <Grid container justify="center">
      <CircularProgress
        className={classes.progress}
        value={progress}
        color="secondary"
        size={61}
        thickness={31}
      />
    </Grid>
  );
};

export default Loader;
