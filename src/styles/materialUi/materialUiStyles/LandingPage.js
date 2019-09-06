/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import {
  Avatar,
  Typography,
  Button,
  InputBase,
} from '@material-ui/core';

export const LandingPageAvatar = styled(Avatar)({
  position: 'relative',
  top: '65%',
  left: '5%',
  width: '10vw',
  height: '10vw',
});

export const LandingPageSlogan = styled(Typography)({
  position: 'relative',
  top: '55vh',
  left: '16%',
  fontSize: '2em',
  display: 'inline',
});

export const LandingPageSignInButton = styled(Button)({
  position: 'inherit',
  float: 'right',
  margin: '30px 60px 0px 50px',
  borderColor: '#fff',
});

export const LandingPageSignUpButton = styled(Button)({
  position: 'inherit',
  float: 'right',
  marginTop: 30,
  borderColor: '#fff',
});

export const LandingPageSearchIcon = styled(SearchIcon)({
  position: 'relative',
  color: '#fff',
  left: 50,
  top: 30,
  display: 'flex',
  alignSelf: 'center',
  marginRight: 10,
});

export const LandingPageSearchInput = styled(InputBase)({
  position: 'absolute',
  display: 'none',
  left: 95,
  top: 30,
});
