/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Homepage from 'src/components/Homepage';

// Action Creators
import { fetchTrending, fetchDetailShow, toogleDomReady } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  message: state.message,
  storeSearchInputResult: state.storeSearchInputResult,
  searchInputValue: state.searchInputValue,
  trendingList: state.trendingList,
  domReady: state.domReady,
});

const mapDispatchToProps = (dispatch) => ({
  getTrending: () => {
    dispatch(fetchTrending());
  },
  getDetailShow: (IdShow) => {
    dispatch(fetchDetailShow(IdShow));
  },
  showSwiper: () => {
    dispatch(toogleDomReady());
  },
});

// Container
const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

// == Export
export default HomepageContainer;
