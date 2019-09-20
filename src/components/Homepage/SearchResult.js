/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Icons from 'src/containers/Icons';

// import Material UI components
import {
  Grid,
  CardActionArea,
  Typography,
  Container,
} from '@material-ui/core';

// Slider library
import Slider from 'react-slick';

// Slider css styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Material UI custom components
import {
  HomePageCard,
  HomePageCardMedia,
  AiredBlockTitleSeeAll,
  AiredSeeAllIcon,
  SearchResultIconTitle,
  SearchResultContainerWithoutSlider,
  SearchResultGridWithoutSlider,
  HomePageGridOfOnCard,
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

const SearchResult = ({
  searchInputValue,
  storeSearchInputResult,
  getDetailShow,
}) => {
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

  // If Condition who manage the display or not of slider when we have less than 3 result
  if (storeSearchInputResult.length <= 3) {
    return (
      <>
        {/* Title */}
        <AiredBlockTitleSeeAll
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Typography variant="h3" component="p" className="title-icon-next-aired">
            <SearchResultIconTitle />{`Search for ${searchInputValue}` }
          </Typography>
          <Typography variant="h6"><a href="." className="see-all-next-aired"> See all<AiredSeeAllIcon /></a></Typography>
        </AiredBlockTitleSeeAll>

        <SearchResultContainerWithoutSlider>
          {storeSearchInputResult.map((currentShow) => (
            <SearchResultGridWithoutSlider item key={currentShow.id_tvmaze}>
              <HomePageCard key={currentShow.id_tvmaze} id="currentCard">
                <HomePageCardMedia
                  image={currentShow.poster === '' ? '../../src/styles/assets/images/notAvailable/no-image.jpeg' : currentShow.poster}
                  title={currentShow.name}
                >
                  <Grid
                    container
                    justify="flex-end"
                  >
                    <Icons showId={currentShow.id_tvmaze} />
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
        </SearchResultContainerWithoutSlider>
      </>
    );
  }

  // Else of If condition
  return (
    <>
      {/* Title */}
      <AiredBlockTitleSeeAll
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h3" component="p" className="title-icon-next-aired">
          <SearchResultIconTitle />{`Search for ${searchInputValue}` }
        </Typography>
        <Typography variant="h6"><a href="." className="see-all-next-aired"> See all<AiredSeeAllIcon /></a></Typography>
      </AiredBlockTitleSeeAll>

      <Container>
        {/* Slider */}
        <Slider {...settings}>
          {storeSearchInputResult.map((currentShow) => (
            <HomePageGridOfOnCard item key={currentShow.id_tvmaze}>
              <HomePageCard key={currentShow.id_tvmaze} id="currentCard">
                <HomePageCardMedia
                  image={currentShow.poster}
                  title={currentShow.name}
                >
                  <Grid
                    container
                    justify="flex-end"
                  >
                    <Icons showId={currentShow.id_tvmaze} />
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
            </HomePageGridOfOnCard>
          ))}
        </Slider>
      </Container>
    </>
  );
};


SearchResult.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  storeSearchInputResult: PropTypes.array.isRequired,
};

export default SearchResult;
