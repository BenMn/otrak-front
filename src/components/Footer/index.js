import React from 'react';
import {
  Grid,
  Avatar,
  Button,
  Typography,
  Toolbar,
  AppBar,
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item lg={3}>
              <Avatar alt="Avatar Otrak" src="" />
              <Typography variant="h6">
                Track all your favorites shows
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Button color="inherit">REGISTER NOW !</Button>
              <Button color="inherit">TEAM</Button>
              <Button color="inherit">LEGAL</Button>
              <Button color="inherit">CONTACT</Button>
            </Grid>
            <Typography> Made with &hearts; by The DreamTeam &copy; 2019</Typography>
            <Grid item lg={3}>
              <FontAwesomeIcon icon={faGithub} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
