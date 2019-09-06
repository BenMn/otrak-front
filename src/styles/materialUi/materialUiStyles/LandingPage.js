/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

// Icons
import LocalMoviesOutlinedIcon from '@material-ui/icons/LocalMoviesOutlined';

import TuneIcon from '@material-ui/icons/Tune';

import Star from '@material-ui/icons/Star';

// Components MaterialUI vanilla
import {
  Avatar,
  Typography,
  Button,
  InputBase,
  Container,
} from '@material-ui/core';


export const LandingPageContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 100,
});

// ------------------- Styles of HeadScreen.js ------------------------//

export const HeadScreenAvatar = styled(Avatar)({
  position: 'relative',
  top: '65%',
  left: '5%',
  width: '10vw',
  height: '10vw',
});

export const HeadScreenSlogan = styled(Typography)({
  position: 'relative',
  top: '55vh',
  left: '16%',
  fontSize: '2em',
  display: 'inline',
});

export const HeadScreenSignInButton = styled(Button)({
  position: 'inherit',
  float: 'right',
  margin: '30px 60px 0px 50px',
  borderColor: '#fff',
});

export const HeadScreenSignUpButton = styled(Button)({
  position: 'inherit',
  float: 'right',
  marginTop: 30,
  borderColor: '#fff',
});

export const HeadScreenSearchIcon = styled(SearchIcon)({
  position: 'relative',
  color: '#fff',
  left: 50,
  top: 30,
  display: 'flex',
  alignSelf: 'center',
  marginRight: 10,
});

export const HeadScreenSearchInput = styled(InputBase)({
  position: 'absolute',
  display: 'none',
  left: 95,
  top: 30,
});

// ------------------- End styles of HeadScreen.js ------------------------//


// ------------------- Styles of ApiInfos.js ------------------------//

export const ApiInfosIconMovie1 = styled(LocalMoviesOutlinedIcon)({
  fontSize: '3em',
  left: 0,
  top: 930,

});

// ------------------- End styles of ApiInfos.js ------------------------//


// ------------------- Styles of ManageShows.js ------------------------//

export const ManageShowsIconSettings = styled(TuneIcon)({
  fontSize: '3em',
});

export const ManageShowsIconStar = styled(Star)({
  color: '#FB8A01',
});
