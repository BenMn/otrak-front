// import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import material UI components
import {
  AppBar,
  Toolbar,
  Grid,
} from '@material-ui/core';

// Import material UI custom components
import {
  NavbarSearch,
  NavbarSearchInput,
  NavbarSearchIcon,
  NavbarLogButton,
} from 'src/styles/materialUi/materialUiStyles/Navbar';

// Authentification modals
import LogFormsModal from 'src/containers/LogForms';

import './Navbar.scss';


const Navbar = ({
  open,
  handleOpen,
  handleSearchInput,
  handleSearchInputSubmit,
  searchInputValue,
}) => (
  <div id="Navbar">
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={2} justify="center">

          {/* Logo */}
          <Grid item lg={3} md={3} xs={3}>
            <img src="src/styles/assets/images/logos/logo-owl.png" alt="O'Track logo" />
          </Grid>

          {/* SearchBar */}
          <Grid item lg={6} md={6} xs={4}>
            <NavbarSearch>
              <NavbarSearchIcon />
              <form onSubmit={(event) => handleSearchInputSubmit(event, searchInputValue)} id="form-submit">
                <NavbarSearchInput
                  color="textPrimary"
                  placeholder="Start looking for a show..."
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchInputValue}
                  onChange={(event) => handleSearchInput(event.target.value)}
                />
              </form>
            </NavbarSearch>
          </Grid>

          {/* Buttons */}
          <Grid item lg={3} md={3} xs={5}>
            <NavbarLogButton variant="outlined" color="inherit" onClick={() => handleOpen('up')}>
              Sign up
            </NavbarLogButton>
            <NavbarLogButton variant="text" color="inherit" onClick={() => handleOpen('in')}>
              Sign in
            </NavbarLogButton>
            {open === true && <LogFormsModal />}
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

Navbar.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchInputSubmit: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  open: false,
};


export default Navbar;
