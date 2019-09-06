import React from 'react';
import {

} from '@material-ui/core';

import {
  LandingPageAvatar,
  LandingPageSlogan,
  LandingPageLogButton,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

import './LandingPage.scss';

const LandingPage = () => (
  <div id="landing-page">
    <div className="screen-landing-page">
      {/* <img className="image-lp" src="../src/styles/assets/images/wallpapers/2.jpg" alt="wallpaper" /> */}
      <LandingPageLogButton variant="outlined" color="commonWhite">
        Sign up
      </LandingPageLogButton>
      <LandingPageLogButton variant="text" color="textPrimary">
        Sign in
      </LandingPageLogButton>
      <LandingPageAvatar src="src/styles/assets/images/logo-V2.png" alt="O’Track logo" />
      <LandingPageSlogan color="textPrimary">
        All your favorites shows
      </LandingPageSlogan>
    </div>
  </div>
);

export default LandingPage;
