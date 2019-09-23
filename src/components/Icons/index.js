import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import Material UI custom components
import {
  HomePageIconContainer,
  HomePageCardIcon,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

import {
  Tooltip,
} from '@material-ui/core';

// import Material UI Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import StarIcon from '@material-ui/icons/Star';

// Utils funtions
import { displayCardActionButtons, tooltipTitleByCategory } from 'src/utils';

const Icons = ({
  userAuthToken,
  userInfos,
  isLogged,
  handleOpen,
  showId,
  showName,
  showSeason,
  showEpisode,
  categorie,
  addShowByCategorie,
}) => (
  <>
    {/* Add to list */}
    {isLogged === true ? (
      <Tooltip title={tooltipTitleByCategory(categorie)} placement="top">
        <HomePageIconContainer className="hiddenCardIcon">
          <AddCircleIcon onClick={() => addShowByCategorie(
            categorie,
            showId,
            userAuthToken,
            userInfos.id,
            showSeason,
            showEpisode,
          )}
          />
        </HomePageIconContainer>
      </Tooltip>
    ) : (
      <Tooltip title="Sign in to add this show" placement="top">
        <HomePageIconContainer className="hiddenCardIcon">
          <AddCircleIcon onClick={() => handleOpen('in')} />
        </HomePageIconContainer>
      </Tooltip>
    )}

    {/* See show */}
    <Tooltip title="Plan to See Show" placement="top">
      <HomePageIconContainer className="hiddenCardIcon">
        <NavLink exact to={`/show/${showName}`}>
          <VisibilityIcon />
        </NavLink>
      </HomePageIconContainer>
    </Tooltip>

    {/* Edit show */}
    {isLogged === true ? (
      <Tooltip title="Edit Show" placement="top">
        <HomePageIconContainer className="hiddenCardIcon">
          <CreateIcon onClick={() => handleOpen(showId)} />
        </HomePageIconContainer>
      </Tooltip>
    ) : (
      <Tooltip title="Sign in to edit this show" placement="top">
        <HomePageIconContainer className="hiddenCardIcon">
          <CreateIcon onClick={() => handleOpen('in')} />
        </HomePageIconContainer>
      </Tooltip>
    )}

    {/* Add to favorites */}
    {/* uniquement display quand la catégorie existera */}
    {/* <HomePageIconContainer className="hiddenCardIcon">
      <StarIcon />
    </HomePageIconContainer> */}

    {/* Remove from list
    uniquement display si l'id du show est contenu dans le tableau userFollings */}
    {/* {showName === userFollowing.name ? (
      <Tooltip title="Unfollow this show" placement="top">
        <HomePageIconContainer
        className="hiddenCardIcon"
        onClick={() => stopFollowingShow(showId, userAuthToken)}>
          <DeleteForeverIcon />
        </HomePageIconContainer>
      </Tooltip>
    ) : '' } */}

    {/* Display buttons */}
    <HomePageIconContainer
      onMouseOver={(event) => displayCardActionButtons(event)}
    >
      <HomePageCardIcon />
    </HomePageIconContainer>
  </>
);

Icons.propTypes = {
  showSeason: PropTypes.number,
  showEpisode: PropTypes.number,
  categorie: PropTypes.string,
  addShowByCategorie: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  userAuthToken: PropTypes.string,
  userInfos: PropTypes.object,
  isLogged: PropTypes.bool.isRequired,
  showId: PropTypes.number,
  showName: PropTypes.string,
};

Icons.defaultProps = {
  userAuthToken: '',
  categorie: '',
  userInfos: {},
  showId: null,
  showName: '',
  showSeason: null,
  showEpisode: null,
};

export default Icons;
