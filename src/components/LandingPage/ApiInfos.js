import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import {
  LandingPageContainer,
  ApiInfosIconMovie1,
  ApiInfosSearchDark,
  ApiInfosSearchDarkInput,
  ApiInfosSearchDarkIcon,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

const ApiInfos = ({ inputValue, handleInput, handleInputSubmit }) => (
  <Grid container alignItems="center" justify="flex-end">

    <Grid item lg={5}>
      <img src="src/styles/assets/images/screenshot.png" alt="ballekkkkk" className="ScreenDemo--left" />
    </Grid>

    <Grid item lg={7}>
      <LandingPageContainer>

        <span className="title-icon--right">
          <ApiInfosIconMovie1 />
          <Typography variant="h3" component="h3" align="right">Your choice is ours !</Typography>
        </span>

        <Typography align="right">We're using an external API with huge Database.</Typography>
        <Typography align="right">All shows, anime included.</Typography>

        <ApiInfosSearchDark align="right">
          <ApiInfosSearchDarkIcon />
          <form onSubmit={(event) => handleInputSubmit(event, inputValue)} id="form-submit">
            <ApiInfosSearchDarkInput
              color="textPrimary"
              placeholder="Start looking for a show..."
              inputProps={{ 'aria-label': 'search' }}
              value={inputValue}
              onChange={(event) => handleInput(event.target.value)}
            />
          </form>
        </ApiInfosSearchDark>

      </LandingPageContainer>
    </Grid>

  </Grid>
);

ApiInfos.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleInputSubmit: PropTypes.func.isRequired,
};

export default ApiInfos;
