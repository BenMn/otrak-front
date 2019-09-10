// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LogForms from 'src/components/LogForms';

// Action Creators
import { closeModal, openModal, updateAuthInput } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  open: state.open,
  formName: state.formName,
  username: state.userAuthInfos.username,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
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

  handleAuthInput: (newValue) => {
    dispatch(updateAuthInput(newValue));
  },

  handleUserAuthInfos: (event) => {
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
