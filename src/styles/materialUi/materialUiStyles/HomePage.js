/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import theme from 'src/styles/materialUi/materialUiTheme/theme';

// Icons
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';


// Components MaterialUI vanilla
import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  Grid,
  Paper,
  Container,
} from '@material-ui/core';
// ------------------- Styles of All cards in HomePage -------------------//
export const HomePageGridOfOnCard = styled(Grid)({
  outline: 'none',
});


export const HomePageCard = styled(Card)({
  margin: theme.spacing(2),
});

export const HomePageCardMedia = styled(CardMedia)({
  height: 420,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const HomePageCardButton = styled(CardActions)({
  justifyContent: 'center',
  height: 50,
});

export const HomePageCardDescription = styled(Typography)({
  height: 50,
});

export const HomePageCardTitle = styled(Typography)({
  color: theme.palette.common.white,
  // background: theme.palette.common.black,
  // background: 'linear-gradient(0deg, rgba(21,21,21,1) 40%, rgba(21,21,21,0) 100%)',
  minHeight: 70,
  width: '100%',
  padding: theme.spacing(2),
  fontSize: 20,
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
});

export const HomePageIconContainer = styled(Paper)({
  margin: 4,
  color: theme.palette.common.white,
  width: 'fit-content',
  borderRadius: '50%',
  boxShadow: 'inset 0px 0px 5px 0px rgba(100,100,100,1)',
  backgroundColor: theme.palette.primary.main,
  cursor: 'pointer',
});

export const HomePageCardIcon = styled(TuneIcon)({
  borderRadius: '50%',
  margin: '6px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
});

export const HomepageScreenPicture = styled(CardMedia)({
  width: '100vw',
});


// ------------------- Styles of SearchResult.js ------------------------//

export const SearchResultIconTitle = styled(SearchIcon)({
  fontSize: '1.2em',
  margin: '40px 0px',
});

export const SearchResultTitle = styled(Typography)({
  color: theme.palette.common.white,
  // background: theme.palette.common.black,
  background: 'linear-gradient(0deg, rgba(21,21,21,1) 40%, rgba(21,21,21,0) 100%)',
  minHeight: 70,
  width: '100%',
  padding: theme.spacing(2),
  fontSize: 20,
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
});

export const SearchResultContainerWithoutSlider = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
});

export const SearchResultGridWithoutSlider = styled(Grid)({
  minWidth: 352,
});

// ------------------- Styles of Aired.js ------------------------//

export const AiredIconTitle = styled(NewReleasesIcon)({
  fontSize: '1.2em',
  margin: '40px 7px 40px 0',
});

export const AiredBlockTitleSeeAll = styled(Grid)({
  fontSize: '1.5em',
  margin: '70px 0px 0px 0px',
});

export const AiredSeeAllIcon = styled(ArrowForwardIcon)({
  fontSize: '1.5em',
});

export const AiredSubtitleSeasonEpisode = styled(Typography)({
  color: theme.palette.secondary.main,
  width: '100%',
  padding: '0 8px 8px 8px',
  marginTop: -12,
  fontSize: 12,
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
});

export const AiredTitleCardAndSubtitle = styled(Grid)({
  background: 'linear-gradient(0deg, rgba(21,21,21,1) 65%, rgba(21,21,21,0) 100%)',
});
// ------------------- Styles of Next.js ------------------------//

export const NextIconTitle = styled(SkipNextIcon)({
  fontSize: '1.5em',
  margin: '40px 0px 40px 0px',
});

export const NextBlockTitleSeeAll = styled(Grid)({
  fontSize: '1.5em',
  margin: '70px 0px 0px 0px',
});

export const NextSeeAllIcon = styled(ArrowForwardIcon)({
  fontSize: '1.5em',
});

export const NextGridCurrentCard = styled(Grid)({
  minWidth: '320px',
});
