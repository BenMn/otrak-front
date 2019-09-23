/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Homepage from 'src/components/Homepage';

// Action Creators
import {
  fetchTrending,
  fetchDetailShow,
  emptySearchResults,
  storeSortedArray,
  fetchNext,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  storeSearchInputResult: state.storeSearchInputResult,
  searchInputValue: state.searchInputValue,
  trendingList: state.trendingList,
  nextList: state.nextList,
});

const mapDispatchToProps = (dispatch) => ({
  getTrending: () => {
    dispatch(fetchTrending());
  },
  getDetailShow: (showId) => {
    dispatch(emptySearchResults());
    dispatch(fetchDetailShow(showId));
  },
  sortBy: (typeSort) => {
    dispatch(storeSortedArray(typeSort));
  },
  getNext: () => {
    dispatch(fetchNext());
  },
});

// Container
const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

// == Export
export default HomepageContainer;
