// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Navbar from 'src/components/Navbar';

// Action Creators
import { updateInput, fetchInputResult } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  viewModal: state.viewModal,
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleInput: (newValue) => {
    dispatch(updateInput(newValue));
  },

  handleInputSubmit: (event, inputValue) => {
    event.preventDefault();
    dispatch(fetchInputResult(inputValue));
  },
});

// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// == Export
export default NavbarContainer;
