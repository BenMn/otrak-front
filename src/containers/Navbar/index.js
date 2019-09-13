// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Navbar from 'src/components/Navbar';

// Action Creators
import {
  openModal,
  updateSearchInput,
  fetchSearchInputResult,
} from 'src/store/reducer';


const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  viewModal: state.viewModal,
  searchInputValue: state.searchInputValue,
});

const mapDispatchToProps = (dispatch) => ({
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
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// == Export
export default NavbarContainer;
