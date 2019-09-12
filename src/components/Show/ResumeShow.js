import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
} from '@material-ui/core';

import {
  ResumeShowResumeText,
  ResumeShowTitle,
} from 'src/styles/materialUi/materialUiStyles/Show';

// import './LandingPage.scss';

const ResumeShow = ({ showDetail } = this.props) => {
  const dirtySummary = showDetail.summary;
  const regex = /<[^>]*>/g;

  const Cleansummary = dirtySummary.replace(regex, '');

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <ResumeShowTitle variant="h4" gutterBottom> Synopsis </ResumeShowTitle>
        <ResumeShowResumeText gutterBottom> {Cleansummary} </ResumeShowResumeText>
      </Grid>
    </>
  );
};

ResumeShow.propTypes = {
  showDetail: PropTypes.object.isRequired,
};

ResumeShow.defaultProps = {

};

export default ResumeShow;
