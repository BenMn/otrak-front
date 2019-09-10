import React from 'react';
import PropTypes from 'prop-types';
import {

} from '@material-ui/core';

import './LandingPage.scss';

import HeadScreen from './HeadScreen';
import ApiInfos from './ApiInfos';
import ManageShows from './ManageShows';
import Trending from './Trending';
import StartToday from './StartToday';

class LandingPage extends React.Component {
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
  trendingList: PropTypes.object.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchInputSubmit: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default LandingPage;
