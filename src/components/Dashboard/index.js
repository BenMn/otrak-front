/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Tabs from './Tabs';


import './Dashboard.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchUserProfileInfos, userAuthToken } = this.props;
    fetchUserProfileInfos(userAuthToken);
  }

  render() {
    const {
      avatarUploadHandler,
      handleAuthInput,
      handleAuthInputSubmit,
      userAuthInfos,
      handleNewUsername,
      handleOpen,
      userInfos,
    } = this.props;
    return (
      <div id="Dashboard">
        <Header
          avatarUploadHandler={avatarUploadHandler}
          handleAuthInput={handleAuthInput}
          handleAuthInputSubmit={handleAuthInputSubmit}
          userAuthInfos={userAuthInfos}
          handleNewUsername={handleNewUsername}
          handleOpen={handleOpen}
          userInfos={userInfos}
        />
        <Tabs />
      </div>
    );
  }
}

Dashboard.propTypes = {
  avatarUploadHandler: PropTypes.func.isRequired,
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
  handleNewUsername: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  fetchUserProfileInfos: PropTypes.func.isRequired,
  userAuthToken: PropTypes.string,
  userInfos: PropTypes.object,
};

Dashboard.defaultProps = {
  userAuthToken: '',
  userInfos: {},
};

export default Dashboard;
