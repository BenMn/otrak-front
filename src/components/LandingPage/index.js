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
    this.props.getTrending();
  }

  render() {
    const { trendingList } = this.props;
    return (
      <>
        <HeadScreen />
        <ApiInfos />
        <ManageShows />
        <Trending trendingList={trendingList} />
        <StartToday />
      </>
    );
  }
}

LandingPage.propTypes = {
  getTrending: PropTypes.func.isRequired,
  trendingList: PropTypes.object.isRequired,
};

export default LandingPage;
