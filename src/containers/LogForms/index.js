// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LogForms from 'src/components/LogForms';

// Action Creators
import {
  closeModal,
  openModal,
  updateAuthInput,
  fetchLoginAuthInfos,
  fetchRegisterAuthInfos,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  formName: state.formName,
  authInputValue: state.authInputValue,
  userAuthInfos: state.userAuthInfos,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },

  handleOpen: (event) => {
    event.persist();

    const viewModalName = event.target.innerHTML;

    // Forgot Password Link
    if (viewModalName.match(/password/g)) {
      const formName = viewModalName.match(/password/g).toString();
      dispatch(openModal(viewModalName, formName));
    }

    // Sign Up Link
    if (viewModalName.match(/up/g)) {
      const formName = viewModalName.match(/up/g).toString();
      dispatch(openModal(viewModalName, formName));
    }

    // Sign In Link
    if (viewModalName.match(/in/g)) {
      const formName = viewModalName.match(/in/g).toString();
      dispatch(openModal(viewModalName, formName));
    }
  },

  handleAuthInput: (event, index) => {
    const { value, name } = event.target;
    dispatch(updateAuthInput(value, name, index));
  },

  handleAuthInputSubmit: (event) => {
    event.persist();
    if (event.target.length === 9) {
      const username = event.target[0].value;
      const email = event.target[2].value;
      const password = event.target[4].value;
      const passwordConfirm = event.target[6].value;
      dispatch(fetchRegisterAuthInfos(username, email, password, passwordConfirm));
    }
    if (event.target.length === 5) {
      const email = event.target[0].value;
      const password = event.target[2].value;
      dispatch(fetchLoginAuthInfos(email, password));
    }
    event.preventDefault();
  },


});

// Container
const LogFormsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogForms);

// == Export
export default LogFormsContainer;
