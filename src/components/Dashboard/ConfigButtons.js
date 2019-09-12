import React from 'react';

import {
  Box,
} from '@material-ui/core';

import {
  DashboardHeaderButtons,
  DashboardHeaderButtonsHistoryIcon,
  DashboardHeaderButtonsSettingsIcon,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';


const ConfigButtons = () => (
  <>
    <Box componenent="div" disabled mt={5}>
      <DashboardHeaderButtons variant="contained" color="secondary">
        <DashboardHeaderButtonsHistoryIcon />
        History
      </DashboardHeaderButtons>
    </Box>

    <Box componenent="div" disabled mt={5}>
      <DashboardHeaderButtons variant="contained" color="primary">
        <DashboardHeaderButtonsSettingsIcon />
        Account settings
      </DashboardHeaderButtons>
    </Box>
  </>
);

export default ConfigButtons;
