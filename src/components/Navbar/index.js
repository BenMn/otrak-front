import React from 'react';
import {
  AppBar,
  Toolbar,
  InputBase,
  Button,
  Grid,
  Avatar,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import FolderIcon from '@material-ui/icons/Folder';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Grid container spacing={2} justify="center">
        <Grid item xs={3}>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </Grid>

        <Grid item xs={6}>
          <div>
            <div>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Recherche..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Grid>

        <Grid item xs={3}>
          <Button variant="outlined" color="inherit">
            Sign up
          </Button>
          <Button variant="text" color="inherit">
            Sign in
          </Button>
        </Grid>

      </Grid>
    </Toolbar>
  </AppBar>
);

export default Navbar;
