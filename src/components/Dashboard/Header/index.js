/* eslint-disable react/prop-types */

// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {
  Grid,
} from '@material-ui/core';

// Material UI Custom Components
import {
  DashboardHeaderConainer,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

// Local imports
import UserParams from './UserParams';
import UserInfos from './UserInfos';
import ConfigButtons from './ConfigButtons';

// CSS Local Styling
import '../Dashboard.scss';

const Header = ({
  // User infos
  userAuthInfos,
  userInfos,
  // Change username handlers
  handleUsernameInput,
  handleUsernameInputSubmit,
  handleNewUsername,
  // Modals
  handleOpen,
  // avatarUploadHandler,
}) => (
  <div id="Header">

    <DashboardHeaderConainer>

      <Grid container align="center" spacing={5}>

        {/* [LEFT SIDE] User Personal stats */}
        <Grid item lg={4} md={4} xs={12} align="start">
          <UserParams />
        </Grid>

        {/* [MIDDLE] User Infos */}
        <Grid item lg={4} md={4} xs={12}>
          <UserInfos
            // avatarUploadHandler={avatarUploadHandler}
            handleUsernameInput={handleUsernameInput}
            handleUsernameInputSubmit={handleUsernameInputSubmit}
            userAuthInfos={userAuthInfos}
            handleNewUsername={handleNewUsername}
            userInfos={userInfos}
          />
        </Grid>

        {/* [RIGHT SIDE] History and Account Settings Modals */}
        <Grid item lg={4} md={4} xs={12} align="end">
          <ConfigButtons handleOpen={handleOpen} />
        </Grid>

      </Grid>

    </DashboardHeaderConainer>

  </div>
);

Header.propTypes = {
  // User infos
  userInfos: PropTypes.object,
  // Change username handlers
  handleUsernameInput: PropTypes.func.isRequired,
  handleUsernameInputSubmit: PropTypes.func.isRequired,
  // Modals
  handleOpen: PropTypes.func.isRequired,
  // avatarUploadHandler: PropTypes.func.isRequired,
};

Header.defaultProps = {
  userInfos: {},
};

export default Header;
