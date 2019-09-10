import React from 'react';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
    fullSearchBar.style.borderBottom = `1px solid ${theme.palette.common.white}`;
  }

  render() {
    const { changeView } = this.props;
    return (
      <div id="landing-page">
        <div className="screen-landing-page">
          <Grid container justify="space-between" className="header-transparent-navbar">
            <Grid item className="div-input-icon-search">
              <HeadScreenSearchIcon fontSize="large" onMouseOver={this.handleInput} />
              <HeadScreenSearchInput placeholder="Search…" id="fullSearchBar" />
            </Grid>
            <Grid item>

              <NavLink to="/login" onClick={() => changeView('login')}>
                <HeadScreenSignInButton variant="text">
                  Log in
                </HeadScreenSignInButton>
              </NavLink>

              <NavLink to="/register" onClick={() => changeView('register')}>
                <HeadScreenSignUpButton variant="outlined">
                  Sign up
                </HeadScreenSignUpButton>
              </NavLink>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

HeadScreen.propTypes = {
  changeView: PropTypes.func.isRequired,
};

export default HeadScreen;
