/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Show from 'src/components/Show';

// Action Creators
import {
  openModal,
  startFollowingShowFromTheBeginning,
} from 'src/store/reducer';


const mapStateToProps = (state) => ({
  showDetail: state.showDetail,
  userAuthToken: state.userAuthToken,
  userInfos: state.userInfos,
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  startFollowingShow: (showId, userId, userAuthToken) => {
    dispatch(startFollowingShowFromTheBeginning(showId, userId, userAuthToken));
  },

  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },
});

// Container
const ShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Show);

// == Export
export default ShowContainer;
