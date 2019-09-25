/* eslint-disable react/jsx-props-no-spreading */

// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {
  Grid,
  AppBar,
  Tabs,
  Typography,
} from '@material-ui/core';

// Material UI Custom Components
import {
  DashboardTab,
  DashboardBoxOfCards,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

// Local Import
import Loader from 'src/components/Loader/PrimaryLoader';
import { SortShowFollowedByStatus } from 'src/utils';
import Cards from './Cards';

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    // Switch tab function
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

const AllTabs = ({ userFollowings, getDetailShow, stopFollowingShow }) => {
  function scroolToTop() {
    window.scrollTo(0, 0);
  }
  scroolToTop();
  const [value, setValue] = React.useState(0);

  // Filter function > All shows by status
  // Returns 5 arrays; the order (index) is the same as :
  // > the Tabs title
  // > the const status
  const userFollowingsShowsSortedByStatus = SortShowFollowedByStatus(userFollowings);
  console.log(userFollowingsShowsSortedByStatus, 'aaaaaaaaaaaaaaaaa');

  // Change tab handler
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const status = [0, 1, 2, 3, 4];

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
          {/* Tabs Title */}
          <DashboardTab label="Watching" {...a11yProps(0)} />
          <DashboardTab label="Completed" {...a11yProps(1)} />
          <DashboardTab label="See Next" {...a11yProps(2)} />
          <DashboardTab label="Upcoming" {...a11yProps(3)} />
          <DashboardTab label="Stopped" {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      {/*
        1. Map on the status array #[0, 1, 2, 3, 4]
        2. Check if the current user has followings (no matter the status)
        3. Map on the filtred array 'Following by Status'
        4. Check if the index of the current array
          (corresponding of the categorie of status)
          is the same as the current status mapped
      */}

      {status.map((statut) => ( // Step 1
        <TabPanel value={value} index={statut} key={`${value}${statut}`}>
          {userFollowings.length > 1 ? ( // Step 2
            userFollowingsShowsSortedByStatus.map((filtredArray, index) => ( // Step 3
              index === statut && ( // Step 4
                <Grid container spacing={6} justify="center" key={`${value}${statut}`}>
                  <Cards
                    filtredArray={filtredArray}
                    getDetailShow={getDetailShow}
                    stopFollowingShow={stopFollowingShow}
                  />
                </Grid>
              )))
          ) : (
            <Loader />
          )}
        </TabPanel>
      ))}
    </>
  );
};

AllTabs.propTypes = {
  userFollowings: PropTypes.array,
  getDetailShow: PropTypes.func.isRequired,
  stopFollowingShow: PropTypes.func.isRequired,
};

AllTabs.defaultProps = {
  userFollowings: [],
};

export default AllTabs;
