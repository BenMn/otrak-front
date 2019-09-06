import React from 'react';
import {

} from '@material-ui/core';

import './LandingPage.scss';

import HeadScreen from './HeadScreen';
import ApiInfos from './ApiInfos';
import ManageShows from './ManageShows';

const LandingPage = () => (
  <>
    <HeadScreen />
    <ApiInfos />
    <ManageShows />
  </>
);


export default LandingPage;
