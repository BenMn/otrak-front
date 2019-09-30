/* eslint-disable react/prop-types */
// Import NPM
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
import Loader from 'src/components/Loader';

// CSS Local Styling
import './show.scss';

// Icons
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';


const Show = ({
  showDetail,
  startFollowingShow,
  userInfos,
  isLogged,
  handleOpen,
  searchInputValue,
  callBackSearchInputResult,
}) => {
  function scroolToTop() {
    window.scrollTo(0, 0);
  }
  scroolToTop();
  return (
    <>
      <IndexScreenPicture image={showDetail.poster}>

        <div className="fond-img">

          <IndexContainer maxWidth="md">

            {/* Return link */}
            <NavLink exact to="/search">
              <IndexButtonReturn color="secondary" onClick={() => callBackSearchInputResult(searchInputValue)}><ArrowBackIos />Return</IndexButtonReturn>
            </NavLink>

            {Object.keys(showDetail).length !== 0 ? (
              <>

                {/* General show infos + Poster */}
                <HeadScreen
                  showDetail={showDetail}
                  startFollowingShow={startFollowingShow}
                  userInfos={userInfos}
                  isLogged={isLogged}
                  handleOpen={handleOpen}
                />

                {/* Synopsis */}
                <ResumeShow showDetail={showDetail} />

                {/* Casting */}
                <Casting showDetail={showDetail} />

              </>
            ) : (
              <Loader />
            )}
          </IndexContainer>
        </div>
      </IndexScreenPicture>
    </>
  );
};

Show.propTypes = {
  showDetail: PropTypes.object.isRequired,
  startFollowingShow: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default Show;
