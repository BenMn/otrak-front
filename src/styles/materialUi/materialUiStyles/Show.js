/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import {
  CardMedia,
  Typography,
  Container,
  List,
  Button,
  Grid,
} from '@material-ui/core';
import theme from 'src/styles/materialUi/materialUiTheme/theme';


export const IndexScreenPicture = styled(CardMedia)({
  height: '210vh',
  width: '100vw',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center',
  // background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 30%,rgb(255, 255, 255) 100%)',

});

export const IndexContainer = styled(Container)({
  backgroundColor: '#212121d7',
  padding: 40,
  borderRadius: 15,
  boxShadow: '6px 6px 10px 1px rgba(80, 80, 80, .5)',
});

export const IndexButtonReturn = styled(Button)({
  marginBottom: 20,
});


// -----------------------------Resume HeadScreen.js--------------------------//


export const ShowHeadPoster = styled(CardMedia)({
  minHeight: 410,
  minWidth: 260,
  maxHeight: 700,
  maxWidth: 540,
  borderRadius: 10,
  alignItems: 'center',
});

export const ShowHeadTitle = styled(Typography)({
  color: theme.palette.common.white,
  maxWidth: 'fit-content',
});

// -----------------------------ResumeShow.js--------------------------//


export const ResumeShowResumeText = styled(Typography)({
  display: 'flex',
  justifyContent: 'flex-end',
  color: theme.palette.common.white,
});

export const ResumeShowTitle = styled(Typography)({
  marginTop: '7vh',
  color: theme.palette.common.white,
});


// -----------------------------DetailShow.js--------------------------//

export const DetailShowGroupList = styled(List)({
  color: theme.palette.common.white,
});


// -----------------------------Casting.js--------------------------//


export const CastingTitleCasting = styled(Typography)({
  marginTop: '7vh',
  color: theme.palette.common.white,
});

export const CastingTitleNotAvailable = styled(Typography)({
  marginTop: '7vh',
  color: theme.palette.common.white,
});

export const CastingContainerWithoutSlider = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
});

export const CastingGridWithoutSlider = styled(Grid)({
  minWidth: 252,
});
