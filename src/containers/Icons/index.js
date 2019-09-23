// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Icons from 'src/components/Icons';

// Import Action Creators
import {
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

  getUserFollowings: (userId) => {
    dispatch(getUserFollowings(userId));
  },

  addShowByCategorie: (
    categorie,
    showId,
    userId,
    showSeason,
    showEpisode,
  ) => {
    switch (categorie) {
      case 'aired' || 'next':
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
      default: console.log('default case');
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
