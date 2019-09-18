// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Dashboard from 'src/components/Dashboard';

// Action Creators
import {
  avatarUploadHandler,
  updateUsernameInput,
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

  handleUsernameInput: (event) => {
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
