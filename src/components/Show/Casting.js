/* eslint-disable react/jsx-props-no-spreading */
// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Slider library
import Slider from 'react-slick';

// Slider css style
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  CastingTitleNotAvailable,
  CastingGridWithoutSlider,
  CastingContainerWithoutSlider,
} from 'src/styles/materialUi/materialUiStyles/Show';

// Micro component managing arrow's style
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#212121',
        borderRadius: 25,
      }}
      onClick={onClick}
    />
  );
}
// Micro component managing arrow's style
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#212121',
        borderRadius: 25,
      }}
      onClick={onClick}
    />
  );
}

const Casting = ({ showDetail }) => {
  if (Object.keys(showDetail).length > 0) {
    // Setting of Slider component
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    // If condition who manage the display of slider.
    if (showDetail.cast.length <= 3) {
      return (
        <>
          {showDetail.cast.length > 0 ? (
            <>
              <CastingTitleCasting variant="h4" align="center" gutterBottom>Casting</CastingTitleCasting>
              <CastingContainerWithoutSlider>
                {showDetail.cast.map((currentActor) => (
                  <CastingGridWithoutSlider item key={currentActor.person.name}>
                    <HomePageCard>
                      <CardActionArea>
                        <HomePageCardMedia
                          image={currentActor.person.image === null ? '../../src/styles/assets/images/notAvailable/notAvailable.jpg' : currentActor.person.image.original}
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
                  </CastingGridWithoutSlider>
                ))}
              </CastingContainerWithoutSlider>
            </>
          ) :
            (
              <CastingTitleNotAvailable variant="h4" align="center">Casting is not available yet for this program</CastingTitleNotAvailable>
            )}
        </>
      );
    }

    // Else of If condition who manage the display of slider.
    return (
      <>
        {showDetail.cast.length > 0 ? (
          <>
            <CastingTitleCasting variant="h4" align="center" gutterBottom>Casting</CastingTitleCasting>
            {/* Slider Library */}
            <Slider {...settings}>

              {showDetail.cast.map((currentActor) => (
                <Grid item key={currentActor.person.name}>
                  <HomePageCard>
                    <CardActionArea>
                      <HomePageCardMedia
                        image={currentActor.person.image === null ? '../../src/styles/assets/images/notAvailable/notAvailable.jpg' : currentActor.person.image.original}
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
            </Slider>
          </>
        ) :
          (
            <CastingTitleNotAvailable variant="h4" align="center">Casting is not available yet for this program</CastingTitleNotAvailable>
          )}
      </>
    );
  }
  return (
    <div>Loading</div>
  );
};

Casting.propTypes = {
  showDetail: PropTypes.object.isRequired,
};

Casting.defaultProps = {

};

export default Casting;
