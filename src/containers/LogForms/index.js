// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LogForms from 'src/components/LogForms';

// Action Creators
import { closeModal, showFormLogLinks } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  formName: state.formName,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },

  showForm: (event) => {
    // Forgot Password Link
    if (event.target.innerHTML.match(/password/g)) {
      const formName = event.target.innerHTML.match(/password/g).toString();
      dispatch(showFormLogLinks(formName));
    }

    // Sign Up Link
    if (event.target.innerHTML.match(/up/g)) {
      const formName = event.target.innerHTML.match(/up/g).toString();
      dispatch(showFormLogLinks(formName));
    }

    // Sign In Link
    if (event.target.innerHTML.match(/in/g)) {
      console.log(event.target.innerHTML);
      const formName = event.target.innerHTML.match(/up/g).toString();
      dispatch(showFormLogLinks(formName));
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
