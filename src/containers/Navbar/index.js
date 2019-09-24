// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Navbar from 'src/components/Navbar';

// Action Creators
import {
  // Modal
  openModal,
  // Search
  updateSearchInput,
  fetchSearchInputResult,
  emptySearchResults,
  // Authentification
  logOut,
  // Loader
  activeLoading,
} from 'src/store/reducer';


const mapStateToProps = (state) => ({
  // Modal
  setOpen: state.setOpen,
  open: state.open,
  // Authentification
  isLogged: state.isLogged,
  loading: state.loading,
  // Search
  searchInputValue: state.searchInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  // Modal
  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },

  // Authentification
  handleLogOut: () => {
    dispatch(logOut());
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

  emptySearchResults: () => {
    dispatch(emptySearchResults());
  },
});

// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// == Export
export default NavbarContainer;
