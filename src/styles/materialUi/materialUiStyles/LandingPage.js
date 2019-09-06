/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import {
  Avatar,
  Typography,
  Button,
} from '@material-ui/core';

export const LandingPageAvatar = styled(Avatar)({
  position: 'relative',
  top: '70%',
  left: '5%',
  width: '10vw',
  height: '10vw',
});

export const LandingPageSlogan = styled(Typography)({
  position: 'relative',
  top: '60%',
  left: '15%',
  fontSize: '2em',
  // color: '#fff',
});

export const LandingPageLogButton = styled(Button)({
  position: 'relative',
  top: '2em',
  left: '80%',
  margin: 8,
  borderColor: '#fff',
});
