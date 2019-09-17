// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Navbar from 'src/components/Navbar';

// Action Creators
import {
  logOut,
} from 'src/store/reducers/userReducer';

import {
  updateSearchInput,
  fetchSearchInputResult,
} from 'src/store/reducers/searchReducer';

import {
  openModal,
} from 'src/store/reducers/appReducer';


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
});

// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// == Export
export default NavbarContainer;
