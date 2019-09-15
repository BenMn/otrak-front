// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
  isLogged,
  handleLogOut,
}) => (
  <div id="Navbar">
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={2} justify="center">

          {/* Logo */}
          <Grid item lg={3} md={3} sm={3} xs={2}>
            <NavLink exact to="/search">
              <img src="src/styles/assets/images/logos/logo-owl.png" alt="O'Track logo" />
            </NavLink>
          </Grid>

          {/* SearchBar */}
          <Grid item lg={6} md={6} sm={4} xs={4}>
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
          {isLogged === true ? (
            <Grid item lg={3} md={3} sm={5} xs={6}>
              <NavbarLogButton variant="text" color="inherit" onClick={handleLogOut}>
                Log Out
              </NavbarLogButton>
              <NavbarLogButton variant="outlined" color="inherit">
                <NavLink exact to="/dashboard" color="inherit">
                  Dashboard
                </NavLink>
              </NavbarLogButton>
              {open === true && <LogFormsModal />}
            </Grid>
          ) : (
            <Grid item lg={3} md={3} sm={5} xs={6}>
              <NavbarLogButton variant="outlined" color="inherit" onClick={() => handleOpen('up')}>
                Sign up
              </NavbarLogButton>
              <NavbarLogButton variant="text" color="inherit" onClick={() => handleOpen('in')}>
                Sign in
              </NavbarLogButton>
              {open === true && <LogFormsModal />}
            </Grid>
          )}

        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

Navbar.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchInputSubmit: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

Navbar.defaultProps = {
  open: false,
};


export default Navbar;
