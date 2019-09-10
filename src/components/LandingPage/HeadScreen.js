import React from 'react';
import PropTypes from 'prop-types';
import theme from 'src/styles/materialUi/materialUiTheme/theme';

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
    fullSearchBar.style.borderBottom = `1px solid ${theme.palette.secondary.main}`;

    document.getElementsByClassName('div-input-icon-search').removeEventListener('mouseover', this.handleInput, true);
  }

  render() {
    const {
      open,
      viewModal,
      formName,
      handleOpen,
      inputValue,
      handleInput,
      handleInputSubmit,
    } = this.props;
    return (
      <div id="landing-page">
        <div className="screen-landing-page">
          <Grid container justify="space-between" className="header-transparent-navbar">
            <Grid item className="div-input-icon-search">
              <HeadScreenSearchIcon fontSize="large" color="action" onMouseOver={this.handleInput} />

              <form onSubmit={(event) => handleInputSubmit(event, inputValue)} id="form-submit">
                <HeadScreenSearchInput
                  placeholder="Try Game Of Thrones, Naruto..."
                  id="fullSearchBar"
                  value={inputValue}
                  onChange={(event) => handleInput(event.target.value)}
                />
              </form>

            </Grid>
            <Grid item>
              <HeadScreenSignInButton
                variant="text"
                onClick={(event) => handleOpen(event)}
              >
                Sign in
              </HeadScreenSignInButton>

              <HeadScreenSignUpButton
                variant="outlined"
                onClick={(event) => handleOpen(event)}
              >
                Sign up
              </HeadScreenSignUpButton>
              {/* eslint-disable-next-line max-len */}
              {open === true && (
                <LogFormsModal
                  viewModal={viewModal}
                  formName={formName}
                  handleOpen={handleOpen}
                />
              )}
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
  formName: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleInputSubmit: PropTypes.func.isRequired,
};

HeadScreen.defaultProps = {
  open: false,
  viewModal: '',
  formName: '',
};

export default HeadScreen;
