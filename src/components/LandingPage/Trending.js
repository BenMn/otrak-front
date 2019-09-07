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
  TrendingGridAnime,
  TrendingIcon,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

// import './LandingPage.scss';

const Trending = () => (
  <>
    {/* ------------------ Anime Cards ----------------  */}
    <TrendingTitleTranding variant="h3" align="center"><TrendingIcon /> Trending Now</TrendingTitleTranding>
    <TrendingSubtitle variant="h4" align="center">Anime</TrendingSubtitle>
    <TrendingGridAnime
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item lg={2} xs={6}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumAnime/1.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={6}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumAnime/2.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={6}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumAnime/3.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={6}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumAnime/4.jpg"
          />
        </TrendingCard>
      </Grid>
    </TrendingGridAnime>


    {/* ------------------ Series Cards ----------------  */}
    <TrendingSubtitle variant="h4" align="center">Séries</TrendingSubtitle>
    <TrendingGridSeries
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item lg={2} xs={6}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumSeries/1.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={6}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumSeries/2.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={6}>
        <TrendingCard>
          <TrendingCardMedia
            image="src/styles/assets/images/mediumSeries/3.jpg"
          />
        </TrendingCard>
      </Grid>
      <Grid item lg={2} xs={6}>
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
