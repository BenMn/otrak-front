/* eslint-disable react/prop-types */
// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

//  Material UI Components
import Backdrop from '@material-ui/core/Backdrop';

//  Material UI custom Components
import { LogFormsModal as Modal } from 'src/styles/materialUi/materialUiStyles/LogForms';
import History from 'src/components/Dashboard/Header/History';
import AccountSettings from 'src/components/Dashboard/Header/AccountSettings';
import EditShow from 'src/components/Show/EditShow';

// Local imports
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

import Fade from './ModalFade';

const LogFormsModal = ({
  open,
  handleClose,
  modalName,
  handleOpen,
  handleAuthInput,
  handleAuthInputSubmit,
  userAuthInfos,
  handleDeleteHistoryShow,
  updatedHistoryList,
  loading,
  getDetailShow,
  userInfos,
  userAuthToken,
  showDetail,
  userSingleFollowing,
  userFollowings,
  getUserSingleFollowing,
  getUserFollowings,
  handleChangeEditShow,
  updatedUserSingleFollowing,
  handleSubmitEditShow,
}) => (
  <div>
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
      <Fade in={open}>
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
        {modalName === 'history' && (
          <History
            userFollowings={userFollowings}
            handleDeleteHistoryShow={handleDeleteHistoryShow}
            updatedHistoryList={updatedHistoryList}
            loading={loading}
          />
        )}
        {modalName === 'account' && (
          <AccountSettings
            handleOpen={handleOpen}
            handleAuthInput={handleAuthInput}
            handleAuthInputSubmit={handleAuthInputSubmit}
            userAuthInfos={userAuthInfos}
            loading={loading}
          />
        )}
        {typeof (modalName) === 'number' && (
          <EditShow
            showId={modalName}
            getDetailShow={getDetailShow}
            userInfos={userInfos}
            userAuthToken={userAuthToken}
            showDetail={showDetail}
            userSingleFollowing={userSingleFollowing}
            userFollowings={userFollowings}
            getUserSingleFollowing={getUserSingleFollowing}
            getUserFollowings={getUserFollowings}
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
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
  modalName: PropTypes.node,
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
  handleDeleteHistoryShow: PropTypes.func,
  updatedHistoryList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getDetailShow: PropTypes.func,
  userInfos: PropTypes.object,
  userAuthToken: PropTypes.string,
  showDetail: PropTypes.object,
  userSingleFollowing: PropTypes.object,
  getUserSingleFollowing: PropTypes.func.isRequired,
  getUserFollowings: PropTypes.func.isRequired,
  userFollowings: PropTypes.array,
  handleChangeEditShow: PropTypes.func,
  handleSubmitEditShow: PropTypes.func,
  updatedUserSingleFollowing: PropTypes.object,
};

LogFormsModal.defaultProps = {
  open: false,
  handleClose: () => { },
  handleOpen: () => { },
  handleChangeEditShow: () => { },
  handleSubmitEditShow: () => { },
  modalName: null,
  handleDeleteHistoryShow: () => { },
  getDetailShow: () => { },
  userInfos: {},
  userAuthToken: '',
  showDetail: {},
  userSingleFollowing: {},
  userFollowings: [],
  updatedUserSingleFollowing: {},
};

export default LogFormsModal;
