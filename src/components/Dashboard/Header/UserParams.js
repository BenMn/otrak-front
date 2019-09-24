// Import NPM
import React from 'react';

// Material UI Components
import {
  Box,
  Typography,
} from '@material-ui/core';

// Material UI Custom Components
import {
  DashboardProgressBar,
  DashboardTitleProgressBar,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';


const UserParams = () => (
  <>
    <Box componenent="div" mt={3}>
      <DashboardTitleProgressBar variant='h5' align="center">Total time spent watching your favorites shows</DashboardTitleProgressBar>
      <Typography variant='h6' align="center">3 Days 8 Hours 35 Minutes </Typography>
      {/* <DashboardProgressBar
        variant="determinate"
        color="secondary"
        value={20}
      /> */}
    </Box>
    <Box componenent="div" mt={3}>
      <DashboardTitleProgressBar variant='h5' align="center">Most watched genre: Science-Fiction</DashboardTitleProgressBar>
      {/*<DashboardProgressBar
        variant="determinate"
        color="secondary"
        value={70}
      /> */}
    </Box>
    <Box componenent="div" mt={3}>
      {/* <DashboardTitleProgressBar>Stat perso marrant</DashboardTitleProgressBar>
      <DashboardProgressBar
        variant="determinate"
        color="secondary"
        value={50}
      /> */}
    </Box>
  </>
);

export default UserParams;
