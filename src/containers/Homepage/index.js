/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Homepage from 'src/components/Homepage';

// Action Creators
import { doSomething, fetchTrending } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  message: state.message,
  storeInputResult: state.storeInputResult,
  inputValue: state.inputValue,
  trendingList: state.trendingList,
});

const mapDispatchToProps = (dispatch) => ({
  doSomething: () => {
    dispatch(doSomething('Coucou'));
  },
  getTrending: () => {
    dispatch(fetchTrending());
  },
});

// Container
const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

// == Export
export default HomepageContainer;
