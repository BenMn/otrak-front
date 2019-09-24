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

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  // // Sort by: title => order(resultArray)
  // const sortBy = (filterName) => {
  //   switch (filterName) {
  //     case 'Title':
  //       return storeSearchInputResult.map((show) => show.name).sort();

  //     case 'Release date':
  //       return (console.log("c'est le Release !"));

  //     case 'Rating':
  //       return (console.log("c'est le Rating !"));

  //     case 'Language':
  //       return (console.log("c'est le Language !"));

  //     default:
  //       return 'ça marche pas';
  //   }
  // };


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
          {['Title', 'Release date', 'Rating', 'Language'].map((text) => (
            <ListItem button key={text} onClick={() => sortBy(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

Filter.propTypes = {
  sortBy: PropTypes.func.isRequired,
};

export default Filter;
