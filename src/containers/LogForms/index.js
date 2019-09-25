// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LogForms from 'src/components/LogForms';

// Action Creators
import {
  // Modal
  closeModal,
  openModal,
  // Authentification
  updateAuthInput,
  fetchLoginAuthInfos,
  fetchRegisterAuthInfos,
  setCurrentUser,
  // History (dashboard)
  removeShowHistoryList,
  // Loader
  activeLoading,
  // User followings
  getUserSingleFollowing,
  getUserFollowings,
  updateCurrentFollowingShow,
  // Show infos
  fetchDetailShow,
  // Edit show
  handleChangeEditShow,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  // Modal
  setOpen: state.setOpen,
  open: state.open,
  modalName: state.modalName,
  // Authentification
  authInputValue: state.authInputValue,
  userAuthInfos: state.userAuthInfos,
  // Last show updates
  trendingList: state.trendingList,
  // History (dashboard)
  updatedHistoryList: state.updatedHistoryList,
  // Loader
  loading: state.loading,
  // user infos
  userInfos: state.userInfos,
  // User followings
  userFollowings: state.userFollowings,
  userSingleFollowing: state.userSingleFollowing,
  updatedUserSingleFollowing: state.updatedUserSingleFollowing,
  // Show infos
  showDetail: state.showDetail,
});

const mapDispatchToProps = (dispatch) => ({
  // Modal
  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },

  handleClose: () => {
    dispatch(closeModal());
  },

  // Authentification
  handleAuthInput: (event, index) => {
    const { value, name } = event.target;
    dispatch(updateAuthInput(value, name, index));
  },

  handleAuthInputSubmit: (event) => {
    dispatch(activeLoading());
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

  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user));
  },

  // History
  handleDeleteHistoryShow: (showId) => {
    dispatch(removeShowHistoryList(showId));
  },

  // User followings
  getUserFollowings: (userId) => {
    dispatch(getUserFollowings(userId));
  },

  getUserSingleFollowing: (followId) => {
    dispatch(getUserSingleFollowing(followId));
  },

  // Show infos
  getDetailShow: (showId) => {
    dispatch(fetchDetailShow(showId));
  },

  // Edit show
  handleChangeEditShow: (event) => {
    const { name, value } = event.target;
    dispatch(handleChangeEditShow(name, value));
  },

  handleSubmitEditShow: (event, followId, userId, showId) => {
    event.persist();
    const status = event.target[0].value;
    const rating = event.target[2].value;
    const startDate = event.target[4].value;
    const endDate = event.target[5].value;
    const seasonProgress = event.target[6].value;
    const episodeProgress = event.target[8].value;
    // const rewatches = event.target[8].value;
    const personalNotes = event.target[10].value;
    dispatch(updateCurrentFollowingShow(
      status,
      rating,
      startDate,
      endDate,
      episodeProgress,
      seasonProgress,
      // rewatches,
      personalNotes,
      followId,
      userId,
      showId,
    ));
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
