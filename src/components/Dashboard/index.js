/* eslint-disable react/prop-types */

// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Local imports
import Header from './Header';
import Tabs from './Tabs';

// CSS Local Styling
import './Dashboard.scss';


class Dashboard extends React.Component {
  componentDidMount() {
    // On load, get all current user infos
    const { getUserFollowings, userInfos } = this.props;
    getUserFollowings(userInfos.id);
  }

  render() {
    const {
      stopFollowingShow,
      getDetailShow,
      // User infos
      userInfos,
      userAuthInfos,
      userFollowings,
      // Username change handler
      handleUsernameInput,
      handleUsernameInputSubmit,
      handleNewUsername,
      // Modal
      handleOpen,
      // avatarUploadHandler,
    } = this.props;
    return (
      <div id="Dashboard">
        <Header
          // avatarUploadHandler={avatarUploadHandler}
          handleUsernameInput={handleUsernameInput}
          handleUsernameInputSubmit={handleUsernameInputSubmit}
          userAuthInfos={userAuthInfos}
          handleNewUsername={handleNewUsername}
          handleOpen={handleOpen}
          userInfos={userInfos}
        />
        <Tabs
          userFollowings={userFollowings}
          getDetailShow={getDetailShow}
          stopFollowingShow={stopFollowingShow}
          handleOpen={handleOpen}
          userInfos={userInfos}
        />
      </div>
    );
  }
}


Dashboard.propTypes = {
  getDetailShow: PropTypes.func.isRequired,
  // User infos
  userInfos: PropTypes.object,
  userFollowings: PropTypes.array,
  // Username change handler
  handleUsernameInput: PropTypes.func.isRequired,
  handleUsernameInputSubmit: PropTypes.func.isRequired,
  // Modal
  handleOpen: PropTypes.func.isRequired,
  // avatarUploadHandler: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  userInfos: {},
  userFollowings: [],
};

export default Dashboard;
