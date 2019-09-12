import React from 'react';

import {
  Grid,
} from '@material-ui/core';

import {
  DashboardHeaderConainer,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

import UserParams from './UserParams';
import UserInfos from './UserInfos';
import ConfigButtons from './ConfigButtons';

import '../Dashboard.scss';

const Header = () => (
  <div id="Header">

    <DashboardHeaderConainer>

      <Grid container align="center" spacing={5}>

        <Grid item lg={4} md={4} xs={12} align="start">
          <UserParams />
        </Grid>

        <Grid item lg={4} md={4} xs={12}>
          <UserInfos />
        </Grid>

        <Grid item lg={4} md={4} xs={12} align="end">
          <ConfigButtons />
        </Grid>

      </Grid>

    </DashboardHeaderConainer>

  </div>
);

export default Header;
