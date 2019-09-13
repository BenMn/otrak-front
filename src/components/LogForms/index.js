/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import { LogFormsModal as Modal } from 'src/styles/materialUi/materialUiStyles/LogForms';
import Backdrop from '@material-ui/core/Backdrop';

import History from 'src/components/Dashboard/Header/History';
import AccountSettings from 'src/components/Dashboard/Header/AccountSettings';

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
          />
        )}
        {modalName === 'up' && (
          <SignUp
            modalName={modalName}
            handleOpen={handleOpen}
            handleAuthInput={handleAuthInput}
            handleAuthInputSubmit={handleAuthInputSubmit}
            userAuthInfos={userAuthInfos}
          />
        )}
        {modalName === 'password' && (
          <ForgotPassword
            modalName={modalName}
            handleOpen={handleOpen}
            handleAuthInput={handleAuthInput}
            handleAuthInputSubmit={handleAuthInputSubmit}
            userAuthInfos={userAuthInfos}
          />
        )}
        {modalName === 'history' && (
          <History />
        )}
        {modalName === 'account' && (
          <AccountSettings />
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
};

LogFormsModal.defaultProps = {
  open: false,
  handleClose: () => { },
  handleOpen: () => { },
  modalName: '',
};

export default LogFormsModal;
