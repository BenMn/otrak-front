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
});

const mapDispatchToProps = (dispatch) => ({
  addToWatchList: (idShow, token) => {
    console.log('TOKKKEEEENNNN', token);
    dispatch(startFollowingShow(idShow, token));
  },
});

// Container
const ShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Show);

// == Export
export default ShowContainer;
