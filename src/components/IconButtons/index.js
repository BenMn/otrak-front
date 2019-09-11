/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles, createMuiTheme, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';


// Star Checkbox
import Checkbox from '@material-ui/core/Checkbox';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import {
  orange,
  green,
  blue,
  purple,
} from '@material-ui/core/colors';
//

import { ThemeProvider } from '@material-ui/styles';

// Star Checkbox
const OrangeCheckbox = withStyles({
  root: {
    color: orange[400],
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

// Edit Green IconButton
const GreenIconButton = withStyles({
  root: {
    color: green[600],
  },
})((props) => <IconButton color="primary" {...props} />);

// Play Bue IconButton
const BlueIconButton = withStyles({
  root: {
    color: blue[600],
  },
})((props) => <IconButton color="default" {...props} />);

// Play Bue IconButton
const PurpleIconButton = withStyles({
  root: {
    color: purple[600],
  },
})((props) => <IconButton color="default" {...props} />);

// My theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D1121C',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: '#FB8A01',
    },
    default: {
      main: '#FB8A01',
    },
  },
});

const useStyles = makeStyles(() => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>

        <OrangeCheckbox
          className={classes.button}
          icon={<StarBorder />}
          checkedIcon={<Star />}
          color="default"
        />

        <PurpleIconButton color="inherit" className={classes.button} aria-label="add to shopping cart">
          <VisibilityIcon />
        </PurpleIconButton>

        <BlueIconButton color="inherit" className={classes.button} aria-label="add to shopping cart">
          <PlayArrowIcon />
        </BlueIconButton>

        <GreenIconButton
          color="primary"
          className={classes.button}
          aria-label="upload picture"
          component="span"
        >
          <EditIcon />
        </GreenIconButton>

        <IconButton className={classes.button} aria-label="delete" color="primary">
          <CloseIcon />
        </IconButton>

      </ThemeProvider>

    </>
  );
}
