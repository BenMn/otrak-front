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
} from 'src/store/reducer';

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
    dispatch(emptySearchResults());
    dispatch(fetchDetailShow(IdShow));
  },
  sortBy: (typeSort) => {
    dispatch(storeSortedArray(typeSort));
  },
  testClickCardMedia: () => {
    console.log("c'est le clique de la card");
  },
});

// Container
const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

// == Export
export default HomepageContainer;
