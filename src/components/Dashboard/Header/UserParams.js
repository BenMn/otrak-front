import React from 'react';

import {
  Box,
  Typography,
} from '@material-ui/core';

import {
  DashboardProgressBar,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

const UserParams = () => (
  <>
    <Box componenent="div" mt={3}>
      <Typography color="textPrimary">Stat perso marrant</Typography>
      <DashboardProgressBar
        variant="determinate"
        color="secondary"
        value={20}
      />
    </Box>
    <Box componenent="div" mt={3}>
      <Typography color="textPrimary">Stat perso marrant</Typography>
      <DashboardProgressBar
        variant="determinate"
        color="secondary"
        value={70}
      />
    </Box>
    <Box componenent="div" mt={3}>
      <Typography color="textPrimary">Stat perso marrant</Typography>
      <DashboardProgressBar
        variant="determinate"
        color="secondary"
        value={50}
      />
    </Box>
  </>
);

export default UserParams;
