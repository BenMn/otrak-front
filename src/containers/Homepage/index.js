/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Homepage from 'src/components/Homepage';

// Action Creators
import {
  // Last show updates
  fetchTrending,
  fetchNext,
  // Show Infos
  fetchDetailShow,
  // Search
  emptySearchResults,
  // Sort
  storeSortedArray,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  // Last show updates
  trendingList: state.trendingList,
  nextList: state.nextList,
  // Search
  searchInputValue: state.searchInputValue,
  storeSearchInputResult: state.storeSearchInputResult,
  // Autentification
  isLogged: state.isLogged,
  // Snackbar alert
  snackOn: state.snackOn,
});

const mapDispatchToProps = (dispatch) => ({
  // Last show updates
  getTrending: () => {
    dispatch(fetchTrending());
  },

  getNext: () => {
    dispatch(fetchNext());
  },

  // Show Infos
  getDetailShow: (showId) => {
    dispatch(emptySearchResults());
    dispatch(fetchDetailShow(showId));
  },

  // Sort
  sortBy: (typeSort) => {
    dispatch(storeSortedArray(typeSort));
  },

});

// Container
const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

// == Export
export default HomepageContainer;
