// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LandingPage from 'src/components/LandingPage';

// Action Creators
import {
  getUserInfos,
} from 'src/store/reducers/userReducer';

import {
  fetchTrending,
  updateSearchInput,
  fetchSearchInputResult,
} from 'src/store/reducers/searchReducer';

import {
  openModal,
} from 'src/store/reducers/appReducer';

const mapStateToProps = (state) => ({
  trendingList: state.trendingList,

  searchInputValue: state.searchInputValue,

  setOpen: state.setOpen,
  open: state.open,
  modalName: state.modalName,

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
    dispatch(fetchSearchInputResult(searchInputValue));
  },

  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },

  fetchUserProfileInfos: (userAuthToken) => {
    dispatch(getUserInfos(userAuthToken));
  },
});

// Container
const LandingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);

// == Export
export default LandingPageContainer;
