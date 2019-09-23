// Import NPM
import React from 'react';

// Material UI Components
import {
  Box,
} from '@material-ui/core';

// Material UI Custom Components
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
