/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import { LogFormsModal as Modal } from 'src/styles/materialUi/materialUiStyles/LogForms';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from './ModalFade';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const LogFormsModal = ({
  open,
  handleClose,
  formName,
  handleOpen,
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
        {formName === 'in' && <SignIn formName={formName} handleOpen={handleOpen} />}
        {formName === 'up' && <SignUp formName={formName} handleOpen={handleOpen} />}
        {formName === 'password' && <ForgotPassword formName={formName} handleOpen={handleOpen} />}
      </Fade>
    </Modal>
  </div>
);


LogFormsModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
  formName: PropTypes.string,
};

LogFormsModal.defaultProps = {
  open: false,
  handleClose: () => { },
  handleOpen: () => { },
  formName: '',
};

export default LogFormsModal;
