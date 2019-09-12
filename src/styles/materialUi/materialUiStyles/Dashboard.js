/* eslint-disable import/prefer-default-export */
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { styled } from '@material-ui/styles';
import {
  LinearProgress,
  Container,
  Avatar,
  Typography,
  Button,
} from '@material-ui/core';

import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite';

// ................Header................

export const DashboardProgressBar = styled(LinearProgress)({
  height: 15,
  borderRadius: 25,
  boxShadow: '3px 4px 5px 0px rgba(30, 30, 30, 0.25)',
});

export const DashboardHeaderConainer = styled(Container)({
  minHeight: 300,
  display: 'flex',
  alignItems: 'center',
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
