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
  isLogged: state.isLogged,
  showDetail: state.showDetail,
  userInfos: state.userInfos,
});

const mapDispatchToProps = (dispatch) => ({

  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },

  startFollowingShow: (showId, userId) => {
    dispatch(startFollowingShowFromTheBeginning(showId, userId));
  },

});

// Container
const ShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Show);

// == Export
export default ShowContainer;
