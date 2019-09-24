/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */

// Import NPM
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {
  Grid,
  CardActionArea,
} from '@material-ui/core';

// Material UI Custom Components
import {
  HomePageCard,
  HomePageCardMedia,
  HomePageCardTitle,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

// Local Import
import Icons from 'src/components/Dashboard/Tabs/DashboardIcons';

// CSS Local Styling
import 'react-id-swiper/lib/styles/scss/swiper.scss'; // scss
import 'react-id-swiper/lib/styles/css/swiper.css'; // css


const Cards = ({ filtredArray }) => (
  <Grid
    container
    justify="center"
  >
    {filtredArray.map((show) => (
      <Grid
        item
        // Custom unique key generator
        key={`${Math.random(999)} ${show.tvShow.name}`}
        xl={2}
        lg={3}
        md={4}
        sm={6}
        xs={12}
      >
        <HomePageCard id="currentCard">
          <CardActionArea>
            {/* Show Poster */}
            <HomePageCardMedia
              image={show.tvShow.poster}
              title={show.tvShow.name}
            >
              <Grid
                container
                justify="flex-end"
              >
                {/* fast Navigation icons */}
                <Icons showId={show.tvShow.id} />
              </Grid>

              <AiredTitleCardAndSubtitle
                container
                direction="row"
                justify="flex-end"
              >
                {/* Show Title */}
                <HomePageCardTitle variant="h5" component="h2">
                  {show.tvShow.name}
                </HomePageCardTitle>

                {/* Show Genre */}
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
  filtredArray: PropTypes.array,
};

Cards.defaultProps = {
  filtredArray: [],
};


export default Cards;
