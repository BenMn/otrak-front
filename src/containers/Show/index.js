/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Show from 'src/components/Show';

// Action Creators
import {
  startFollowingShow,
} from 'src/store/reducer';


const mapStateToProps = (state) => ({
  showDetail: state.showDetail,
  userAuthToken: state.userAuthToken,
  userInfos: state.userInfos,
});

const mapDispatchToProps = (dispatch) => ({
  addToWatchList: (idShow, token, userId) => {
    console.log('TOKKKEEEENNNN', token);
    dispatch(startFollowingShow(idShow, token, userId));
  },
});

// Container
const ShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Show);

// == Export
export default ShowContainer;
