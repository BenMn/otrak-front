/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import {
  Modal,
  Paper,
  Button,
  Typography,
  TextField,
} from '@material-ui/core';
import theme from 'src/styles/materialUi/materialUiTheme/theme';

export const LogFormsModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LogFormModalPaper = styled(Paper)({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 0 15px 0px rgba(200, 200, 200, 0.55)',
  padding: 50,
  maxHeight: '90vh',
  maxWidth: '50vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LogFormModalButton = styled(Button)({
  marginTop: 20,
  marginBottom: 20,
});

export const LogFormModalSubtitle = styled(Typography)({
  margintop: -15,
  color: theme.palette.text.disabled,
});


// Edit Show modal

export const LogFormModalEditPaper = styled(Paper)({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 0 15px 0px rgba(200, 200, 200, 0.55)',
  maxHeight: '75vh',
  maxWidth: '90vw',
  padding: 0,
});

export const EditShowField = styled(TextField)({
  width: '15vw',
});

export const EditShowLargeField = styled(TextField)({
  width: '31vw',
  innerHeight: '21vh',
});

export const EditShowButtons = styled(Button)({
  width: '15vw',
});
