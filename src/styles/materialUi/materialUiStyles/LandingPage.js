/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import theme from 'src/styles/materialUi/materialUiTheme/theme';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import LocalMoviesOutlinedIcon from '@material-ui/icons/LocalMoviesOutlined';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TuneIcon from '@material-ui/icons/Tune';
import Star from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


// Components MaterialUI vanilla
import {
  Typography,
  Button,
  InputBase,
  Container,
  Card,
  CardMedia,
  Grid,
  Paper,
} from '@material-ui/core';


export const LandingPageContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 100,
});

// ------------------- Styles of HeadScreen.js ------------------------//

export const HeadScreenSlogan = styled(Typography)({
  position: 'relative',
  top: '50vh',
  left: '3%',
  fontSize: '2em',
  display: 'inline',
  zIndex: '2',
  width: 'fit-content',
});

export const HeadScreenSignInButton = styled(Button)({
  position: 'inherit',
  borderColor: theme.palette.common.white,
  color: theme.palette.common.white,
});

export const HeadScreenSignUpButton = styled(Button)({
  margin: '0 60px 0 50px',
  position: 'inherit',
  borderColor: theme.palette.common.white,
  color: theme.palette.common.white,
});

export const HeadScreenSearchIcon = styled(SearchIcon)({
  position: 'relative',
  color: theme.palette.secondary.main,
  left: 50,
  display: 'flex',
  alignSelf: 'center',
  marginRight: 10,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '50%',
  padding: '3px',
  boxShadow: '3px 4px 7px 0px rgba(30, 30, 30, 0.55)',
});

export const HeadScreenSearchInput = styled(InputBase)({
  position: 'absolute',
  display: 'none',
  left: 95,
  color: theme.palette.common.white,
  backgroundColor: '#00000020',
  borderRadius: 15,
  paddingLeft: 15,
  width: 350,
  boxShadow: '3px 4px 7px 0px rgba(30, 30, 30, 0.55)',
});

// ------------------- End styles of HeadScreen.js ------------------------//


// ------------------- Styles of ApiInfos.js ------------------------//

export const ApiInfosIconMovie1 = styled(LocalMoviesOutlinedIcon)({
  fontSize: '3em',
  left: 0,
  top: 930,

});

// Black SearchBar

export const ApiInfosSearchDark = styled(Paper)({
  float: 'right',
  width: '65%',
  height: 40,
  margin: '2% 0 0 35%',
  display: 'flex',
  position: 'initial',
  borderRadius: 15,
  backgroundColor: theme.palette.secondary.light,
  boxShadow: '3px 4px 7px 0px rgba(30, 30, 30, 0.55)',
  marginTop: 30,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
});

export const ApiInfosSearchDarkIcon = styled(SearchIcon)({
  width: 25,
  color: theme.palette.common.white,
  display: 'flex',
  alignSelf: 'center',
  margin: 5,
});

export const ApiInfosSearchDarkInput = styled(InputBase)({
  color: theme.palette.common.white,
});


// ------------------- End styles of ApiInfos.js ------------------------//


// ------------------- Styles of ManageShows.js ------------------------//

export const ManageShowsIconSettings = styled(TuneIcon)({
  fontSize: '3em',
});

export const ManageShowsIconStar = styled(Star)({
  color: '#FB8A01',
});

// ------------------- End styles of ManageShows.js ------------------------//


// ------------------- Styles of Trending.js ------------------------//

export const TrendingCard = styled(Card)({
  maxWidth: 210,
  boxShadow: '10px 19px 24px 0px rgba(20, 20, 20, 0.95)',
  borderRadius: 10,
  '&:hover': {
    transform: 'scale(0.9)',
    boxShadow: '6px 15px 20px 0px rgba(10, 10, 10, 0.95)',
    cursor: 'pointer',
  },
  justifyContent: 'center',
  margin: '25px 0',

});

export const TrendingCardMedia = styled(CardMedia)({
  height: 295,

});

export const TrendingTitleTranding = styled(Typography)({
  padding: '130px 0 40px 0',
});

export const TrendingSubtitle = styled(Typography)({
  padding: '55px 0px 15px 0px',
});

export const TrendingGridSeries = styled(Grid)({
  paddingBottom: 100,
  paddingLeft: 75,
});

export const TrendingGridAnime = styled(Grid)({
  paddingLeft: 75,
});

export const TrendingIcon = styled(TrendingUpIcon)({
  fontSize: '1.3em',
  marginRight: '1rem',
});

// ------------------- End styles of Trending.js ------------------------//


// ------------------- Styles of StartNow.js ------------------------//

export const StartNowGrid = styled(Grid)({
  paddingTop: 25,
  paddingBottom: 100,
  backgroundColor: theme.palette.secondary.main,
});

export const StartNowIcon = styled(AccountCircleIcon)({
  fontSize: '4.5em',
  color: theme.palette.primary.dark,
});

export const StartNowTitle = styled(Typography)({
  paddingBottom: 40,
  paddingTop: 20,
  color: theme.palette.common.white,
});
