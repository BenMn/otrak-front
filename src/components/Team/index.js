/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  AppBar,
  Tabs,
  Typography,
  CardActionArea,
} from '@material-ui/core';

import {
  DashboardTab,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

import {
  TeamCardMedia,
  TeamBoxOfCards,
} from 'src/styles/materialUi/materialUiStyles/Team';

import {
  HomePageCard,
  HomePageCardTitle,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

// Images
import remi from './images/remi.jpg';
import cedric from './images/cedric.jpg';
import ben from './images/ben.jpg';
// import lea from './images/lea.jpg';

import 'src/components/Dashboard/Tabs/Tabs.scss';

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
      <TeamBoxOfCards p={3}>{children}</TeamBoxOfCards>
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
        <Tabs
          centered
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <DashboardTab label="Product Owner" {...a11yProps(0)} />
          <DashboardTab label="Product Manager" {...a11yProps(1)} />
          <DashboardTab label="Lead Back" {...a11yProps(2)} />
          <DashboardTab label="Lead Front" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      {/* Product Owner */}
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} justify="center">
          <Grid
            container
            justify="center"
          >
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <HomePageCard>
                <CardActionArea>
                  <TeamCardMedia image={remi}>

                    <AiredTitleCardAndSubtitle
                      container
                      alignItems="flex-end"
                    >
                      <Grid />
                      <HomePageCardTitle variant="h5" component="h2">
                        RÉMI
                      </HomePageCardTitle>
                      <AiredSubtitleSeasonEpisode>REACT</AiredSubtitleSeasonEpisode>
                    </AiredTitleCardAndSubtitle>
                  </TeamCardMedia>
                </CardActionArea>
              </HomePageCard>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>

      {/* Produc Manager */}
      <TabPanel value={value} index={1}>
        <Grid container spacing={2} justify="center">
          <Grid
            container
            justify="center"
          >
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <HomePageCard>
                <CardActionArea>
                  <TeamCardMedia image={cedric}>

                    <AiredTitleCardAndSubtitle
                      container
                      alignItems="flex-end"
                    >
                      <Grid />
                      <HomePageCardTitle variant="h5" component="h2">
                        CÉDRIC
                      </HomePageCardTitle>
                      <AiredSubtitleSeasonEpisode>SYMFONY</AiredSubtitleSeasonEpisode>
                    </AiredTitleCardAndSubtitle>
                  </TeamCardMedia>
                </CardActionArea>
              </HomePageCard>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>

      {/* Lead Back */}
      <TabPanel value={value} index={2}>
        <Grid container spacing={2} justify="center">
          <Grid
            container
            justify="center"
          >
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <HomePageCard>
                <CardActionArea>
                  <TeamCardMedia image={ben}>

                    <AiredTitleCardAndSubtitle
                      container
                      alignItems="flex-end"
                    >
                      <Grid />
                      <HomePageCardTitle variant="h5" component="h2">
                        BEN
                      </HomePageCardTitle>
                      <AiredSubtitleSeasonEpisode>SYMFONY</AiredSubtitleSeasonEpisode>
                    </AiredTitleCardAndSubtitle>
                  </TeamCardMedia>
                </CardActionArea>
              </HomePageCard>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>

      {/* Lead Front */}
      <TabPanel value={value} index={3}>
        <Grid container spacing={2} justify="center">
          <Grid
            container
            justify="center"
          >
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <HomePageCard>
                <CardActionArea>
                  <TeamCardMedia image="/src/styles/assets/images/avatars/avatar.jpg">

                    <AiredTitleCardAndSubtitle
                      container
                      alignItems="flex-end"
                    >
                      <Grid />
                      <HomePageCardTitle variant="h5" component="h2">
                        LÉA
                      </HomePageCardTitle>
                      <AiredSubtitleSeasonEpisode>REACT</AiredSubtitleSeasonEpisode>
                    </AiredTitleCardAndSubtitle>
                  </TeamCardMedia>
                </CardActionArea>
              </HomePageCard>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>

    </>
  );
}
