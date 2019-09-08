/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import {
  Button,
  AppBar,
  Icon,
} from '@material-ui/core';

export const FooterButton = styled(Button)({
  marginTop: 10,
  marginLeft: 30,
});

export const FooterAppBar = styled(AppBar)({
  display: 'flex',
  justifyContent: 'space-evenly',
});

export const FooterIcon = styled(Icon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
  height: 'auto',
  float: 'right',
  paddingTop: 15,
});
