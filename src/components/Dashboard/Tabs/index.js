/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  AppBar,
  Tabs,
  Typography,
  Box,
} from '@material-ui/core';

import {
  DashboardTab,
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
      <Box p={3}>{children}</Box>
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

export default function TabsTest() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>

      <AppBar position="static">
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
          <DashboardTab label="Watching" {...a11yProps(0)} />
          <DashboardTab label="Completed" {...a11yProps(1)} />
          <DashboardTab label="See Next" {...a11yProps(2)} />
          <DashboardTab label="Stopped" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      {/* Watching */}
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} justify="center">
          <Cards />
        </Grid>
      </TabPanel>

      {/* Completed */}
      <TabPanel value={value} index={1}>
        <Grid container spacing={2} justify="center">
          <Cards />
        </Grid>
      </TabPanel>

      {/* See Next */}
      <TabPanel value={value} index={2}>
        <Grid container spacing={2} justify="center">
          <Cards />
        </Grid>
      </TabPanel>

      {/* Stopped */}
      <TabPanel value={value} index={3}>
        <Grid container spacing={2} justify="center">
          <Cards />
        </Grid>
      </TabPanel>

    </>
  );
}
