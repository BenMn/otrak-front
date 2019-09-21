// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Icons from 'src/components/Icons';

// Import Action Creators
import {
  startFollowingShow,
  openModal,
  emptySearchResults,
  fetchDetailShow,
  startFollowingShowAtThisEpisode,
  planningWatchShow,
  getUserFollowings,
  DeleteFollowingShow,
  startFollowingShowFromTheBeginning,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  userAuthToken: state.userAuthToken,
  isLogged: state.isLogged,
  open: state.open,
  userInfos: state.userInfos,
  userFollowings: state.userFollowings,
});

const mapDispatchToProps = (dispatch) => ({

  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },

  getDetailShow: (showId) => {
    dispatch(emptySearchResults());
    dispatch(fetchDetailShow(showId));
  },

  getUserFollowings: (userId, userAuthToken) => {
    dispatch(getUserFollowings(userId, userAuthToken));
  },

  addShowByCategorie: (
    categorie,
    showId,
    userAuthToken,
    userId,
    showSeason,
    showEpisode,
  ) => {
    console.log('on a cliqué sur cette catégorie', categorie);
    switch (categorie) {
      case 'aired' || 'next':
        dispatch(startFollowingShowAtThisEpisode(
          showId,
          showSeason,
          showEpisode,
          userAuthToken,
          userId,
        ));
        break;

      case 'search':
        dispatch(startFollowingShowFromTheBeginning(
          showId,
          userId,
          userAuthToken,
        ));
        break;

      default: console.log('default case');
    }
  },
  addToPlanningWatchShow: (showId, userId, userAuthToken) => {
    dispatch(planningWatchShow(showId, userId, userAuthToken));
  },

  stopFollowingShow: (showIdBdd, userAuthToken) => {
    dispatch(DeleteFollowingShow(showIdBdd, userAuthToken));
  },

});

// Container
const IconsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Icons);

// == Export
export default IconsContainer;
