/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Show from 'src/components/Show';

// Action Creators
import {
  startFollowingShow,
  openModal,
} from 'src/store/reducer';


const mapStateToProps = (state) => ({
  showDetail: state.showDetail,
  userAuthToken: state.userAuthToken,
  userInfos: state.userInfos,
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  addToWatchList: (idShow, token, userId) => {
    dispatch(startFollowingShow(idShow, token, userId));
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
