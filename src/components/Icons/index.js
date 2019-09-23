import React from 'react';
import PropTypes from 'prop-types';

// import Material UI custom components
import {
  HomePageIconContainer,
  HomePageCardIcon,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

import {
  Tooltip,
  // Snackbar,
  // Button,
  // IconButton,
} from '@material-ui/core';

// import Material UI Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import CloseIcon from '@material-ui/icons/Close';
// import StarIcon from '@material-ui/icons/Star';

// Utils funtions
import { displayCardActionButtons, tooltipTitleByCategory } from 'src/utils';

const Icons = ({
  userAuthToken,
  userInfos,
  isLogged,
  handleOpen,
  showId,
  showIdBdd,
  showSeason,
  showEpisode,
  categorie,
  addShowByCategorie,
  addToPlanningWatchShow,
  stopFollowingShow,
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

    {/* Add to next to watch */}
    {isLogged === true ? (
      <>
        <Tooltip title="Plan to See" placement="top">
          <HomePageIconContainer className="hiddenCardIcon">
            <VisibilityIcon onClick={() => addToPlanningWatchShow(
              showId,
              userInfos.id,
              userAuthToken,
            )}
            />
          </HomePageIconContainer>
        </Tooltip>
      </>
    ) : (
      <Tooltip title="Sign in to add this show in your planning list" placement="top">
        <HomePageIconContainer className="hiddenCardIcon">
          <VisibilityIcon onClick={() => addToPlanningWatchShow(
            showId,
            userInfos.id,
            userAuthToken,
          )}
          />
        </HomePageIconContainer>
      </Tooltip>
    )}

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

    {/* Remove from list */}
    {isLogged === true && showIdBdd !== null ? (
      <Tooltip title="Unfollow this show" placement="top">
        <HomePageIconContainer className="hiddenCardIcon">
          <DeleteForeverIcon onClick={() => stopFollowingShow(showIdBdd, userAuthToken)} />
        </HomePageIconContainer>
      </Tooltip>
    ) : (
      ''
    )}

    {/* Display buttons */}
    <HomePageIconContainer
      onMouseOver={(event) => displayCardActionButtons(event)}
    >
      <HomePageCardIcon />
    </HomePageIconContainer>
  </>
);


Icons.propTypes = {
  // Function required
  addShowByCategorie: PropTypes.func.isRequired,
  addToPlanningWatchShow: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  stopFollowingShow: PropTypes.func.isRequired,

  // String required
  categorie: PropTypes.string,

  // Boolean required
  isLogged: PropTypes.bool.isRequired,

  // Number not required
  showSeason: PropTypes.number,
  showEpisode: PropTypes.number,
  showId: PropTypes.number,
  showIdBdd: PropTypes.number,

  // String not required
  userAuthToken: PropTypes.string,

  // Object not required
  userInfos: PropTypes.object,
};

Icons.defaultProps = {
  userAuthToken: '',
  categorie: '',
  userInfos: {},
  showId: null,
  showIdBdd: null,
  showSeason: null,
  showEpisode: null,
};

export default Icons;
