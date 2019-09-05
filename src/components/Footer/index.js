import React from 'react';
import {
  Grid,
  Typography,
  Toolbar,
} from '@material-ui/core';

import {
  FooterAppBar,
  FooterAvatar,
  FooterButton,
  FooterIcon,
} from 'src/styles/materialUi/materialUiStyles/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div>
      <FooterAppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <FooterAvatar src="src/styles/assets/images/logo-V2.png" alt="O’Track logo" />
              <Typography variant="h6">
                Track all your favorites shows
              </Typography>
              <Typography color="textSecondary"> Made with &hearts; by The DreamTeam &copy; 2019</Typography>
            </Grid>
            <Grid item xs={6}>
              <FooterButton variant="outlined" color="inherit">REGISTER NOW !</FooterButton>
              <FooterButton color="inherit">TEAM</FooterButton>
              <FooterButton color="inherit">LEGAL</FooterButton>
              <FooterButton color="inherit">CONTACT</FooterButton>
            </Grid>
            <Grid item xs>
              <FooterIcon>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </FooterIcon>
            </Grid>
          </Grid>
        </Toolbar>
      </FooterAppBar>
    </div>
  );
}
