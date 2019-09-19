/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


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
  HomePageCardTitle,
  HomePageIconContainer,
  HomePageCardIcon,
  SearchResultContainerWithoutSlider,
  SearchResultGridWithoutSlider,
} from 'src/styles/materialUi/materialUiStyles/HomePage';


// Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarIcon from '@material-ui/icons/Star';


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

class SearchResult extends React.Component {
  displayCardActionButtons = (event) => {
    event.persist();
    const parentIconElement = event.target.parentElement.parentElement;
    const hiddenIcons = parentIconElement.getElementsByClassName('hiddenCardIcon');
    for (let i = 0; i < hiddenIcons.length; i++) {
      hiddenIcons[i].style.display = 'block';
    }
  }

  render() {
    const {
      searchInputValue,
      storeSearchInputResult,
      getDetailShow,
      testClickCardMedia,
    } = this.props;

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
                <HomePageCard key={currentShow.id_tvmaze}>
                  <HomePageCardMedia
                    image={currentShow.poster === '' ? '../../src/styles/assets/images/notAvailable/no-image.jpeg' : currentShow.poster}
                    title={currentShow.name}
                  >
                    <Grid
                      container
                      justify="flex-end"
                    >
                      {/* Icons */}
                      <HomePageIconContainer className="hiddenCardIcon">
                        <AddCircleIcon />
                      </HomePageIconContainer>
                      <HomePageIconContainer className="hiddenCardIcon">
                        <VisibilityIcon />
                      </HomePageIconContainer>
                      <HomePageIconContainer className="hiddenCardIcon">
                        <CreateIcon />
                      </HomePageIconContainer>
                      <HomePageIconContainer className="hiddenCardIcon">
                        <StarIcon />
                      </HomePageIconContainer>
                      <HomePageIconContainer className="hiddenCardIcon">
                        <DeleteForeverIcon />
                      </HomePageIconContainer>
                      <HomePageIconContainer onClick={this.displayCardActionButtons}>
                        <HomePageCardIcon />
                      </HomePageIconContainer>

                    </Grid>
                    {/* Show Title */}
                    <NavLink exact to={`/show/${currentShow.name}`}>
                      <CardActionArea onClick={() => testClickCardMedia()}>
                        {/* getDetailShow(currentShow.id_tvmaze) */}
                        <HomePageCardTitle variant="h5" component="h2">
                          {currentShow.name}
                        </HomePageCardTitle>
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
              <Grid item key={currentShow.id_tvmaze}>
                <HomePageCard key={currentShow.id_tvmaze}>
                  <HomePageCardMedia
                    image={currentShow.poster}
                    title={currentShow.name}
                  >
                    <Grid
                      container
                      justify="flex-end"
                    >
                      {/* Icons */}
                      <HomePageIconContainer className="hiddenCardIcon">
                        <AddCircleIcon />
                      </HomePageIconContainer>
                      <HomePageIconContainer className="hiddenCardIcon">
                        <VisibilityIcon />
                      </HomePageIconContainer>
                      <HomePageIconContainer className="hiddenCardIcon">
                        <CreateIcon />
                      </HomePageIconContainer>
                      <HomePageIconContainer className="hiddenCardIcon">
                        <StarIcon />
                      </HomePageIconContainer>
                      <HomePageIconContainer className="hiddenCardIcon">
                        <DeleteForeverIcon />
                      </HomePageIconContainer>
                      <HomePageIconContainer onClick={this.displayCardActionButtons}>
                        <HomePageCardIcon onClick={this.displayCardActionButtons} />
                      </HomePageIconContainer>

                    </Grid>

                    {/* Show Title */}
                    <NavLink exact to={`/show/${currentShow.name}`}>
                      <CardActionArea onClick={() => getDetailShow(currentShow.id_tvmaze)}>
                        <HomePageCardTitle variant="h5" component="h2">
                          {currentShow.name}
                        </HomePageCardTitle>
                      </CardActionArea>
                    </NavLink>
                  </HomePageCardMedia>
                </HomePageCard>
              </Grid>
            ))}
          </Slider>
        </Container>
      </>
    );
  }
}

SearchResult.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  storeSearchInputResult: PropTypes.array.isRequired,
  testClickCardMedia: PropTypes.array.isRequired,
};

export default SearchResult;
