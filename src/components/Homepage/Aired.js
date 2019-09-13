/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Swiper from 'react-id-swiper';

// scss
import 'react-id-swiper/lib/styles/scss/swiper.scss';
// css
import 'react-id-swiper/lib/styles/css/swiper.css';

import PropTypes from 'prop-types';

import {
  Typography,
  Grid,
  CardActionArea,
  Container,
} from '@material-ui/core';

// Icons

// Data provisoire
// import shows from 'src/data/shows';


import {
  AiredIconTitle,
  HomePageCard,
  HomePageCardMedia,
  HomePageIconContainer,
  HomePageCardTitle,
  AiredBlockTitleSeeAll,
  HomePageCardIcon,
  AiredSeeAllIcon,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarIcon from '@material-ui/icons/Star';

class Aired extends React.Component {


  displayCardActionButtons = (event) => {
    event.persist();
    const parentIconElement = event.target.parentElement.parentElement;
    const hiddenIcons = parentIconElement.getElementsByClassName('hiddenCardIcon');
    for (let i = 0; i < hiddenIcons.length; i++) {
      hiddenIcons[i].style.display = 'block';
    }
  };

  render() {
    const { trendingList, getDetailShow, domReady } = this.props;
    const params = {
      lazy: true,
      grabCursor: true,
      slidesPerView: 4,
      slidesPerGroup: 3,
      spaceBetween: 10,
      mousewheel: true,
      loop: true,
      loopFillGroupWithBlank: true,
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
          <Typography variant="h3" component="p" className="title-icon-next-aired"><AiredIconTitle /> Just Aired</Typography>
          <Typography variant="h6"><a href="." className="see-all-next-aired"> See all<AiredSeeAllIcon /></a></Typography>
        </AiredBlockTitleSeeAll>
        {domReady !== true && (
        <Container>
          <Swiper {...params}>
            {trendingList.map((currentShow) => (
              <Grid item key={currentShow.id_tvmaze}>
                <HomePageCard>
                  <CardActionArea onClick={() => getDetailShow(currentShow.show_id_tvmaze)}>
                    <HomePageCardMedia
                      image={currentShow.poster}
                      title={currentShow.show_name}
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
                      <AiredTitleCardAndSubtitle
                        container
                        direction="row"
                        justify="flex-end"
                      >
                        <HomePageCardTitle variant="h5" component="h2">
                          {currentShow.show_name}
                        </HomePageCardTitle>
                        <AiredSubtitleSeasonEpisode> S{currentShow.season} E{currentShow.number}</AiredSubtitleSeasonEpisode>
                      </AiredTitleCardAndSubtitle>
                    </HomePageCardMedia>
                  </CardActionArea>
                </HomePageCard>
              </Grid>
            ))}
          </Swiper>
        </Container>
        )}
      </>
    );
  }
}

Aired.propTypes = {
  trendingList: PropTypes.array.isRequired,
  getDetailShow: PropTypes.func.isRequired,

};

export default Aired;
