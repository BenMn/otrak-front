// import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
} from '@material-ui/core';

// Material UI custom Components
import {
  IndexScreenPicture,
  IndexContainer,
} from 'src/styles/materialUi/materialUiStyles/Show';

// Local imports
import HeadScreen from 'src/components/Show/HeadScreen';
import ResumeShow from 'src/components/Show/ResumeShow';
import Casting from 'src/components/Show/Casting';

import './show.scss';


const Show = ({ showDetail }) => (
  <>
    {console.log(showDetail)}
    <IndexScreenPicture title="Head-Screen" image={showDetail.poster}>
      <div className="fond-img">
        <IndexContainer maxWidth="md">

          <HeadScreen showDetail={showDetail} />
          <ResumeShow showDetail={showDetail} />
          <Casting showDetail={showDetail} />

        </IndexContainer>
      </div>
    </IndexScreenPicture>
  </>
);


Show.propTypes = {
  showDetail: PropTypes.object.isRequired,
};

export default Show;
