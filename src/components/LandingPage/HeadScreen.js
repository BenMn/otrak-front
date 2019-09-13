// Import Npm
import React from 'react';
import PropTypes from 'prop-types';
import theme from 'src/styles/materialUi/materialUiTheme/theme';

// import material UI components
import { Grid } from '@material-ui/core';

// import material UI custom components
import {
  HeadScreenSignInButton,
  HeadScreenSignUpButton,
  HeadScreenSearchIcon,
  HeadScreenSearchInput,
  HeadScreenSlogan,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

// Authentification form modal
import LogFormsModal from 'src/containers/LogForms';

import './LandingPage.scss';


class HeadScreen extends React.Component {
  // Top search bar animation slide right
  handleSearchInput = () => {
    const fullSearchBar = document.getElementById('fullSearchBar').parentElement;
    fullSearchBar.classList.add('slide-in-left');
    fullSearchBar.style.display = 'block';
    fullSearchBar.style.borderBottom = `1px solid ${theme.palette.secondary.main}`;
  }

  render() {
    const {
      open,
      viewModal,
      modalName,
      handleOpen,
      searchInputValue,
      handleSearchInput,
      handleSearchInputSubmit,
    } = this.props;
    return (
      <div id="landing-page">
        <div className="screen-landing-page">
          <Grid container justify="space-between" className="header-transparent-navbar">
            <Grid item className="div-input-icon-search">
              <HeadScreenSearchIcon fontSize="large" color="action" onMouseOver={this.handleSearchInput} />

              {/* searchBar */}
              <form onSubmit={(event) => handleSearchInputSubmit(event, searchInputValue)} id="form-submit">
                <HeadScreenSearchInput
                  placeholder="Try Game Of Thrones, Naruto..."
                  id="fullSearchBar"
                  value={searchInputValue}
                  onChange={(event) => handleSearchInput(event.target.value)}
                />
              </form>

            </Grid>
            <Grid item>

              {/* LOG IN */}
              <HeadScreenSignInButton
                variant="text"
                onClick={(event) => handleOpen(event)}
              >
                Sign in
              </HeadScreenSignInButton>

              {/* REGISTER */}
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
                  modalName={modalName}
                  handleOpen={handleOpen}
                />
              )}
            </Grid>
          </Grid>

          {/* full logo ban */}
          <HeadScreenSlogan>
            <img src="src/styles/assets/images/logos/logo-ban-2.png" alt="O'Trak logo-ban" id="logo-ban" />
          </HeadScreenSlogan>
        </div>
      </div>
    );
  }
}

HeadScreen.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  viewModal: PropTypes.string,
  modalName: PropTypes.string,
  searchInputValue: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchInputSubmit: PropTypes.func.isRequired,
};

HeadScreen.defaultProps = {
  open: false,
  viewModal: '',
  modalName: '',
};

export default HeadScreen;
