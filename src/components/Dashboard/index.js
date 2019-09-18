/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Tabs from './Tabs';


import './Dashboard.scss';

const Dashboard = ({
  avatarUploadHandler,
  handleUsernameInput,
  handleUsernameInputSubmit,
  userAuthInfos,
  handleNewUsername,
  handleOpen,
  userInfos,
  userAvatar,
}) => (
  <div id="Dashboard">
    <Header
      avatarUploadHandler={avatarUploadHandler}
      handleUsernameInput={handleUsernameInput}
      handleUsernameInputSubmit={handleUsernameInputSubmit}
      userAuthInfos={userAuthInfos}
      handleNewUsername={handleNewUsername}
      handleOpen={handleOpen}
      userInfos={userInfos}
      userAvatar={userAvatar}
    />
    <Tabs />
  </div>
);

Dashboard.propTypes = {
  avatarUploadHandler: PropTypes.func.isRequired,
  handleUsernameInput: PropTypes.func.isRequired,
  handleUsernameInputSubmit: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  userInfos: PropTypes.object,
  userAvatar: PropTypes.string.isRequired,
};

Dashboard.defaultProps = {
  userInfos: {},
};

export default Dashboard;
