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
  activeLoading,
  getUserSingleFollowing,
  getUserFollowings,
  emptySearchResults,
  fetchDetailShow,
  handleChangeEditShow,
  updateCurrentFollowingShow,
  setCurrentUser,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  modalName: state.modalName,
  authInputValue: state.authInputValue,
  userAuthInfos: state.userAuthInfos,
  trendingList: state.trendingList,
  updatedHistoryList: state.updatedHistoryList,
  loading: state.loading,
  userInfos: state.userInfos,
  userSingleFollowing: state.userSingleFollowing,
  userFollowings: state.userFollowings,
  showDetail: state.showDetail,
  updatedUserSingleFollowing: state.updatedUserSingleFollowing,
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

  handleDeleteHistoryShow: (showId) => {
    dispatch(removeShowHistoryList(showId));
  },

  getUserFollowings: (userId) => {
    dispatch(getUserFollowings(userId));
  },

  getUserSingleFollowing: (followId) => {
    dispatch(getUserSingleFollowing(followId));
  },

  getDetailShow: (showId) => {
    dispatch(emptySearchResults());
    dispatch(fetchDetailShow(showId));
  },

  handleChangeEditShow: (event) => {
    const { name, value } = event.target;
    dispatch(handleChangeEditShow(name, value));
  },

  handleSubmitEditShow: (event, followId) => {
    event.persist();
    console.log(event.target[0]);
    const status = event.target[0].value;
    const rating = event.target[2].value;
    const startDate = event.target[4].value;
    const endDate = event.target[5].value;
    const episodeProgress = event.target[6].value;
    const rewatches = event.target[8].value;
    const personalNotes = event.target[10].value;
    dispatch(updateCurrentFollowingShow(
      status,
      rating,
      startDate,
      endDate,
      episodeProgress,
      rewatches,
      personalNotes,
      followId,
    ));
    event.preventDefault();
  },

  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user));
  },
});

// Container
const LogFormsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogForms);

// == Export
export default LogFormsContainer;
