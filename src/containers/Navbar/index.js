// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Navbar from 'src/components/Navbar';

// Action Creators
import { openModal, updateInput, fetchInputResult } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  open: state.open,
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

  handleOpen: (event) => {
    event.preventDefault();

    const viewModalName = event.target.innerHTML;
    let formName = '';
    // Forgot Password Link
    if (viewModalName.match(/password/g)) {
      formName = viewModalName.match(/password/g).toString();
    }
    else if (viewModalName.match(/up/g)) {
      formName = viewModalName.match(/up/g).toString();
    }
    else if (viewModalName.match(/in/g)) {
      formName = viewModalName.match(/in/g).toString();
    }
    dispatch(openModal(formName));
  },
});

// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// == Export
export default NavbarContainer;
