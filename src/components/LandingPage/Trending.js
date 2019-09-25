// Import NPM
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import material UI components
import {
  CardActionArea,
} from '@material-ui/core';

// Import material UI custom components
// From LandingPage.js
import {
  TrendingTitleTranding,
  TrendingGridSeries,
  TrendingGridAnime,
  TrendingIcon,
  TrendingCardMedia,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';
// From HomePage.js
import {
  HomePageCard,
  HomePageCardTitle,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
  HomePageGridOfOnCard,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

// Local imports
import { FilteredAiredLandingPage } from 'src/utils';

// CSS Local Styling
import './LandingPage.scss';

const Trending = ({ trendingList, getDetailShow }) => {
  const filteredAiredList = FilteredAiredLandingPage(trendingList);
  return (
    <div id="footer-landing-page">
      <div id="footer-screen-landing-page">
        {/* ------------------ Anime Cards ----------------  */}
        <TrendingTitleTranding variant="h3" align="center" className="title-icon">
          <TrendingIcon />
          In the next 24 hours !
        </TrendingTitleTranding>
        <TrendingGridAnime
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {filteredAiredList[0].map((currentShow) => (
            <HomePageGridOfOnCard item key={currentShow.id_tvmaze}>

              <HomePageCard>

                <NavLink exact to={`/show/${currentShow.show_name}`}>
                  <CardActionArea onClick={() => getDetailShow(currentShow.show_id_tvmaze)}>

                    {/* Show Poster */}
                    <TrendingCardMedia
                      image={currentShow.poster === '' ? 'src/styles/assets/images/notAvailable/no-image.jpeg' : currentShow.poster}
                    >
                      <AiredTitleCardAndSubtitle
                        container
                        direction="row"
                        justify="center"
                      >

                        {/* Show Title */}
                        <HomePageCardTitle variant="h5" component="h2">
                          {currentShow.show_name}
                        </HomePageCardTitle>

                        {/* Show Season + Episode */}
                        <AiredSubtitleSeasonEpisode>
                          {currentShow.season.toString().length > 2 ? currentShow.season : `S${currentShow.season}`} {currentShow.number === null ? '' : `E${currentShow.number}`}
                        </AiredSubtitleSeasonEpisode>

                      </AiredTitleCardAndSubtitle>
                    </TrendingCardMedia>
                  </CardActionArea>
                </NavLink>

              </HomePageCard>

            </HomePageGridOfOnCard>
          ))}
        </TrendingGridAnime>
        {/* ------------------ Series Cards ----------------  */}
        <TrendingGridSeries
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {filteredAiredList[1].map((currentShow) => (
            <HomePageGridOfOnCard item key={currentShow.id_tvmaze}>

              <HomePageCard>

                <NavLink exact to={`/show/${currentShow.show_name}`}>
                  <CardActionArea onClick={() => getDetailShow(currentShow.show_id_tvmaze)}>

                    {/* Show Poster */}
                    <TrendingCardMedia
                      image={currentShow.poster === '' ? 'src/styles/assets/images/notAvailable/no-image.jpeg' : currentShow.poster}
                    >
                      <AiredTitleCardAndSubtitle
                        container
                        direction="row"
                        justify="center"
                      >
                        {/* Show Title */}
                        <HomePageCardTitle variant="h5" component="h2">
                          {currentShow.show_name}
                        </HomePageCardTitle>

                        {/* Show Season + Episode */}
                        <AiredSubtitleSeasonEpisode>
                          {currentShow.season.toString().length > 2 ? currentShow.season : `S${currentShow.season}`} {currentShow.number === null ? '' : `E${currentShow.number}`}
                        </AiredSubtitleSeasonEpisode>

                      </AiredTitleCardAndSubtitle>
                    </TrendingCardMedia>
                  </CardActionArea>
                </NavLink>

              </HomePageCard>

            </HomePageGridOfOnCard>
          ))}
        </TrendingGridSeries>
      </div>
    </div>
  );
};

Trending.propTypes = {
  trendingList: PropTypes.array,
  getDetailShow: PropTypes.func.isRequired,
};

Trending.defaultProps = {
  trendingList: [],
};


export default Trending;
