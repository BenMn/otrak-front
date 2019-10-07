// Import NPM
import React from 'react';

// Material UI Styling Method
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
import { CircularProgress, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

// Dark Loader
const PrimaryLoader = () => {
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
    <Grid container justify="center" alignItems="center" style={{ height: '50vh' }}>
      <CircularProgress
        className={classes.progress}
        value={progress}
        color="primary"
        size={61}
        thickness={31}
      />
    </Grid>
  );
};

export default PrimaryLoader;
