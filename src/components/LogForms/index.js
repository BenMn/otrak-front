/* eslint-disable react/prop-types */
// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

//  Material UI Components
import Backdrop from '@material-ui/core/Backdrop';

//  Material UI custom Components
import { LogFormsModal as Modal } from 'src/styles/materialUi/materialUiStyles/LogForms';

// Import locaux
import Fade from 'src/components/LogForms/ModalFade';
import SignIn from 'src/components/LogForms/SignIn';
import SignUp from 'src/components/LogForms/SignUp';
import ForgotPassword from 'src/components/LogForms/ForgotPassword';

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
