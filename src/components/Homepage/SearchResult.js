/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';
import {
  Grid,
  CardActionArea,
  Typography,
  Container,
} from '@material-ui/core';

import {
  HomePageCard,
  HomePageCardMedia,
  AiredBlockTitleSeeAll,
  AiredSeeAllIcon,
  SearchResultIconTitle,
  HomePageCardTitle,
  HomePageIconContainer,
  HomePageCardIcon,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

class SearchResult extends React.Component {
  render() {
    const { inputValue, storeInputResult } = this.props;
    const params = {
      lazy: true,
      slidesPerView: 4,
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

        <AiredBlockTitleSeeAll
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Typography variant="h3" component="p" className="title-icon-next-aired">
            <SearchResultIconTitle />{`Search for ${inputValue}` }
          </Typography>
          <Typography variant="h6"><a href="." className="see-all-next-aired"> See all<AiredSeeAllIcon /></a></Typography>
        </AiredBlockTitleSeeAll>

        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            
            <Swiper {...params}>
              {storeInputResult.map((currentShow) => (
                <Grid item key={currentShow.id_tvmaze}>
                  <HomePageCard key={currentShow.id_tvmaze}>
                    <CardActionArea>
                      <HomePageCardMedia
                        image={currentShow.poster}
                        title={currentShow.name}
                      >
                        <Grid
                          container
                          justify="flex-end"
                        >
                          <HomePageIconContainer>
                            <HomePageCardIcon />
                          </HomePageIconContainer>
                        </Grid>

                        <HomePageCardTitle variant="h5" component="h2">
                          {currentShow.name}
                        </HomePageCardTitle>
                      </HomePageCardMedia>
                    </CardActionArea>
                  </HomePageCard>
                </Grid>
              ))}
            </Swiper>
          </Grid>
        </Container>
      </>
    );
  }
}

SearchResult.propTypes = {
  inputValue: PropTypes.string.isRequired,
  storeInputResult: PropTypes.array.isRequired,
};

export default SearchResult;
