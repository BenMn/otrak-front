import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import {
  HeadScreenSignInButton,
  HeadScreenSignUpButton,
  HeadScreenSearchIcon,
  HeadScreenSearchInput,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

import './LandingPage.scss';

import LogFormsModal from 'src/containers/LogForms';

class HeadScreen extends React.Component {
  handleInput = () => {
    const fullSearchBar = document.getElementById('fullSearchBar').parentElement;
    fullSearchBar.classList.add('slide-in-left');
    fullSearchBar.style.display = 'block';
    fullSearchBar.style.borderBottom = '1px solid #fff';

    document.getElementsByClassName('div-input-icon-search').removeEventListener('mouseover', this.handleInput, true);
  }

  handleButtonClick = (event) => {
    event.persist();
    const viewName = event.target.innerHTML;
    const { handleOpen } = this.props;
    handleOpen(viewName);
  }

  render() {
    const { open, viewModal } = this.props;
    return (
      <div id="landing-page">
        <div className="screen-landing-page">
          <Grid container justify="space-between" className="header-transparent-navbar">
            <Grid item className="div-input-icon-search">
              <HeadScreenSearchIcon fontSize="large" color="action" onMouseOver={this.handleInput} />
              <HeadScreenSearchInput placeholder="Search…" id="fullSearchBar" />
            </Grid>
            <Grid item>
              <HeadScreenSignInButton variant="text" onClick={this.handleButtonClick}>
                Sign in
              </HeadScreenSignInButton>
              <HeadScreenSignUpButton variant="outlined" onClick={this.handleButtonClick}>
                Sign up
              </HeadScreenSignUpButton>
              {open === true && <LogFormsModal viewModal={viewModal} />}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

HeadScreen.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  viewModal: PropTypes.string,
};

HeadScreen.defaultProps = {
  open: false,
  viewModal: '',
};

export default HeadScreen;
