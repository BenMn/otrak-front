/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Homepage from 'src/components/Homepage';

// Action Creators
import { fetchTrending, fetchDetailShow, storeSortedArray } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  storeSearchInputResult: state.storeSearchInputResult,
  searchInputValue: state.searchInputValue,
  trendingList: state.trendingList,
});

const mapDispatchToProps = (dispatch) => ({
  getTrending: () => {
    dispatch(fetchTrending());
  },
  getDetailShow: (IdShow) => {
    dispatch(fetchDetailShow(IdShow));
  },

  // Sort by: title => order(resultArray)
  sortBy: (storeSearchInputResult, filterName, index) => {
    dispatch(storeSortedArray(storeSearchInputResult, filterName, index));
  },
});

// Container
const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

// == Export
export default HomepageContainer;
