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
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import StarIcon from '@material-ui/icons/Star';

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
    {/* Add to list */}
    {isLogged === true ? (
      <HomePageIconContainer className="hiddenCardIcon">
        <AddCircleIcon onClick={() => addToWatchList(showId, userAuthToken, userInfos.id)} />
      </HomePageIconContainer>
    ) : (
      <HomePageIconContainer className="hiddenCardIcon">
        <AddCircleIcon onClick={() => handleOpen('in')} />
      </HomePageIconContainer>
    )}

    {/* See show */}
    <HomePageIconContainer className="hiddenCardIcon">
      <NavLink exact to={`/show/${showName}`}>
        <VisibilityIcon onClick={() => getDetailShow(showId)} />
      </NavLink>
    </HomePageIconContainer>

    {/* Edit show */}
    <HomePageIconContainer className="hiddenCardIcon">
      <CreateIcon onClick={() => handleOpen(showId)} />
    </HomePageIconContainer>

    {/* Add to favorites */}
    {/* uniquement display quand la catégorie existera */}
    {/* <HomePageIconContainer className="hiddenCardIcon">
      <StarIcon />
    </HomePageIconContainer> */}

    {/* Remove from list */}
    {/* uniquement display si l'id du show est contenu dans le tableau userFollings */}
    {/* <HomePageIconContainer className="hiddenCardIcon">
      <DeleteForeverIcon />
    </HomePageIconContainer> */}

    {/* Display buttons */}
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
