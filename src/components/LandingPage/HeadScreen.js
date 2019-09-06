import React from 'react';
import {

} from '@material-ui/core';

import {
  HeadScreenAvatar,
  HeadScreenSlogan,
  HeadScreenSignInButton,
  HeadScreenSignUpButton,
  HeadScreenSearchIcon,
  HeadScreenSearchInput,
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
            <HeadScreenSearchIcon fontSize="large" color="action" />
            <HeadScreenSearchInput placeholder="Search…" id="fullSearchBar" />
          </div>
          <span>
            <HeadScreenSignInButton variant="text" color="default">
              Sign in
            </HeadScreenSignInButton>
          </span>
          <div>
            <HeadScreenSignUpButton variant="outlined" color="default">
              Sign up
            </HeadScreenSignUpButton>
          </div>
          <HeadScreenAvatar src="src/styles/assets/images/logo-V2.png" alt="O’Track logo" />
          <HeadScreenSlogan color="textPrimary">
            All your favorites shows
          </HeadScreenSlogan>
        </div>
      </div>
    );
  }
}


export default HeadScreen;
