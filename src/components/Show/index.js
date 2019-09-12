import React from 'react';
import PropTypes from 'prop-types';
import {
} from '@material-ui/core';

import {
  IndexScreenPicture,
  IndexContainer,
} from 'src/styles/materialUi/materialUiStyles/Show';

import './show.scss';

import HeadScreen from 'src/components/Show/HeadScreen';
import ResumeShow from 'src/components/Show/ResumeShow';
import Casting from 'src/components/Show/Casting';


class Show extends React.Component {
  componentDidMount() {
    const { } = this.props;

  }

  render() {
    const {
      showDetail,
    } = this.props;
    return (
      <>
        <IndexScreenPicture className="headscreen-img" title="Head-Screen" image={showDetail.poster}>
          <IndexContainer maxWidth="md">
            <HeadScreen showDetail={showDetail} />
            <ResumeShow showDetail={showDetail} />
            <Casting showDetail={showDetail} />
          </IndexContainer>
        </IndexScreenPicture>
      </>
    );
  }
}

Show.propTypes = {
  showDetail: PropTypes.object.isRequired,
};

export default Show;
