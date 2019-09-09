// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LogForms from 'src/components/LogForms';

// Action Creators
import { closeModal, openModal } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  formName: state.formName,
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
});

// Container
const LogFormsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogForms);

// == Export
export default LogFormsContainer;
