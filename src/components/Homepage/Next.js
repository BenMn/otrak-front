import React from 'react';
import Swiper from 'react-id-swiper';

// scss
import 'react-id-swiper/lib/styles/scss/swiper.scss';
// css
import 'react-id-swiper/lib/styles/css/swiper.css';

// import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
  CardActionArea,
  Container,
} from '@material-ui/core';

// Icons


// ComponentIconButtons

// Data provisoire
import shows from 'src/data/shows';

import {
  NextIconTitle,
  HomePageCard,
  HomePageCardMedia,
  NextBlockTitleSeeAll,
  NextSeeAllIcon,
  HomePageIconContainer,
  HomePageCardIcon,
  HomePageCardTitle,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

const Next = () => {
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
      <NextBlockTitleSeeAll
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h3" className="title-icon-next-aired"><NextIconTitle /> Next To Watch</Typography>
        <Typography variant="h6"><a href="." className="see-all-next-aired"> See all<NextSeeAllIcon /></a></Typography>
      </NextBlockTitleSeeAll>

      <Container>
        <Swiper {...params}>
          {shows.map((show) => (
            <Grid item key={show.title}>
              <HomePageCard key={show.title}>
                <CardActionArea>
                  <HomePageCardMedia
                    image={show.image}
                    title={show.title}
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
                      {show.title}
                    </HomePageCardTitle>
                  </HomePageCardMedia>
                </CardActionArea>
              </HomePageCard>
            </Grid>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

Next.propTypes = {

};

export default Next;
