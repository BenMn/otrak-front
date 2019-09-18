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
  removeShowHistoryList,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  modalName: state.modalName,
  authInputValue: state.authInputValue,
  userAuthInfos: state.userAuthInfos,
  trendingList: state.trendingList,
  updatedHistoryList: state.updatedHistoryList,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },

  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
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

  handleDeleteHistoryShow: (showId) => {
    dispatch(removeShowHistoryList(showId));
  },
});

// Container
const LogFormsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogForms);

// == Export
export default LogFormsContainer;
