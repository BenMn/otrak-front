// NPM install
import React from 'react';
import PropTypes from 'prop-types';

// Local Imports
import HeadScreen from 'src/components/LandingPage/HeadScreen';
import ApiInfos from 'src/components/LandingPage/ApiInfos';
import ManageShows from 'src/components/LandingPage/ManageShows';
import Trending from 'src/components/LandingPage/Trending';
import StartToday from 'src/components/LandingPage/StartToday';

import './LandingPage.scss';

class LandingPage extends React.Component {
  // Fetch all the trendings shows when page load
  componentDidMount() {
    const { getTrending } = this.props;
    getTrending();
  }

  render() {
    const {
      trendingList,
      searchInputValue,
      handleSearchInput,
      handleSearchInputSubmit,
      handleOpen,
    } = this.props;
    return (
      <>
        <HeadScreen
          handleOpen={handleOpen}
          searchInputValue={searchInputValue}
          handleSearchInput={handleSearchInput}
          handleSearchInputSubmit={handleSearchInputSubmit}
        />
        <ApiInfos
          searchInputValue={searchInputValue}
          handleSearchInput={handleSearchInput}
          handleSearchInputSubmit={handleSearchInputSubmit}
        />
        <ManageShows />
        <Trending trendingList={trendingList} />
        <StartToday handleOpen={handleOpen} />
      </>
    );
  }
}

LandingPage.propTypes = {
  getTrending: PropTypes.func.isRequired,
  trendingList: PropTypes.array.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchInputSubmit: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default LandingPage;
