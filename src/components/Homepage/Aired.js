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
  CardContent,
} from '@material-ui/core';

// Icons


// ComponentIconButtons
import IconButtons from 'src/components/IconButtons';

// Data provisoire
import shows from 'src/data/shows';


import {
  AiredIconTitle,
  HomePageCard,
  HomePageCardMedia,
  HomePageCardDescription,
  HomePageCardButton,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

const Aired = () => {

  const shuffleArray = (array) => {
    let i = array.length - 1;
    // eslint-disable-next-line no-plusplus
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const params = {
    lazy: true,
    slidesPerView: 5,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      // clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
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
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h3" component="p" className="title-icon-next-aired"><AiredIconTitle /> Just Aired</Typography>
        <Typography><a href="."> See all... </a></Typography>
      </Grid>

      <Swiper {...params}>
        {shuffleArray(shows).map((show) => (
          <Grid itemxs={3} key={show.title}>
            <HomePageCard key={show.title}>
              <Typography align="center">{show.release}</Typography>
              <CardActionArea>
                <HomePageCardMedia
                  image={show.image}
                  title={show.title}
                  className="swiper-lazy"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {show.title}
                  </Typography>
                  <HomePageCardDescription variant="body2" color="textPrimary" component="p">
                    {show.description}
                  </HomePageCardDescription>
                </CardContent>
              </CardActionArea>
              <HomePageCardButton>

                <IconButtons />

              </HomePageCardButton>
            </HomePageCard>
          </Grid>
        ))}
      </Swiper>
    </>
  );
};

Aired.propTypes = {

};

export default Aired;
