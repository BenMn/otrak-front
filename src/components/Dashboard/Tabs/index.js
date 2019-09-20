/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  AppBar,
  Tabs,
  Typography,
} from '@material-ui/core';

import {
  DashboardTab,
  DashboardBoxOfCards,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

import './Tabs.scss';
import Cards from './Cards';

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <DashboardBoxOfCards p={3}>{children}</DashboardBoxOfCards>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

TabPanel.defaultProps = {
  children: () => { },
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AllTabs = ({ userFollowings }) => {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>

      <AppBar position="static">
        <Tabs
          centered
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <DashboardTab label="Watching" {...a11yProps(0)} />
          <DashboardTab label="Completed" {...a11yProps(1)} />
          <DashboardTab label="See Next" {...a11yProps(2)} />
          <DashboardTab label="Upcoming" {...a11yProps(3)} />
          <DashboardTab label="Stopped" {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      {/* Watching */}
      <TabPanel value={value} index={0}>
        <Grid container spacing={6} justify="center">
          <Cards
            userFollowings={userFollowings}
          />
        </Grid>
      </TabPanel>

      {/* Completed */}
      <TabPanel value={value} index={1}>
        <Grid container spacing={6} justify="center">
          <Cards
            userFollowings={userFollowings}
          />
        </Grid>
      </TabPanel>

      {/* See Next */}
      <TabPanel value={value} index={2}>
        <Grid container spacing={6} justify="center">
          <Cards
            userFollowings={userFollowings}
          />
        </Grid>
      </TabPanel>

      {/* Upcoming */}
      <TabPanel value={value} index={3}>
        <Grid container spacing={6} justify="center">
          <Cards
            userFollowings={userFollowings}
          />
        </Grid>
      </TabPanel>

      {/* Stopped */}
      <TabPanel value={value} index={4}>
        <Grid container spacing={6} justify="center">
          <Cards
            userFollowings={userFollowings}
          />
        </Grid>
      </TabPanel>

    </>
  );
};

AllTabs.propTypes = {
  userFollowings: PropTypes.array,
};

AllTabs.defaultProps = {
  userFollowings: [],
};

export default AllTabs;
