import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  Toolbar,
  Grid,
} from '@material-ui/core';

import {
  NavbarSearch,
  NavbarSearchInput,
  NavbarSearchIcon,
  NavbarLogButton,
} from 'src/styles/materialUi/materialUiStyles/Navbar';

import './Navbar.scss';

import LogFormsModal from 'src/containers/LogForms';

class Navbar extends React.Component {
  handleButtonClick = (event) => {
    event.persist();
    const viewName = event.target.innerHTML;
    const { handleOpen } = this.props;
    handleOpen(viewName);
  }

  render() {
    const { open, view } = this.props;
    return (
      <div id="Navbar">

        <AppBar position="static">
          <Toolbar>
            <Grid container spacing={2} justify="center">

              {/* Logo */}
              <Grid item lg={3} md={3} xs={3}>
                <img src="src/styles/assets/images/logo-V2.png" alt="O'Track logo" />
              </Grid>

              {/* SearchBar */}
              <Grid item lg={6} md={6} xs={4}>
                <NavbarSearch>
                  <NavbarSearchIcon />
                  <NavbarSearchInput
                    color="textPrimary"
                    placeholder="Start looking for a show..."
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </NavbarSearch>
              </Grid>

              {/* Buttons */}
              <Grid item lg={3} md={3} xs={5}>
                <NavbarLogButton variant="outlined" color="inherit" onClick={this.handleButtonClick}>
                  Sign up
                </NavbarLogButton>
                <NavbarLogButton variant="text" color="inherit" onClick={this.handleButtonClick}>
                    Sign in
                </NavbarLogButton>
                {open === true && <LogFormsModal view={view} />}
              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  view: PropTypes.string,
};

Navbar.defaultProps = {
  open: false,
  view: '',
};

export default Navbar;
