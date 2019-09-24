/* eslint-disable react/prop-types */

// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

//  Material UI Components
import Backdrop from '@material-ui/core/Backdrop';

//  Material UI custom Components
import { LogFormsModal as Modal } from 'src/styles/materialUi/materialUiStyles/LogForms';

// Local imports
// Dashboard
import History from 'src/components/Dashboard/Header/History';
import AccountSettings from 'src/components/Dashboard/Header/AccountSettings';
// Show
import EditShow from 'src/components/Show/EditShow';
// Authentification
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

// Fade transition open modal effect
import Fade from './ModalFade';

const LogFormsModal = ({
  // Modal
  handleOpen,
  handleClose,
  open,
  modalName,
  // Authentification
  handleAuthInput,
  handleAuthInputSubmit,
  // User general infos
  userInfos,
  userAuthInfos,
  // User followings
  getUserFollowings,
  userFollowings,
  getUserSingleFollowing,
  updatedUserSingleFollowing,
  userSingleFollowing,
  // History (dashboard)
  handleDeleteHistoryShow,
  updatedHistoryList,
  // Loader
  loading,
  // Show infos
  getDetailShow,
  showDetail,
  // Edit show
  handleChangeEditShow,
  handleSubmitEditShow,
}) => (
  <div>
    {/* General Modal Configuration Component */}
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {/* Fade effect added on opening */}
      <Fade in={open}>

        {/* .....................AUTHENTIFICATION..................... */}

        {/* Login */}
        {modalName === 'in' && (
          <SignIn
            modalName={modalName}
            handleOpen={handleOpen}
            handleAuthInput={handleAuthInput}
            handleAuthInputSubmit={handleAuthInputSubmit}
            userAuthInfos={userAuthInfos}
            loading={loading}
          />
        )}

        {/* Register */}
        {modalName === 'up' && (
          <SignUp
            modalName={modalName}
            handleOpen={handleOpen}
            handleAuthInput={handleAuthInput}
            handleAuthInputSubmit={handleAuthInputSubmit}
            userAuthInfos={userAuthInfos}
            loading={loading}
          />
        )}

        {/* Change Password */}
        {modalName === 'password' && (
          <ForgotPassword
            modalName={modalName}
            handleOpen={handleOpen}
            handleAuthInput={handleAuthInput}
            handleAuthInputSubmit={handleAuthInputSubmit}
            userAuthInfos={userAuthInfos}
            loading={loading}
          />
        )}

        {/* .....................DASHBOARD..................... */}

        {/* History */}
        {modalName === 'history' && (
          <History
            userFollowings={userFollowings}
            handleDeleteHistoryShow={handleDeleteHistoryShow}
            updatedHistoryList={updatedHistoryList}
            loading={loading}
          />
        )}

        {/* Accoutn Settings */}
        {modalName === 'account' && (
          <AccountSettings
            handleOpen={handleOpen}
            handleAuthInput={handleAuthInput}
            handleAuthInputSubmit={handleAuthInputSubmit}
            userAuthInfos={userAuthInfos}
            loading={loading}
          />
        )}

        {/* .....................SHOW..................... */}

        {/* Edit Show */}
        {typeof (modalName) === 'number' && (
          <EditShow
            // Show infos
            getDetailShow={getDetailShow}
            showDetail={showDetail}
            showId={modalName}
            // User Infos
            userInfos={userInfos}
            // User followings
            getUserFollowings={getUserFollowings}
            userFollowings={userFollowings}
            getUserSingleFollowing={getUserSingleFollowing}
            userSingleFollowing={userSingleFollowing}
            // Change followed show handlers
            handleChangeEditShow={handleChangeEditShow}
            updatedUserSingleFollowing={updatedUserSingleFollowing}
            handleSubmitEditShow={handleSubmitEditShow}
          />
        )}
      </Fade>
    </Modal>
  </div>
);

LogFormsModal.propTypes = {
  // Modal
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  modalName: PropTypes.node,
  // Authentification
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
  // History
  updatedHistoryList: PropTypes.array.isRequired,
  handleDeleteHistoryShow: PropTypes.func,
  // Loader
  loading: PropTypes.bool.isRequired,
  // Show infos
  getDetailShow: PropTypes.func,
  showDetail: PropTypes.object,
  // User infos
  userInfos: PropTypes.object,
  // User followings
  getUserFollowings: PropTypes.func.isRequired,
  userFollowings: PropTypes.array,
  getUserSingleFollowing: PropTypes.func.isRequired,
  userSingleFollowing: PropTypes.object,
  // Edit show
  handleChangeEditShow: PropTypes.func,
  updatedUserSingleFollowing: PropTypes.object,
  handleSubmitEditShow: PropTypes.func,
};

LogFormsModal.defaultProps = {
  // Modal
  handleOpen: () => { },
  handleClose: () => { },
  open: false,
  modalName: null,
  // Edit show
  handleChangeEditShow: () => { },
  handleSubmitEditShow: () => { },
  handleDeleteHistoryShow: () => { },
  // Show infos
  getDetailShow: () => { },
  showDetail: {},
  // User infos
  userInfos: {},
  // User followings
  userSingleFollowing: {},
  userFollowings: [],
  updatedUserSingleFollowing: {},
};

export default LogFormsModal;
