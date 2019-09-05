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
} from 'src/styles/materialUi/materialUiStyles/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = () => (
  <div id="Footer">
    <FooterAppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={1}>
            {/* Logo */}
            <FooterAvatar src="src/styles/assets/images/logo-V2.png" alt="O’Track logo" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              All your favorites shows
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              Made with &hearts; by The DreamTeam &copy; 2019
            </Typography>

          </Grid>
          <Grid item xs={5}>
            {/* Central buttons */}
            <FooterButton variant="outlined" color="inherit">REGISTER NOW !</FooterButton>
            <FooterButton color="inherit">TEAM</FooterButton>
            <FooterButton color="inherit">LEGAL</FooterButton>
            <FooterButton color="inherit">CONTACT</FooterButton>
          </Grid>
          <Grid item xs={2}>
            {/* GitHub icon  */}
            <FooterIcon>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </FooterIcon>
          </Grid>
        </Grid>
      </Toolbar>
    </FooterAppBar>
  </div>
);

export default Footer;
