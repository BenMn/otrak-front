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
  trendingList,
  handleDeleteHistoryShow,
  updatedHistoryList,
  loading,
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
            trendingList={trendingList}
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
      </Fade>
    </Modal>
  </div>
);

LogFormsModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
  modalName: PropTypes.string,
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
  trendingList: PropTypes.array.isRequired,
  handleDeleteHistoryShow: PropTypes.func,
  updatedHistoryList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

LogFormsModal.defaultProps = {
  open: false,
  handleClose: () => { },
  handleOpen: () => { },
  modalName: '',
  handleDeleteHistoryShow: () => { },
};

export default LogFormsModal;
