// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LogForms from 'src/components/LogForms';

// Action Creators
import { closeModal } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },
});

// Container
const LogFormsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogForms);

// == Export
export default LogFormsContainer;
