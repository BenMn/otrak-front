// import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import material UI components
import {
  Grid,
} from '@material-ui/core';

// Import material UI custom components
import {
  ResumeShowResumeText,
  ResumeShowTitle,
} from 'src/styles/materialUi/materialUiStyles/Show';

const ResumeShow = ({ showDetail }) => {
  if (Object.keys(showDetail).length > 0) {
    // Summary Regex cleaning function
    const dirtySummary = showDetail.summary;
    const regex = /<[^>]*>/g;

    const CleanSummary = dirtySummary.replace(regex, '');

    return (
      <>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <ResumeShowTitle variant="h4" gutterBottom> Synopsis </ResumeShowTitle>
          <ResumeShowResumeText gutterBottom> {CleanSummary} </ResumeShowResumeText>
        </Grid>
      </>
    );
  }
  return (
    <div>Loading</div>
  );
};

ResumeShow.propTypes = {
  showDetail: PropTypes.object.isRequired,
};

ResumeShow.defaultProps = {

};

export default ResumeShow;
