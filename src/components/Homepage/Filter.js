// Import NPM
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Material UI Styling Methods
import { makeStyles, withStyles } from '@material-ui/core/styles';

// Material UI Components
import {
  Drawer,
  CssBaseline,
  AppBar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Radio,
  Box,
} from '@material-ui/core';

import MuiToolbar from '@material-ui/core/Toolbar';

//  Material UI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

import theme from 'src/styles/materialUi/materialUiTheme/theme';


// Style of all components in the file
const drawerWidth = 240;

const Toolbar = withStyles({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    height: 50,
  },
})(MuiToolbar);


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.secondary.dark,
    color: '#FFF',
    top: 'auto',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    display: 'flex',
  },
}));

const Filter = ({ sortBy }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="relative"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap onClick={handleDrawerOpen}>
            Sort by
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Box>
            <ListItem button key="Title">
              <Radio
                checked={selectedValue === 'Title'}
                value="Title"
                color="default"
                onChange={handleChange}
              />
              <ListItemText primary="Title" onClick={() => sortBy('Title')} />
            </ListItem>
          </Box>

          <Box>
            <ListItem button key="Release date">
              <Radio
                checked={selectedValue === 'Release date'}
                value="Release date"
                color="default"
                onChange={handleChange}
              />
              <ListItemText primary="Release date" onClick={() => sortBy('Release date')} />
            </ListItem>
          </Box>

          <Box>
            <ListItem button key="Rating">
              <Radio
                checked={selectedValue === 'Rating'}
                value="Rating"
                color="default"
                onChange={handleChange}
              />
              <ListItemText primary="Rating" onClick={() => sortBy('Rating')} />
            </ListItem>
          </Box>

          <Box>
            <ListItem button key="Language">
              <Radio
                checked={selectedValue === 'Language'}
                value="Language"
                color="default"
                onChange={handleChange}
              />
              <ListItemText primary="Language" onClick={() => sortBy('Language')} />
            </ListItem>
          </Box>
        </List>
      </Drawer>
    </div>
  );
};

Filter.propTypes = {
  sortBy: PropTypes.func.isRequired,
};

export default Filter;
