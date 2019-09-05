/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import { Modal, Paper } from '@material-ui/core';
import theme from 'src/styles/materialUi/materialUiTheme/theme';

export const LogFormsModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LogFormModalPaper = styled(Paper)({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
});
