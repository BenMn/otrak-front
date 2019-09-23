// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {
  Box,
} from '@material-ui/core';

// Material UI Custom Components
import {
  DashboardHeaderButtons,
  DashboardHeaderButtonsHistoryIcon,
  DashboardHeaderButtonsSettingsIcon,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';


const ConfigButtons = ({
  handleOpen,
}) => (
  <>
    {/* History */}
    <Box componenent="div" disabled mt={5}>
      <DashboardHeaderButtons
        variant="contained"
        color="secondary"
        onClick={() => handleOpen('history')}
      >
        <DashboardHeaderButtonsHistoryIcon />
        History
      </DashboardHeaderButtons>
    </Box>

    {/* Account settings */}
    <Box componenent="div" disabled my={5}>
      <DashboardHeaderButtons
        variant="contained"
        color="primary"
        onClick={() => handleOpen('account')}
      >
        <DashboardHeaderButtonsSettingsIcon />
        Account settings
      </DashboardHeaderButtons>
    </Box>

  </>
);

ConfigButtons.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default ConfigButtons;
