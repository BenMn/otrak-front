/* eslint-disable react/jsx-props-no-spreading */
// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Swiper library
import Swiper from 'react-id-swiper';

// Import material UI components
import {
  Grid,
  CardActionArea,
} from '@material-ui/core';

//  Material UI custom Components
import {
  HomePageCard,
  HomePageCardMedia,
  AiredTitleCardAndSubtitle,
  AiredSubtitleSeasonEpisode,
  HomePageCardTitle,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

import {
  CastingTitleCasting,
} from 'src/styles/materialUi/materialUiStyles/Show';


const Casting = ({ showDetail }) => {
  // Params of slider
  const params = {
    lazy: true,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 10,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1050: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      690: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };


  return (
    <>
      <CastingTitleCasting variant="h4" align="center" gutterBottom>Casting</CastingTitleCasting>
      <Swiper {...params}>

        {showDetail.cast.map((currentActor) => (

          <Grid item key={currentActor.person.name}>
            <HomePageCard>
              <CardActionArea>

                <HomePageCardMedia
                  image={currentActor.person.image.original}
                  title={currentActor.person.name}
                >
                  <Grid
                    container
                    justify="flex-end"
                  />
                  <AiredTitleCardAndSubtitle
                    container
                    direction="row"
                    justify="flex-end"
                  >
                    <HomePageCardTitle variant="h5" component="h2">
                      {currentActor.person.name}
                    </HomePageCardTitle>

                    <AiredSubtitleSeasonEpisode>
                      {currentActor.character.name}
                    </AiredSubtitleSeasonEpisode>
                  </AiredTitleCardAndSubtitle>

                </HomePageCardMedia>

              </CardActionArea>
            </HomePageCard>
          </Grid>
        ))}
      </Swiper>
    </>
  );
};

Casting.propTypes = {
  showDetail: PropTypes.object.isRequired,
};

Casting.defaultProps = {

};

export default Casting;
