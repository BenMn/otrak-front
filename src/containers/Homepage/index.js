/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Homepage from 'src/components/Homepage';

// Action Creators
import { fetchTrending } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  message: state.message,
  storeSearchInputResult: state.storeSearchInputResult,
  searchInputValue: state.searchInputValue,
  trendingList: state.trendingList,
});

const mapDispatchToProps = (dispatch) => ({
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
