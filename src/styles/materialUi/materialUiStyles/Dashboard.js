/* eslint-disable import/prefer-default-export */
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { styled } from '@material-ui/styles';
import {
  LinearProgress,
  Container,
  Avatar,
  Typography,
  Button,
  Tab,
  Box,
  TextField,
  Input,
} from '@material-ui/core';

import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// .........................Header.........................

export const DashboardProgressBar = styled(LinearProgress)({
  height: 15,
  borderRadius: 25,
  boxShadow: '3px 4px 5px 0px rgba(30, 30, 30, 0.25)',
});

export const DashboardTitleProgressBar = styled(Typography)({
  color: theme.palette.common.white,
});

export const DashboardHeaderConainer = styled(Container)({
  padding: '3vh 3vh 1vh 3vh',
  minHeight: '30vh',
  maxWidth: '3000vw',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.light,
  background: 'linear-gradient(0deg, rgba(33,33,33,1) 0%, rgba(51,51,51,1) 50%, rgba(33,33,33,1) 100%)',
});

export const DashboardHeaderAvatar = styled(Avatar)({
  width: 200,
  height: 200,
  cursor: 'pointer',
});

export const DashboardHeaderAvatarLink = styled(Typography)({
  position: 'absolute',
  top: '85%',
  fontSize: '0.5em',
  color: theme.palette.text.disabled,
});

export const DashboardHeaderAvatarIcon = styled(CreateIcon)({
  marginTop: 6,
  color: theme.palette.secondary.light,
  fontSize: '1.2em',
  cursor: 'pointer',
});

export const DashboardHeaderUsername = styled(Typography)({
  marginLeft: theme.spacing(2),
  color: theme.palette.common.white,
});

export const DashboardHeaderButtons = styled(Button)({
  padding: theme.spacing(1.3, 13),
  width: '120%',
  marginRight: -70,
});

export const DashboardHeaderButtonsHistoryIcon = styled(HistoryIcon)({
  fontSize: '5em',
  position: 'absolute',
  float: 'left',
  color: theme.palette.common.white,
  marginLeft: '-35%',
});

export const DashboardHeaderButtonsSettingsIcon = styled(SettingsInputCompositeIcon)({
  fontSize: '5em',
  position: 'absolute',
  float: 'left',
  color: theme.palette.common.white,
  marginLeft: '-35%',
});

export const DashboardUsernameIcon = styled(AccountCircle)({
  fontSize: '1.4em',
});

export const DashboardUsernameInput = styled(Input)({
  color: theme.palette.common.white,
  textAlign: 'center',
});

// .........................Modals.........................

// HISTORY
export const DashboardHistoryContainer = styled(Container)({
  minHeight: '80vh',
  minWidth: '60vh',
  flexWrap: 'nowrap',
});

export const DashboardHistoryIcon = styled(HistoryIcon)({
  fontSize: '30em',
  position: 'absolute',
  color: theme.palette.secondary.dark,
  opacity: 0.05,
  margin: '-15vh 0 0 -15vh',
});

export const DashboardHistoryShowSubtitle = styled(Typography)({
  margin: '-17px 0 17px 0',
  color: theme.palette.text.disabled,
});

export const DashboardHistoryListContainer = styled(Container)({
  maxHeight: '60vh',
  overflowY: 'scroll',
  overflowX: 'hidden',
  zIndex: 3,
});

export const DashboardHistoryDeleteIcon = styled(DeleteForeverIcon)({
  cursor: 'pointer',
});

// ACCOUNT SETTINGS
export const DashboardAccountTextField = styled(TextField)({
  color: theme.palette.primary.main,
  input: {
    color: theme.palette.primary.main,
  },
});

export const DashboardSettignsIcon = styled(SettingsInputCompositeIcon)({
  fontSize: '30em',
  transform: 'rotate(180deg)',
  position: 'absolute',
  color: theme.palette.primary.light,
  opacity: 0.05,
  margin: '-15vh 0 0 -15vh',
});

// .........................Tabs.........................

export const DashboardTab = styled(Tab)({
  fontSize: '1em',
  backgroundColor: theme.palette.primary.dark,
});

export const DashboardBoxOfCards = styled(Box)({
  minHeight: '60vh',
  backgroundColor: theme.palette.secondary.light,
  background: `linear-gradient(0deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
});
