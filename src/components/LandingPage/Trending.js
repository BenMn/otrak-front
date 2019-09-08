import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import {
  TrendingCard,
  TrendingCardMedia,
  TrendingTitleTranding,
  TrendingGridSeries,
  TrendingGridAnime,
  TrendingIcon,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

import './LandingPage.scss';

const Trending = () => (
  <div id="footer-landing-page">
    <div id="footer-screen-landing-page">
      {/* ------------------ Anime Cards ----------------  */}
      <TrendingTitleTranding variant="h3" align="center" className="title-icon"><TrendingIcon /> Trending Now</TrendingTitleTranding>
      <TrendingGridAnime
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item lg={3} md={3} xs={5}>
          <TrendingCard justify="center">
            <TrendingCardMedia
              image="src/styles/assets/images/mediumAnime/1.jpg"
            />
          </TrendingCard>
        </Grid>
        <Grid item lg={3} md={3} xs={5}>
          <TrendingCard justify="center">
            <TrendingCardMedia
              image="src/styles/assets/images/mediumAnime/2.jpg"
            />
          </TrendingCard>
        </Grid>
        <Grid item lg={3} md={3} xs={5}>
          <TrendingCard justify="center">
            <TrendingCardMedia
              image="src/styles/assets/images/mediumAnime/3.jpg"
            />
          </TrendingCard>
        </Grid>
        <Grid item lg={3} md={3} xs={5}>
          <TrendingCard justify="center">
            <TrendingCardMedia
              image="src/styles/assets/images/mediumAnime/4.jpg"
            />
          </TrendingCard>
        </Grid>
      </TrendingGridAnime>


      {/* ------------------ Series Cards ----------------  */}
      <TrendingGridSeries
        container
        direction="row"
        justify="center"
        alignItems="center"
        mx={3}
      >
        <Grid item lg={3} md={3} xs={5}>
          <TrendingCard justify="center">
            <TrendingCardMedia
              image="src/styles/assets/images/mediumSeries/1.jpg"
            />
          </TrendingCard>
        </Grid>
        <Grid item lg={3} md={3} xs={5}>
          <TrendingCard justify="center">
            <TrendingCardMedia
              image="src/styles/assets/images/mediumSeries/2.jpg"
            />
          </TrendingCard>
        </Grid>
        <Grid item lg={3} md={3} xs={5}>
          <TrendingCard justify="center">
            <TrendingCardMedia
              image="src/styles/assets/images/mediumSeries/3.jpg"
            />
          </TrendingCard>
        </Grid>
        <Grid item lg={3} md={3} xs={5}>
          <TrendingCard justify="center">
            <TrendingCardMedia
              image="src/styles/assets/images/mediumSeries/4.jpg"
            />
          </TrendingCard>
        </Grid>
      </TrendingGridSeries>
    </div>
  </div>
);


export default Trending;
