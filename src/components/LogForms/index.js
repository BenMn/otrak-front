/* eslint-disable react/prop-types */

import React from 'react';
import { Typography } from '@material-ui/core';
import { LogFormsModal, LogFormModalPaper } from 'src/styles/materialUi/materialUiStyles/LogForms';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from './ModalFade';


export default function SpringModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-spring
      </button>
      <LogFormsModal
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
          <LogFormModalPaper>
            <Typography color="textSecondary" component="h2" id="spring-modal-title">Spring modal</Typography>
            <Typography color="textSecondary" component="p" id="spring-modal-description">react-spring animates me.</Typography>
          </LogFormModalPaper>
        </Fade>
      </LogFormsModal>
    </div>
  );
}
