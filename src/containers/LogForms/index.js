// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LogForms from 'src/components/LogForms';

// Action Creators
import { closeModal, updateAuthInput } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  username: state.userAuthInfos.username,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
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
