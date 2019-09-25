/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */

// Import NPM
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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


const Cards = ({ filtredArray, getDetailShow, stopFollowingShow }) => (
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

          {/* Show Poster */}
          <HomePageCardMedia
            image={show.tvShow.poster}
          >
            <Grid
              container
              justify="flex-end"
            >
              {/* fast Navigation icons */}
              <Icons
                showId={show.tvShow.id}
                showIdFollowings={show.id}
                stopFollowingShow={stopFollowingShow}
              />
            </Grid>

            {/* Manque l'id dans les data pour rediriger vers la bonne URL */}
            <CardActionArea onClick={() => getDetailShow(show.tvShow.id)}>
              <AiredTitleCardAndSubtitle
                container
                direction="row"
                justify="center"
              >
                {/* Show Title */}
                <NavLink exact to={`/show/${show.tvShow.name}`}>
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
                </NavLink>

              </AiredTitleCardAndSubtitle>
            </CardActionArea>

          </HomePageCardMedia>
        </HomePageCard>
      </Grid>
    ))}
  </Grid>
);


Cards.propTypes = {
  filtredArray: PropTypes.array,
  getDetailShow: PropTypes.func.isRequired,
  stopFollowingShow: PropTypes.func.isRequired,
};

Cards.defaultProps = {
  filtredArray: [],
};


export default Cards;
