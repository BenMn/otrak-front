// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Icons from 'src/components/Icons';

// Import Action Creators
import {
  // Modal
  openModal,
  // Search
  emptySearchResults,
  // Show Infos
  fetchDetailShow,
  // User followings
  getUserFollowings,
  // Fast menu icons card functions
  startFollowingShowFromTheBeginning,
  startFollowingShowAtThisEpisode,
  planningWatchShow,
  DeleteFollowingShow,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  // Modal
  isLogged: state.isLogged,
  open: state.open,
  userInfos: state.userInfos,
  userFollowings: state.userFollowings,
});

const mapDispatchToProps = (dispatch) => ({

  // Modal
  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },

  // Show Infos
  getDetailShow: (showId) => {
    dispatch(emptySearchResults());
    dispatch(fetchDetailShow(showId));
  },

  // User followings
  getUserFollowings: (userId) => {
    dispatch(getUserFollowings(userId));
  },

  // Fast menu icons card functions
  addShowByCategorie: (
    categorie,
    showId,
    userId,
    showSeason,
    showEpisode,
  ) => {
    switch (categorie) {
      case 'aired':
        dispatch(startFollowingShowAtThisEpisode(
          showId,
          showSeason,
          showEpisode,
          userId,
        ));
        break;

      case 'next':
        dispatch(startFollowingShowAtThisEpisode(
          showId,
          showSeason,
          showEpisode,
          userId,
        ));
        break;

      case 'search':
        dispatch(startFollowingShowFromTheBeginning(
          showId,
          userId,
        ));
        break;
      // eslint-disable-next-line no-console
      default: console.log(categorie, 'default case');
    }
  },

  addToPlanningWatchShow: (showId, userId) => {
    dispatch(planningWatchShow(showId, userId));
  },

  stopFollowingShow: (showIdBdd) => {
    dispatch(DeleteFollowingShow(showIdBdd));
  },

});

// Container
const IconsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Icons);

// == Export
export default IconsContainer;
