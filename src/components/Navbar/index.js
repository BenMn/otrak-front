import React from 'react';
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
} from 'src/styles/materialUi/materialUiStyles/styles';


import './Navbar.scss';

const Navbar = () => (
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
                placeholder="Start looking for a show..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </NavbarSearch>
          </Grid>

          {/* Buttons */}
          <Grid item lg={3} md={3} xs={5}>
            <NavbarLogButton variant="outlined" color="inherit">
              Sign up
            </NavbarLogButton>
            <NavbarLogButton variant="text" color="inherit">
              Sign in
            </NavbarLogButton>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
