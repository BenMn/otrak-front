/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import theme from 'src/styles/materialUi/materialUiTheme/theme';

// Components MaterialUI vanilla
import {
  CardMedia,
  Box,
} from '@material-ui/core';


export const TeamCardMedia = styled(CardMedia)({
  height: 420,
  display: 'flex',
  alignItems: 'flex-end',
});

export const TeamBoxOfCards = styled(Box)({
  minHeight: '100vh',
  backgroundColor: theme.palette.secondary.light,
  background: `linear-gradient(0deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
});
