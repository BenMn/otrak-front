import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import {
  TrendingCard,
  TrendingCardMedia,
  TrendingTitleTranding,
  TrendingSubtitle,
  TrendingGridSeries,
  TrendingIcon,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

// import './LandingPage.scss';

const Trending = () => (
  <>
    {/* ------------------ Anime Cards ----------------  */}
    <TrendingTitleTranding variant="h3" align="center"><TrendingIcon /> Trending Now</TrendingTitleTranding>
    <TrendingSubtitle variant="h4" align="center">Anime</TrendingSubtitle>
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item lg={2} xs={12}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumAnime/1.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={12}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumAnime/2.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={12}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumAnime/3.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={12}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumAnime/4.jpg"
          />
        </TrendingCard>
      </Grid>
    </Grid>


    {/* ------------------ Series Cards ----------------  */}
    <TrendingSubtitle variant="h4" align="center">Séries</TrendingSubtitle>
    <TrendingGridSeries
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item lg={2} xs={12}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumSeries/1.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={12}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumSeries/2.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={12}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumSeries/3.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={12}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumSeries/4.jpg"
          />
        </TrendingCard>
      </Grid>
    </TrendingGridSeries>
  </>
);


export default Trending;
