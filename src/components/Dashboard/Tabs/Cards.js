/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Local Import
import Icons from 'src/containers/Icons';

// scss
import 'react-id-swiper/lib/styles/scss/swiper.scss';
// css
import 'react-id-swiper/lib/styles/css/swiper.css';

// import PropTypes from 'prop-types';
import {
  Grid,
  CardActionArea,
} from '@material-ui/core';

import {
  HomePageCard,
  HomePageCardMedia,
  HomePageCardTitle,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

const Cards = ({ userFollowings }) => (
  <Grid
    container
    justify="center"
  >
    {userFollowings.map((show) => (
      <Grid item key={`${Math.random(99999)} ${show.tvShow.name} ${new Date().getTime()}`} xl={2} lg={3} md={4} sm={6} xs={12}>
        <HomePageCard id="currentCard">
          <CardActionArea>
            <HomePageCardMedia
              image={show.tvShow.poster}
              title={show.tvShow.name}
            >
              <Grid
                container
                justify="flex-end"
              >
                <Icons showId={show.tvShow.id} />
              </Grid>

              <AiredTitleCardAndSubtitle
                container
                direction="row"
                justify="flex-end"
              >
                <HomePageCardTitle variant="h5" component="h2">
                  {show.tvShow.name}
                </HomePageCardTitle>
                {show.tvShow.genre.length}
                <AiredSubtitleSeasonEpisode>
                  {show.tvShow.genre.map((genre) => (
                    <Fragment key={genre.name}>
                      {genre.name}
                      &nbsp;
                    </Fragment>
                  ))}
                </AiredSubtitleSeasonEpisode>
              </AiredTitleCardAndSubtitle>
            </HomePageCardMedia>
          </CardActionArea>
        </HomePageCard>
      </Grid>
    ))}
  </Grid>
);


Cards.propTypes = {
  userFollowings: PropTypes.array,
};

Cards.defaultProps = {
  userFollowings: [],
};


export default Cards;
