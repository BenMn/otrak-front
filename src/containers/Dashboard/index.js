// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Dashboard from 'src/components/Dashboard';

// Action Creators
import {
  // Username handlers
  updateUsernameInput,
  storeNewUsername,
  // Modal
  openModal,
  // User infos
  getUserInfos,
  // User followings
  getUserFollowings,
  // avatarUploadHandler,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  // User infos
  userAuthInfos: state.userAuthInfos,
  userInfos: state.userInfos,
  // User followings
  userFollowings: state.userFollowings,
  // Modal
  setOpen: state.setOpen,
  open: state.open,
  modalName: state.modalName,
  // userAvatar: state.userAvatar,
});

const mapDispatchToProps = (dispatch) => ({

  // Username handlers
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

  // Modal
  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },

  // User infos
  fetchUserProfileInfos: () => {
    dispatch(getUserInfos());
  },

  // User followings
  getUserFollowings: (userId) => {
    dispatch(getUserFollowings(userId));
  },

  // avatarUploadHandler: (event) => {
  //   event.persist();
  //   const newAvatar = event.target.files[0];
  //   dispatch(avatarUploadHandler(newAvatar));
  // },

});

// Container
const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

// == Export
export default DashboardContainer;
