import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Tabs from './Tabs';

import './Dashboard.scss';

const Dashboard = ({ avatarUploadHandler }) => (
  <div id="Dashboard">
    <Header avatarUploadHandler={avatarUploadHandler} />
    <Tabs />
  </div>
);

Dashboard.propTypes = {
  avatarUploadHandler: PropTypes.func.isRequired,
};

export default Dashboard;
