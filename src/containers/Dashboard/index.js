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
  getUserFollowings,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  userAvatar: state.userAvatar,
  userAuthInfos: state.userAuthInfos,
  userInfos: state.userInfos,

  userFollowings: state.userFollowings,

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

  fetchUserProfileInfos: () => {
    dispatch(getUserInfos());
  },

  getUserFollowings: (userId) => {
    dispatch(getUserFollowings(userId));
  },

});

// Container
const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

// == Export
export default DashboardContainer;
