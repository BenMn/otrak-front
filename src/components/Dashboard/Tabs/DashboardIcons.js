import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
import StarIcon from '@material-ui/icons/Star';

// Utils funtions
import { displayCardActionButtons } from 'src/utils';

const Icons = ({
  addToWatchList,
  userAuthToken,
  userInfos,
  isLogged,
  handleOpen,
  showId,
  showName,
  getDetailShow,
}) => (
  <>
    {isLogged === true ? (
      <HomePageIconContainer className="hiddenCardIcon">
        <AddCircleIcon onClick={() => addToWatchList(showId, userAuthToken, userInfos.id)} />
      </HomePageIconContainer>
    ) : (
      <HomePageIconContainer className="hiddenCardIcon">
        <AddCircleIcon onClick={() => handleOpen('up')} />
      </HomePageIconContainer>
    )}
    <HomePageIconContainer className="hiddenCardIcon">
      <NavLink exact to={`/show/${showName}`}>
        <VisibilityIcon onClick={() => getDetailShow(showId)} />
      </NavLink>
    </HomePageIconContainer>
    <HomePageIconContainer className="hiddenCardIcon">
      <CreateIcon />
    </HomePageIconContainer>
    <HomePageIconContainer className="hiddenCardIcon">
      <StarIcon />
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
  addToWatchList: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  getDetailShow: PropTypes.func.isRequired,
  userAuthToken: PropTypes.string,
  userInfos: PropTypes.object,
  isLogged: PropTypes.bool.isRequired,
  showId: PropTypes.number,
  showName: PropTypes.string,
};

Icons.defaultProps = {
  userAuthToken: '',
  userInfos: {},
  showId: null,
  showName: '',
};

export default Icons;
