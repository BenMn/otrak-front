/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */

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

import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarIcon from '@material-ui/icons/Star';


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
    const { searchInputValue, storeSearchInputResult } = this.props;
    const params = {
      lazy: true,
      grabCursor: true,
      slidesPerView: 4,
      centeredSlides: true,
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
            <SearchResultIconTitle />{`Search for ${searchInputValue}` }
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
            {console.log(storeSearchInputResult)}
            <Swiper {...params}>
              {storeSearchInputResult.map((currentShow) => (
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
  searchInputValue: PropTypes.string.isRequired,
  storeSearchInputResult: PropTypes.array.isRequired,
};

export default SearchResult;