/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import IconButtons from 'src/components/IconButtons';
import './Tabs.scss';
import shows from 'src/data/shows';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.dark,
  },
  card: {
    maxWidth: 340,
    margin: theme.spacing(2),
  },
  media: {
    height: 300,
  },
  Button: {
    justifyContent: 'center',
    height: 50,
  },
  Span: {
    borderBottom: '10px solid white',
  },
  p: {
    textAlign: 'center',
    padding: 3,
    fontStyle: 'italic',
  },
  IconButtons: {
    alignItem: 'flex-end',
  },
  description: {
    height: 150,
  },
}));

const shuffleArray = (array) => {
  let i = array.length - 1;
  // eslint-disable-next-line no-plusplus
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default function Tab() {
  const classes = useStyles();


  return (
    <>
      {shuffleArray(shows).map((show) => (
        <Card key={show.title} className={classes.card}>
          <p className={classes.p}>{show.release}</p>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={show.image}
              title={show.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {show.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                {show.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.Button}>

            <IconButtons className={classes.IconButtons} />

          </CardActions>
        </Card>
      ))}

    </>
  );
}