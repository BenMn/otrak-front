/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

// Import NPM
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import jwt from 'jsonwebtoken';

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

// Local Import
import SmallLoader from 'src/components/Loader/SmallLoader';

import './Navbar.scss';

// Images
import logoOwl from './logo-owl.png';


const Navbar = ({
  // Modal
  handleOpen,
  // Search handlers
  handleSearchInput,
  handleSearchInputSubmit,
  searchInputValue,
  emptySearchResults,
  // Authentification
  isLogged,
  handleLogOut,
  // Loader
  loading,
}) => (
  <div id="Navbar">
    <AppBar position="fixed" style={{ marginTop: -2, backgroundColor: '#212121d5', zIndex: 1 }}>
      <Toolbar>
        <Grid container spacing={2} justify="center">

          {/* Logo */}
          <Grid item lg={3} md={3} sm={3} xs={2}>
            <NavLink exact to="/search">
              <img src={logoOwl} alt="O'Track logo" />
            </NavLink>
          </Grid>

          {/* SearchBar */}
          <Grid item lg={6} md={6} sm={4} xs={4}>
            <NavbarSearch>
              {loading === true ? (
                <SmallLoader />
              ) : (
                <NavbarSearchIcon />
              )}
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

          {isLogged === true ? ( // User is Logged : Dashboard + Log out

            <Grid item lg={3} md={3} sm={5} xs={6}>

              <NavbarLogButton variant="text" color="inherit">
                <NavLink exact to="/" color="inherit" onClick={() => handleLogOut(jwt.decode(localStorage.token))}>
                  Log Out
                </NavLink>
              </NavbarLogButton>

              <NavbarLogButton variant="outlined" color="inherit">
                <NavLink exact to="/dashboard" id="dashboard-nav-button" onClick={() => emptySearchResults()}>
                  Dashboard
                </NavLink>
              </NavbarLogButton>

            </Grid>

          ) : ( // User Not logged : Sign in + Sign up

            <Grid item lg={3} md={3} sm={5} xs={6}>

              <NavbarLogButton variant="outlined" color="inherit" onClick={() => handleOpen('up')}>
                Sign up
              </NavbarLogButton>

              <NavbarLogButton variant="text" color="inherit" onClick={() => handleOpen('in')}>
                Sign in
              </NavbarLogButton>

            </Grid>
          )}

        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

Navbar.propTypes = {
  // Modal
  handleOpen: PropTypes.func.isRequired,
  // Authentification
  isLogged: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  // Search handlers
  searchInputValue: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchInputSubmit: PropTypes.func.isRequired,
  emptySearchResults: PropTypes.func,
  // Loader
  loading: PropTypes.bool.isRequired,
};

Navbar.defaultProps = {
  emptySearchResults: () => { },
};


export default Navbar;
