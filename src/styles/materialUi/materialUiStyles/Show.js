/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import {
  CardMedia,
  Typography,
  Container,
  List,
} from '@material-ui/core';
import theme from 'src/styles/materialUi/materialUiTheme/theme';


export const IndexScreenPicture = styled(CardMedia)({
  height: '180vh',
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

// -----------------------------Resume HeadScreen.js--------------------------//


export const ShowHeadPoster = styled(CardMedia)({
  height: 380,
  width: 260,
  borderRadius: 10,
});

export const ShowHeadTitle = styled(Typography)({
  color: theme.palette.common.white,
});

// -----------------------------ResumeShow.js--------------------------//


export const ResumeShowResumeText = styled(Typography)({
  display: 'flex',
  justifyContent: 'flex-end',
  color: theme.palette.common.white,
});

export const ResumeShowTitle = styled(Typography)({
  marginTop: 20,
  color: theme.palette.common.white,
});


// -----------------------------DetailShow.js--------------------------//

export const DetailShowGroupList = styled(List)({
  paddingTop: 10,
  color: theme.palette.common.white,
});


// -----------------------------Casting.js--------------------------//


export const CastingTitleCasting = styled(Typography)({
  paddingTop: 20,
  color: theme.palette.common.white,
});
