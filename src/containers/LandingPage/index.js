// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LandingPage from 'src/components/LandingPage';

// Action Creators
import {
  fetchTrending,
  updateSearchInput,
  fetchSearchInputResult,
  openModal,
  activeLoading,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  trendingList: state.trendingList,

  searchInputValue: state.searchInputValue,

  setOpen: state.setOpen,
  open: state.open,
  modalName: state.modalName,
  loading: state.loading,

  userAuthToken: state.userAuthToken,
});


const mapDispatchToProps = (dispatch) => ({
  getTrending: () => {
    dispatch(fetchTrending());
  },

  handleSearchInput: (newValue) => {
    dispatch(updateSearchInput(newValue));
  },

  handleSearchInputSubmit: (event, searchInputValue) => {
    event.preventDefault();
    dispatch(activeLoading());
    dispatch(fetchSearchInputResult(searchInputValue));
  },

  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },
});

// Container
const LandingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);

// == Export
export default LandingPageContainer;
