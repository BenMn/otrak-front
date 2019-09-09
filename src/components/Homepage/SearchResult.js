import React from 'react';
// import PropTypes from 'prop-types';
import {
  Grid,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';

import IconButtons from 'src/components/IconButtons';
import shows from 'src/data/shows';


import {
  HomePageCard,
  HomePageCardMedia,
  HomePageCardButton,
  HomePageCardDescription,

} from 'src/styles/materialUi/materialUiStyles/HomePage';

const SearchResult = () => {
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

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      {shuffleArray(shows).map((show) => (
        <Grid itemxs={3} key={show.title}>
          <HomePageCard key={show.title}>
            <Typography align="center">{show.release}</Typography>
            <CardActionArea>
              <HomePageCardMedia
                image={show.image}
                title={show.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {show.title}
                </Typography>
                <HomePageCardDescription variant="body2" color="textPrimary" component="p">
                  {show.description}
                </HomePageCardDescription>
              </CardContent>
            </CardActionArea>
            <HomePageCardButton>

              <IconButtons />

            </HomePageCardButton>
          </HomePageCard>
        </Grid>
      ))}
    </Grid>
  );
};

SearchResult.propTypes = {

};

export default SearchResult;
