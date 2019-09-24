// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

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
  getDetailShow,
}) => (
  <>
    <HomePageIconContainer className="hiddenCardIcon">
      <AddCircleIcon onClick={() => addToWatchList(showId, userInfos.id)} />
    </HomePageIconContainer>

    <HomePageIconContainer className="hiddenCardIcon">
      <VisibilityIcon onClick={() => getDetailShow(showId)} />
    </HomePageIconContainer>

    <HomePageIconContainer className="hiddenCardIcon">
      <CreateIcon />
    </HomePageIconContainer>

    <HomePageIconContainer className="hiddenCardIcon">
      <DeleteForeverIcon />
    </HomePageIconContainer>

    <HomePageIconContainer
      onMouseOver={(event) => displayCardActionButtons(event)}
    >
      <HomePageCardIcon />
    </HomePageIconContainer>
  </>
);

Icons.propTypes = {
  addToWatchList: PropTypes.func,
  getDetailShow: PropTypes.func,
  userInfos: PropTypes.object,
  showId: PropTypes.number,
};

Icons.defaultProps = {
  addToWatchList: () => {},
  getDetailShow: () => {},
  userInfos: {},
  showId: null,
};

export default Icons;
