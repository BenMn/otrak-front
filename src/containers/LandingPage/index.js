// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LandingPage from 'src/components/LandingPage';

// Action Creators
import {
  // Last show updates
  fetchTrending,
  // Search
  updateSearchInput,
  fetchSearchInputResult,
  emptySearchResults,
  // Modal
  openModal,
  // Loader
  activeLoading,
  // Show infos
  fetchDetailShow,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  // Last show updates
  trendingList: state.trendingList,
  // Search
  searchInputValue: state.searchInputValue,
  // Modal
  modalName: state.modalName,
  open: state.open,
  setOpen: state.setOpen,
  // Loader
  loading: state.loading,
});


const mapDispatchToProps = (dispatch) => ({

  // Last show updates
  getTrending: () => {
    dispatch(fetchTrending());
  },

  // Search
  handleSearchInput: (newValue) => {
    dispatch(updateSearchInput(newValue));
  },

  handleSearchInputSubmit: (event, searchInputValue) => {
    event.preventDefault();
    dispatch(activeLoading());
    dispatch(fetchSearchInputResult(searchInputValue));
  },

  // Modal
  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },

  // Show infos
  getDetailShow: (showId) => {
    dispatch(emptySearchResults());
    dispatch(fetchDetailShow(showId));
  },
});

// Container
const LandingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);

// == Export
export default LandingPageContainer;
