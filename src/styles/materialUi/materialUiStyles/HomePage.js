/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import theme from 'src/styles/materialUi/materialUiTheme/theme';

// Icons
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SkipNextIcon from '@material-ui/icons/SkipNext';

// Components MaterialUI vanilla
import {
  Card,
  CardMedia,
  CardActions,
  Typography,

} from '@material-ui/core';
// ------------------- Styles of All cards in HomePage -------------------//

export const HomePageCard = styled(Card)({
  maxWidth: 340,
  margin: theme.spacing(2),
});

export const HomePageCardMedia = styled(CardMedia)({
  height: 300,
});

export const HomePageCardButton = styled(CardActions)({
  justifyContent: 'center',
  height: 50,
});

export const HomePageCardDescription = styled(Typography)({
  height: 130,
});

// ------------------- Styles of SearchResult.js ------------------------//


// ------------------- Styles of Aired.js ------------------------//

export const AiredIconTitle = styled(NewReleasesIcon)({
  fontSize: '1.5em',
  margin: '40px 0px',
});


// ------------------- Styles of Next.js ------------------------//

export const NextIconTitle = styled(SkipNextIcon)({
  fontSize: '1.5em',
  margin: '40px 0px',
});
