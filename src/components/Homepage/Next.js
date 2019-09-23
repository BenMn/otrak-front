/* eslint-disable react/prop-types */

/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

// Local Import
import Icons from 'src/containers/Icons';

import {
  Typography,
  Grid,
  CardActionArea,
  Container,
} from '@material-ui/core';

// Slider library
import Slider from 'react-slick';

// import Material UI custom components
import {
  NextIconTitle,
  HomePageCard,
  HomePageCardMedia,
  NextBlockTitleSeeAll,
  // NextSeeAllIcon,
  HomePageGridOfOnCard,
  SearchResultGridWithoutSlider,
  SearchResultTitle,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

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

const Next = ({ nextList, getDetailShow }) => {
  // Setting of Slider component
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (nextList.length <= 3) {
    return (
      <>
        {/* Title */}
        <NextBlockTitleSeeAll
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Typography variant="h3" className="title-icon-next-aired"><NextIconTitle /> Next To Watch</Typography>
          {/* <Typography variant="h6">
            <a href="." className="see-all-next-aired">
              See all<NextSeeAllIcon />
            </a>
          </Typography> */}
        </NextBlockTitleSeeAll>

        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            {/* Single Card Show */}
            {nextList.map((currentShow) => (
              <SearchResultGridWithoutSlider item key={currentShow.id_tvmaze}>
                <HomePageCard key={currentShow.id_tvmaze} id="currentCard">
                  <HomePageCardMedia
                    image={currentShow.poster === '' ? '../../src/styles/assets/images/notAvailable/no-image.jpeg' : currentShow.poster}
                  >
                    <Grid
                      container
                      justify="flex-end"
                    >
                      <Icons showId={currentShow.id_tvmaze} categorie="search" />
                    </Grid>
                    {/* Show Title */}
                    <NavLink exact to={`/show/${currentShow.name}`}>
                      <CardActionArea onClick={() => getDetailShow(currentShow.id_tvmaze)}>
                        <SearchResultTitle variant="h5" component="h2">
                          {currentShow.name}
                        </SearchResultTitle>
                      </CardActionArea>
                    </NavLink>
                  </HomePageCardMedia>
                </HomePageCard>
              </SearchResultGridWithoutSlider>
            ))}
          </Grid>
        </Container>
      </>
    );
  }
  return (
    <>
      {/* Title */}
      <NextBlockTitleSeeAll
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h3" className="title-icon-next-aired"><NextIconTitle /> Next To Watch</Typography>
        {/* <Typography variant="h6">
          <a href="." className="see-all-next-aired">
            See all<NextSeeAllIcon />
          </a>
        </Typography> */}
      </NextBlockTitleSeeAll>

      <Container>
        <Slider {...settings}>
          {/* Single Card Show */}
          {nextList.map((currentShow) => (
            <HomePageGridOfOnCard item key={currentShow.id_tvmaze}>
              <HomePageCard key={currentShow.id_tvmaze} id="currentCard">
                <HomePageCardMedia
                  image={currentShow.poster}
                >
                  <Grid
                    container
                    justify="flex-end"
                  >
                    <Icons showId={currentShow.id_tvmaze} categorie="search" />
                  </Grid>

                  {/* Show Title */}
                  <NavLink exact to={`/show/${currentShow.show_name}`}>
                    <CardActionArea onClick={() => getDetailShow(currentShow.id_tvmaze)}>
                      <SearchResultTitle variant="h5" component="h2">
                        {currentShow.show_name}
                      </SearchResultTitle>
                    </CardActionArea>
                  </NavLink>
                </HomePageCardMedia>
              </HomePageCard>
            </HomePageGridOfOnCard>
          ))}
        </Slider>
      </Container>
    </>
  );
};

Next.propTypes = {
  nextList: PropTypes.array.isRequired,
  getDetailShow: PropTypes.func.isRequired,

};

export default Next;
