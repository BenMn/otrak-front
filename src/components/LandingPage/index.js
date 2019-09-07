import React from 'react';
import PropTypes from 'prop-types';
import {

} from '@material-ui/core';

import './LandingPage.scss';

import HeadScreen from './HeadScreen';
import ApiInfos from './ApiInfos';
import ManageShows from './ManageShows';
import Trending from './Trending';

class LandingPage extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <>
        <HeadScreen />
        <ApiInfos />
        <ManageShows />
        <Trending />
      </>
    );
  }
}

LandingPage.propsTypes = {
  getTrending: PropTypes.func.isRequired,
};

export default LandingPage;
