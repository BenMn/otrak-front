/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Tabs from './Tabs';

import './Dashboard.scss';

const Dashboard = ({
  avatarUploadHandler,
  handleAuthInput,
  handleAuthInputSubmit,
  userAuthInfos,
  handleNewUsername,
  handleOpen,
}) => (
  <div id="Dashboard">
    <Header
      avatarUploadHandler={avatarUploadHandler}
      handleAuthInput={handleAuthInput}
      handleAuthInputSubmit={handleAuthInputSubmit}
      userAuthInfos={userAuthInfos}
      handleNewUsername={handleNewUsername}
      handleOpen={handleOpen}
    />
    <Tabs />
  </div>
);

Dashboard.propTypes = {
  avatarUploadHandler: PropTypes.func.isRequired,
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
  handleNewUsername: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default Dashboard;
