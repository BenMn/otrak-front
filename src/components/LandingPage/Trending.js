// Import NPM
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


// Import locaux
import { FilteredAiredLandingPage } from 'src/utils';

// Import material UI components
import {
  CardActionArea,
} from '@material-ui/core';

// Import material UI custom components
import {
  TrendingTitleTranding,
  TrendingGridSeries,
  TrendingGridAnime,
  TrendingIcon,
  TrendingCardMedia,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

import {
  HomePageCard,
  HomePageCardTitle,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
  HomePageGridOfOnCard,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

import './LandingPage.scss';

const Trending = ({ trendingList, getDetailShow }) => {
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
          justify="space-around"
          alignItems="center"
        >
          {filteredAiredList[0].map((currentShow) => (
            <HomePageGridOfOnCard item key={currentShow.id_tvmaze}>

              <HomePageCard>

                <NavLink exact to={`/show/${currentShow.show_name}`}>
                  <CardActionArea onClick={() => getDetailShow(currentShow.show_id_tvmaze)}>
                    <TrendingCardMedia
                      image={currentShow.poster}
                      title={currentShow.show_name}
                    >
                      <AiredTitleCardAndSubtitle
                        container
                        direction="row"
                        justify="center"
                      >
                        <HomePageCardTitle variant="h5" component="h2">
                          {currentShow.show_name}
                        </HomePageCardTitle>

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
                    <TrendingCardMedia
                      image={currentShow.poster}
                      title={currentShow.show_name}
                    >
                      <AiredTitleCardAndSubtitle
                        container
                        direction="row"
                        justify="center"
                      >
                        <HomePageCardTitle variant="h5" component="h2">
                          {currentShow.show_name}
                        </HomePageCardTitle>

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
