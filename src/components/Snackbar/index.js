import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const CustomSnackbar = () => (
  <div>
    <Snackbar
      anchorOriginTopCenter
      key="top,center"
      autoHideDuration={5}
      message={<span>Changes saved !</span>}
      style={{ backgroundColor: '#25e4b4', color: '#fff' }}
    />
    OPIJPOIUGIHIJBJIOJBJOJNJIOJHJIOJHJIOIJIOJHJOJIOIJJOJOJOKJ
  </div>
);

export default CustomSnackbar;
