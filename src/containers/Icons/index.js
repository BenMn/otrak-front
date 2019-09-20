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
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  userAuthToken: state.userAuthToken,
  isLogged: state.isLogged,
  open: state.open,
  userInfos: state.userInfos,
});

const mapDispatchToProps = (dispatch) => ({
  addToWatchList: (idShow, token, userId) => {
    dispatch(startFollowingShow(idShow, token, userId));
  },

  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },

  getDetailShow: (showId) => {
    dispatch(emptySearchResults());
    dispatch(fetchDetailShow(showId));
  },
});

// Container
const IconsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Icons);

// == Export
export default IconsContainer;
