// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

import {
  Tooltip,
} from '@material-ui/core';

// import Material UI custom components
import {
  HomePageIconContainer,
  HomePageCardIcon,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

// import Material UI Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import StarIcon from '@material-ui/icons/Star';

// Utils funtions
import { displayCardActionButtons } from 'src/utils';

const Icons = ({
  addToWatchList,
  userInfos,
  showId,
  showIdTvmaze,
  showIdFollowings,
  stopFollowingShow,
  handleOpen,
}) => (
  <>
    {/* <HomePageIconContainer className="hiddenCardIcon">
      <AddCircleIcon onClick={() => addToWatchList(showId, userInfos.id)} />
    </HomePageIconContainer> */}

    <Tooltip title="Edit Show" placement="top">
      <HomePageIconContainer className="hiddenCardIcon" onClick={() => handleOpen(showIdTvmaze)}>
        <CreateIcon />
      </HomePageIconContainer>
    </Tooltip>

    <Tooltip title="Unfollow this show" placement="top">
      <HomePageIconContainer className="hiddenCardIcon" onClick={() => stopFollowingShow(showIdFollowings, userInfos.id)}>
        <DeleteForeverIcon />
      </HomePageIconContainer>
    </Tooltip>
    <HomePageIconContainer
      onMouseOver={(event) => displayCardActionButtons(event)}
    >
      <HomePageCardIcon />
    </HomePageIconContainer>
  </>
);

Icons.propTypes = {
  addToWatchList: PropTypes.func,
  stopFollowingShow: PropTypes.func,
  userInfos: PropTypes.object,
  showId: PropTypes.number,
  showIdFollowings: PropTypes.number.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

Icons.defaultProps = {
  addToWatchList: () => {},
  stopFollowingShow: () => {},
  userInfos: {},
  showId: null,
};

export default Icons;
