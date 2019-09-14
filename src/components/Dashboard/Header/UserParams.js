import React from 'react';

import {
  Box,
} from '@material-ui/core';

import {
  DashboardProgressBar,
  DashboardTitleProgressBar,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

const UserParams = () => (
  <>
    <Box componenent="div" mt={3}>
      <DashboardTitleProgressBar>Stat perso marrant</DashboardTitleProgressBar>
      <DashboardProgressBar
        variant="determinate"
        color="secondary"
        value={20}
      />
    </Box>
    <Box componenent="div" mt={3}>
      <DashboardTitleProgressBar>Stat perso marrant</DashboardTitleProgressBar>
      <DashboardProgressBar
        variant="determinate"
        color="secondary"
        value={70}
      />
    </Box>
    <Box componenent="div" mt={3}>
      <DashboardTitleProgressBar>Stat perso marrant</DashboardTitleProgressBar>
      <DashboardProgressBar
        variant="determinate"
        color="secondary"
        value={50}
      />
    </Box>
  </>
);

export default UserParams;
