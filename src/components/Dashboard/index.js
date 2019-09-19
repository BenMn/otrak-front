/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Tabs from './Tabs';


import './Dashboard.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    const { getUserFollowings, userInfos, userAuthToken } = this.props;
    getUserFollowings(userInfos.id, userAuthToken);
  }

  render() {
    const {
      avatarUploadHandler,
      handleUsernameInput,
      handleUsernameInputSubmit,
      userAuthInfos,
      handleNewUsername,
      handleOpen,
      userInfos,
      userFollowings,
    } = this.props;
    return (
      <div id="Dashboard">
        <Header
          avatarUploadHandler={avatarUploadHandler}
          handleUsernameInput={handleUsernameInput}
          handleUsernameInputSubmit={handleUsernameInputSubmit}
          userAuthInfos={userAuthInfos}
          handleNewUsername={handleNewUsername}
          handleOpen={handleOpen}
          userInfos={userInfos}
        />
        <Tabs
          userFollowings={userFollowings}
        />
      </div>
    );
  }
}


Dashboard.propTypes = {
  avatarUploadHandler: PropTypes.func.isRequired,
  handleUsernameInput: PropTypes.func.isRequired,
  handleUsernameInputSubmit: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  userInfos: PropTypes.object,
  userFollowings: PropTypes.array,
  userAuthToken: PropTypes.string,
};

Dashboard.defaultProps = {
  userInfos: {},
  userFollowings: [],
  userAuthToken: '',
};

export default Dashboard;
