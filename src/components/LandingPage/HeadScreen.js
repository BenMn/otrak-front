import React from 'react';

import { Grid } from '@material-ui/core';

import {
  HeadScreenSignInButton,
  HeadScreenSignUpButton,
  HeadScreenSearchIcon,
  HeadScreenSearchInput,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

import './LandingPage.scss';

class HeadScreen extends React.Component {
  handleInput = () => {
    const fullSearchBar = document.getElementById('fullSearchBar').parentElement;
    fullSearchBar.classList.add('slide-in-left');
    fullSearchBar.style.display = 'block';
    fullSearchBar.style.borderBottom = '1px solid #fff';

    document.getElementsByClassName('div-input-icon-search').removeEventListener('mouseover', this.handleInput, true);
  }

  render() {
    return (
      <div id="landing-page">
        <div className="screen-landing-page">
          <Grid container justify="space-between" className="header-transparent-navbar">
            <Grid item className="div-input-icon-search">
              <HeadScreenSearchIcon fontSize="large" color="action" onMouseOver={this.handleInput} />
              <HeadScreenSearchInput placeholder="Search…" id="fullSearchBar" />
            </Grid>
            <Grid item>
              <HeadScreenSignInButton variant="text" color="textSecondary">
                Sign in
              </HeadScreenSignInButton>
              <HeadScreenSignUpButton variant="outlined" color="textSecondary">
                Sign up
              </HeadScreenSignUpButton>
            </Grid>
          </Grid>
          <img src="src/styles/assets/images/logos/logo-ban.png" alt="O’Track logo" id="logo-ban" />
        </div>
      </div>
    );
  }
}


export default HeadScreen;
