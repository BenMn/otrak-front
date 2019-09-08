/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import {
  Modal,
  Paper,
  Button,
  Typography,
} from '@material-ui/core';
import theme from 'src/styles/materialUi/materialUiTheme/theme';

export const LogFormsModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LogFormModalPaper = styled(Paper)({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: 50,
  minHeight: 550,
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
