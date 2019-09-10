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

const ApiInfos = ({ searchInputValue, handleSearchInput, handleSearchInputSubmit }) => (
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
          <form onSubmit={(event) => handleSearchInputSubmit(event, searchInputValue)} id="form-submit">
            <ApiInfosSearchDarkInput
              color="textPrimary"
              placeholder="Start looking for a show..."
              inputProps={{ 'aria-label': 'search' }}
              value={searchInputValue}
              onChange={(event) => handleSearchInput(event.target.value)}
            />
          </form>
        </ApiInfosSearchDark>

      </LandingPageContainer>
    </Grid>

  </Grid>
);

ApiInfos.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchInputSubmit: PropTypes.func.isRequired,
};

export default ApiInfos;
