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
  viewModal,
  modalName,
  handleOpen,
}) => (
  <>
    <Box componenent="div" disabled mt={5}>
      <DashboardHeaderButtons
        variant="contained"
        color="secondary"
        onClick={(event) => handleOpen(event, 'history')}
      >
        <DashboardHeaderButtonsHistoryIcon />
        History
      </DashboardHeaderButtons>
    </Box>

    <Box componenent="div" disabled mt={5}>
      <DashboardHeaderButtons
        variant="contained"
        color="primary"
        onClick={(event) => handleOpen(event)}
      >
        <DashboardHeaderButtonsSettingsIcon />
        Account settings
      </DashboardHeaderButtons>
    </Box>

    {/* eslint-disable-next-line max-len */}
    {open === true && (
      <LogFormsModal
        viewModal={viewModal}
        modalName={modalName}
        handleOpen={handleOpen}
      />
    )}
  </>
);

ConfigButtons.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  viewModal: PropTypes.string,
  modalName: PropTypes.string,
};

ConfigButtons.defaultProps = {
  open: false,
  viewModal: '',
  modalName: '',
};

export default ConfigButtons;
