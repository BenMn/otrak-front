import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
} from '@material-ui/core';

import {
  DashboardHeaderButtons,
  DashboardHeaderButtonsHistoryIcon,
  DashboardHeaderButtonsSettingsIcon,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

import LogFormsModal from 'src/containers/LogForms';

const ConfigButtons = ({
  open,
  modalName,
  handleOpen,
}) => (
  <>
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

    {/* eslint-disable-next-line max-len */}
    {open === true && (
      <LogFormsModal
        modalName={modalName}
        handleOpen={handleOpen}
      />
    )}
  </>
);

ConfigButtons.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  modalName: PropTypes.string,
};

ConfigButtons.defaultProps = {
  open: false,
  modalName: '',
};

export default ConfigButtons;
