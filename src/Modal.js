/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import { LogFormsModal as Modal } from 'src/styles/materialUi/materialUiStyles/LogForms';
// import SignIn from 'src/components/LogForms/SignIn';
// import SignUp from 'src/components/LogForms/SignUp';
// import ForgotPassword from 'src/components/LogForms/ForgotPassword';

const LogFormsModal = ({
  open,
  handleClose,
  formName,
  // handleOpen,
  // handleUserAuthInfos,
  // handleAuthInput,
}) => (
  <div>
    {formName === 'in' && (
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        YO C'EST LE SIGN IN
      </Modal>
    )}

    {formName === 'up' && (
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        YO C'EST LE SIGN UP
      </Modal>
    )}

    {formName === 'password' && (
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        YO C'EST LE PASSWORD
      </Modal>
    )}
  </div>
);


LogFormsModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  // handleOpen: PropTypes.func,
  // handleAuthInput: PropTypes.func,
  formName: PropTypes.string,
};

LogFormsModal.defaultProps = {
  open: false,
  handleClose: () => { },
  // handleOpen: () => { },
  // handleAuthInput: () => { },
  formName: '',
};

export default LogFormsModal;

{ /* <SignIn
handleOpen={handleOpen}
handleUserAuthInfos={handleUserAuthInfos}
handleAuthInput={handleAuthInput}
/> */ }

{ /* <SignUp
handleOpen={handleOpen}
handleUserAuthInfos={handleUserAuthInfos}
handleAuthInput={handleAuthInput}
/> */ }

{ /* <ForgotPassword
handleOpen={handleOpen}
handleUserAuthInfos={handleUserAuthInfos}
handleAuthInput={handleAuthInput}
/> */ }
