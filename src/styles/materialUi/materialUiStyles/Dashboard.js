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
} from '@material-ui/core';

import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite';

// .........................Header.........................

export const DashboardProgressBar = styled(LinearProgress)({
  height: 15,
  borderRadius: 25,
  boxShadow: '3px 4px 5px 0px rgba(30, 30, 30, 0.25)',
});

export const DashboardHeaderConainer = styled(Container)({
  minHeight: 300,
  maxWidth: 3000,
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


// .........................Tabs.........................

export const DashboardTab = styled(Tab)({
  fontSize: '1em',
  padding: theme.spacing(1, 11),
});

export const DashboardBoxOfCards = styled(Box)({
  backgroundColor: theme.palette.secondary.light,
  background: `linear-gradient(0deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.dark} 100%)`,
});
