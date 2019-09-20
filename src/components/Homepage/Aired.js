/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Loader from 'src/components/Loader';
import Icons from 'src/containers/Icons';

// Slider library
import Slider from 'react-slick';

// Slider css style
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Material UI components
import {
  Typography,
  Grid,
  CardActionArea,
  Container,
} from '@material-ui/core';

// import Material UI custom components
import {
  AiredIconTitle,
  HomePageCard,
  HomePageCardMedia,
  HomePageCardTitle,
  AiredBlockTitleSeeAll,
  AiredSeeAllIcon,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
  HomePageGridOfOnCard,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

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

const Aired = ({ trendingList, getDetailShow, userFollowings }) => {
  // Setting of Slider component
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <AiredBlockTitleSeeAll
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h3" component="p" className="title-icon-next-aired"><AiredIconTitle /> Just Aired</Typography>
        <Typography variant="h6"><a href="." className="see-all-next-aired"> See all<AiredSeeAllIcon /></a></Typography>
      </AiredBlockTitleSeeAll>

      <Container>

        {trendingList.length !== 0 ? (
          <Slider {...settings}>

            {trendingList.map((currentShow) => (

              <HomePageGridOfOnCard item key={currentShow.id_tvmaze}>

                <HomePageCard id="currentCard">

                  <HomePageCardMedia
                    image={currentShow.poster}
                  >

                    <Grid
                      container
                      justify="flex-end"
                      id={currentShow.id_tvmaze}
                    >
                      <Icons
                        showId={currentShow.show_id_tvmaze}
                        showName={currentShow.show_name}
                        showSeason={currentShow.season}
                        showEpisode={currentShow.number}
                        userFollowings={userFollowings}
                        categorie="aired"
                      />
                    </Grid>

                    <CardActionArea>
                      <AiredTitleCardAndSubtitle
                        container
                        direction="row"
                        justify="center"
                        onClick={() => getDetailShow(currentShow.show_id_tvmaze)}
                      >
                        <NavLink exact to={`/show/${currentShow.show_name}`}>
                          <HomePageCardTitle variant="h5" component="h2">
                            {currentShow.show_name}
                          </HomePageCardTitle>

                          <AiredSubtitleSeasonEpisode>
                            {currentShow.season.toString().length > 2 ? currentShow.season : `S${currentShow.season}`} {currentShow.number === null ? '' : `E${currentShow.number}`}
                          </AiredSubtitleSeasonEpisode>
                        </NavLink>
                      </AiredTitleCardAndSubtitle>
                    </CardActionArea>

                  </HomePageCardMedia>


                </HomePageCard>

              </HomePageGridOfOnCard>
            ))}
          </Slider>
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
};

Aired.propTypes = {
  trendingList: PropTypes.array.isRequired,
  getDetailShow: PropTypes.func.isRequired,
};

export default Aired;
