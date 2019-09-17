// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Navbar from 'src/components/Navbar';

// Action Creators
import {
  openModal,
  updateSearchInput,
  fetchSearchInputResult,
  logOut,
  emptySearchResults,
} from 'src/store/reducer';


const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  searchInputValue: state.searchInputValue,
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
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

  handleLogOut: () => {
    dispatch(logOut());
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
