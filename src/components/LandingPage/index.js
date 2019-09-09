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
      inputValue,
      handleInput,
      handleInputSubmit,
      handleOpen,
    } = this.props;
    return (
      <>
        <HeadScreen handleOpen={handleOpen} />
        <ApiInfos
          inputValue={inputValue}
          handleInput={handleInput}
          handleInputSubmit={handleInputSubmit}
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
  inputValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleInputSubmit: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default LandingPage;
