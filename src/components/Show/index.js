// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {
} from '@material-ui/core';

// Material UI custom Components
import {
  IndexScreenPicture,
  IndexContainer,
  IndexButtonReturn,
} from 'src/styles/materialUi/materialUiStyles/Show';

// Local imports
import HeadScreen from 'src/components/Show/HeadScreen';
import ResumeShow from 'src/components/Show/ResumeShow';
import Casting from 'src/components/Show/Casting';

import './show.scss';

// Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Show = ({
  showDetail,
  addToWatchList,
  userAuthToken,
  userInfos,
}) => (
  <>
    {/* Background Picture */}
    <IndexScreenPicture image={showDetail.poster}>

      {/* Black effect on the Background */}
      <div className="fond-img">

        <IndexContainer maxWidth="md">

          {/* Return Button */}
          <NavLink exact to="/search">
            <IndexButtonReturn color="secondary"><ArrowBackIcon />Return</IndexButtonReturn>
          </NavLink>

          {/* Children Components */}
          <HeadScreen showDetail={showDetail} addToWatchList={addToWatchList} userAuthToken={userAuthToken} userInfos={userInfos} />
          <ResumeShow showDetail={showDetail} />
          <Casting showDetail={showDetail} />
        </IndexContainer>
      </div>
    </IndexScreenPicture>
  </>
);

Show.propTypes = {
  showDetail: PropTypes.object.isRequired,
  addToWatchList: PropTypes.func.isRequired,
  userAuthToken: PropTypes.string.isRequired,
};

export default Show;
