/* eslint-disable import/prefer-default-export */
import { styled } from '@material-ui/styles';
import { Button, InputBase, Paper } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import SearchIcon from '@material-ui/icons/Search';

export const NavbarLogButton = styled(Button)({
  float: 'right',
  marginRight: 10,
});

// White SearchBar

export const NavbarSearch = styled(Paper)({
  position: 'relative',
  borderRadius: 25,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  display: 'flex',
  justifyContent: 'end',
  width: '100%',
});

export const NavbarSearchIcon = styled(SearchIcon)({
  width: 25,
  color: theme.palette.common.white,
  display: 'flex',
  alignSelf: 'center',
  margin: '5px 5px 5px 10px',
});

export const NavbarSearchInput = styled(InputBase)({
  width: '200%',
  color: theme.palette.common.white,
  marginLeft: 10,
});
