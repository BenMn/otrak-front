import React from 'react';
import {

} from '@material-ui/core';

import './LandingPage.scss';

import HeadScreen from './HeadScreen';
import ApiInfos from './ApiInfos';
import ManageShows from './ManageShows';
import Trending from './Trending';

const LandingPage = () => (
  <>
    <HeadScreen />
    <ApiInfos />
    <ManageShows />
    <Trending />
  </>
);


export default LandingPage;
