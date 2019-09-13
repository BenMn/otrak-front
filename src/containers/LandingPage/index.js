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
  trendingList: state.trendingList,

  searchInputValue: state.searchInputValue,

  setOpen: state.setOpen,
  open: state.open,
  viewModal: state.viewModal,
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

  handleOpen: (event) => {
    event.persist();

    const viewModalName = event.target.innerHTML;

    // Forgot Password Link
    if (viewModalName.match(/password/g)) {
      const modalName = viewModalName.match(/password/g).toString();
      dispatch(openModal(viewModalName, modalName));
    }

    // Sign Up Link
    if (viewModalName.match(/up/g)) {
      const modalName = viewModalName.match(/up/g).toString();
      dispatch(openModal(viewModalName, modalName));
    }

    // Sign In Link
    if (viewModalName.match(/in/g)) {
      const modalName = viewModalName.match(/in/g).toString();
      dispatch(openModal(viewModalName, modalName));
    }
  },
});

// Container
const LandingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);

// == Export
export default LandingPageContainer;
