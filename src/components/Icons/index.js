/* eslint-disable no-nested-ternary */

// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {
  Tooltip,
  // Snackbar,
  // Button,
  // IconButton,
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
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// Utils funtions
import { displayCardActionButtons, tooltipTitleByCategory } from 'src/utils';

const Icons = ({
  // User infos
  userInfos,
  // Authentification
  isLogged,
  // Modal
  handleOpen,
  // Show infos
  showId,
  showIdBdd,
  showSeason,
  showEpisode,
  categorie,
  tracked,
  // Fast nav icons functions
  addShowByCategorie,
  addToPlanningWatchShow,
  stopFollowingShow,
}) => (
  <>
    {isLogged === true ? (
      categorie === 'aired' ? (
        tracked === false ? (
          <Tooltip title="Start this show from the begening" placement="top">
            <HomePageIconContainer className="hiddenCardIcon">
              <PlayArrowIcon onClick={() => addShowByCategorie(
                categorie = 'search',
                showId,
                userInfos.id,
                showSeason,
                showEpisode,
              )}
              />
            </HomePageIconContainer>
          </Tooltip>
        ) : ''
      ) : ''
    ) : (
      ''
    )}

    {/* Add to list */}
    {isLogged === true ? (
      tracked === true ? (
        categorie === 'aired' ? '' : (
          <Tooltip title="Episode watched" placement="top">
            <HomePageIconContainer className="hiddenCardIcon">
              <AddCircleIcon onClick={() => addShowByCategorie(
                categorie,
                showId,
                userInfos.id,
                showSeason,
                showEpisode,
              )}
              />
            </HomePageIconContainer>
          </Tooltip>
        )) : (
          <Tooltip title={tooltipTitleByCategory(categorie)} placement="top">
            <HomePageIconContainer className="hiddenCardIcon">
              <AddCircleIcon onClick={() => addShowByCategorie(
                categorie,
                showId,
                userInfos.id,
                showSeason,
                showEpisode,
              )}
              />
            </HomePageIconContainer>
          </Tooltip>
      )) : (
        <Tooltip title="Sign in to add this show" placement="top">
          <HomePageIconContainer className="hiddenCardIcon">
            <AddCircleIcon onClick={() => handleOpen('in')} />
          </HomePageIconContainer>
        </Tooltip>
    )}
    {/* Add to next to watch */}
    {categorie === 'next' ? '' : (
      isLogged === true ? (
        <>
          <Tooltip title="Plan to See" placement="top">
            <HomePageIconContainer className="hiddenCardIcon">
              <VisibilityIcon onClick={() => addToPlanningWatchShow(
                showId,
                userInfos.id,
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
            )}
            />
          </HomePageIconContainer>
        </Tooltip>
      )
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

    {/* Remove from list */}
    {categorie === 'next' || categorie === 'aired' ? '' : (
      (isLogged === true && showIdBdd !== null) ? (
        <Tooltip title="Unfollow this show" placement="top">
          <HomePageIconContainer className="hiddenCardIcon">
            <DeleteForeverIcon onClick={() => stopFollowingShow(showIdBdd)} />
          </HomePageIconContainer>
        </Tooltip>
      ) : (
        ''
      )
    )}


    {/* Display button */}
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

  // Object not required
  userInfos: PropTypes.object,

  // Boolean not required
  tracked: PropTypes.bool,
};

Icons.defaultProps = {
  categorie: '',
  userInfos: {},
  showId: null,
  showIdBdd: null,
  showSeason: null,
  showEpisode: null,
  tracked: false,
};

export default Icons;
