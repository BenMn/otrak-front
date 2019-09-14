import React from 'react';
import PropTypes from 'prop-types';

// import Material UI components
import {
  Grid,
  Typography,
  Toolbar,
} from '@material-ui/core';

// import custom Material UI components
import {
  FooterAppBar,
  FooterButton,
  FooterIcon,
} from 'src/styles/materialUi/materialUiStyles/Footer';

// Material UI Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Authentification modals
import LogFormsModal from 'src/containers/LogForms';

import './Footer.scss';

const Footer = ({ open, handleOpen }) => (
  <div id="Footer">
    <FooterAppBar position="static">
      <Toolbar>

        <Grid container>
          <Grid item lg={1} md={1} xs={1}>
            {/* Logo */}
            <img src="src/styles/assets/images/logos/logo-owl.png" alt="O’Track logo" id="FooterLogo" />
          </Grid>

          <Grid item lg={4} md={3} xs={3}>
            <Typography variant="h6">
              All your favorites shows
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              Made with &hearts; by The DreamTeam &copy; 2019
            </Typography>
          </Grid>

          <Grid item lg={5} md={7} xs={7}>
            {/* Central buttons */}
            <FooterButton variant="outlined" color="inherit" onClick={() => handleOpen('up')}>
              REGISTER NOW !
            </FooterButton>
            {open === true && <LogFormsModal />}

            <FooterButton color="inherit">TEAM</FooterButton>
            <FooterButton color="inherit">LEGAL</FooterButton>
            <FooterButton color="inherit">CONTACT</FooterButton>

          </Grid>
          <Grid item lg={2} md={1} xs={1}>
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

Footer.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
};

Footer.defaultProps = {
  open: false,
  handleOpen: () => { },
};

export default Footer;
