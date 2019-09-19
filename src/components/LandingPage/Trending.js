// Import NPM
import React from 'react';
import PropTypes from 'prop-types';


// Import locaux
import { FilteredAiredLandingPage } from 'src/utils';

// Import material UI components
import {
  Grid,
} from '@material-ui/core';

// Import material UI custom components
import {
  TrendingCard,
  TrendingCardMedia,
  TrendingTitleTranding,
  TrendingGridSeries,
  TrendingGridAnime,
  TrendingIcon,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

import './LandingPage.scss';

const Trending = ({ trendingList }) => {
  const filteredAiredList = FilteredAiredLandingPage(trendingList);
  return (
    <div id="footer-landing-page">
      <div id="footer-screen-landing-page">
        {/* ------------------ Anime Cards ----------------  */}
        <TrendingTitleTranding variant="h3" align="center" className="title-icon">
          <TrendingIcon />
          Just Aired
        </TrendingTitleTranding>
        <TrendingGridAnime
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {filteredAiredList[0].map((currentShow) => (
            <Grid item lg={3} md={3} xs={5}>
              <TrendingCard justify="center">
                <TrendingCardMedia
                  image={currentShow.poster}
                />
              </TrendingCard>
            </Grid>
          ))}
        </TrendingGridAnime>
        {/* ------------------ Series Cards ----------------  */}
        <TrendingGridSeries
          container
          direction="row"
          justify="center"
          alignItems="center"
          mx={3}
        >
          {filteredAiredList[1].map((currentShow) => (
            <Grid item lg={3} md={3} xs={5}>
              <TrendingCard justify="center">
                <TrendingCardMedia
                  image={currentShow.poster}
                />
              </TrendingCard>
            </Grid>
          ))}
        </TrendingGridSeries>
      </div>
    </div>
  );
};

Trending.propTypes = {
  trendingList: PropTypes.array,
};

Trending.defaultProps = {
  trendingList: [],
};


export default Trending;
