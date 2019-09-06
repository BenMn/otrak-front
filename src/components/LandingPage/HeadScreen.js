import React from 'react';
import {

} from '@material-ui/core';

import {
  LandingPageAvatar,
  LandingPageSlogan,
  LandingPageSignInButton,
  LandingPageSignUpButton,
  LandingPageSearchIcon,
  LandingPageSearchInput,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

import './LandingPage.scss';

class HeadScreen extends React.Component {
  handleInput = (event) => {
    const fullSearchBar = document.getElementById('fullSearchBar').parentElement;
    fullSearchBar.classList.add('slide-in-left');

    event.target.removeEventListener('mouseover', this.handleInput, true);
    fullSearchBar.style.display = 'block';
    fullSearchBar.style.borderBottom = '1px solid #fff';
  }

  render() {
    return (
      <div id="landing-page">
        <div className="screen-landing-page">
          <div className="div-input-icon-search" onMouseOver={this.handleInput}>
            <LandingPageSearchIcon fontSize="large" color="action" />
            <LandingPageSearchInput placeholder="Search…" id="fullSearchBar" />
          </div>
          <span>
            <LandingPageSignInButton variant="text" color="default">
              Sign in
            </LandingPageSignInButton>
          </span>
          <div>
            <LandingPageSignUpButton variant="outlined" color="default">
              Sign up
            </LandingPageSignUpButton>
          </div>
          <LandingPageAvatar src="src/styles/assets/images/logo-V2.png" alt="O’Track logo" />
          <LandingPageSlogan color="textPrimary">
            All your favorites shows
          </LandingPageSlogan>
        </div>
      </div>
    );
  }
}


export default HeadScreen;
