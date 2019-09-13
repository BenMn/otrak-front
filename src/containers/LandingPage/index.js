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
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  message: state.message,
  trendingList: state.trendingList,
  searchInputValue: state.searchInputValue,
  setOpen: state.setOpen,
  open: state.open,
  modalName: state.modalName,
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
