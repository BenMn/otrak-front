// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Dashboard from 'src/components/Dashboard';

// Action Creators
import {
  avatarUploadHandler,
  updateAuthInput,
  updateUsernameInput,
  fetchRegisterAuthInfos,
  fetchLoginAuthInfos,
  storeNewUsername,
  openModal,
  getUserInfos,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  userAvatar: state.userAvatar,
  userAuthInfos: state.userAuthInfos,
  userAuthToken: state.userAuthToken,
  userInfos: state.userInfos,

  setOpen: state.setOpen,
  open: state.open,
  modalName: state.modalName,
});

const mapDispatchToProps = (dispatch) => ({
  avatarUploadHandler: (event) => {
    event.persist();
    const newAvatar = event.target.files[0];
    dispatch(avatarUploadHandler(newAvatar));
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

  handleUsernameInput: (event) => {
    console.log(event.target.value);
    const { value, name } = event.target;
    dispatch(updateUsernameInput(value, name));
  },

  handleUsernameInputSubmit: (event, userId) => {
    event.persist();
    const newUsername = event.target.value;
    const { name } = event.target;
    dispatch(storeNewUsername(newUsername, name, userId));
  },


  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },

  fetchUserProfileInfos: (userAuthToken) => {
    dispatch(getUserInfos(userAuthToken));
  },

});

// Container
const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

// == Export
export default DashboardContainer;
