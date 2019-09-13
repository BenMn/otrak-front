import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {

    spacing: {
      mui: true,
    },

    primary: {
      light: '#4d4d4d',
      main: '#212121',
      dark: '#171717',
      contrastText: '#fff',
    },

    secondary: {
      light: '#c54949',
      main: '#b71c1c',
      dark: '#801313',
      contrastText: '#fff',
    },

    status: {
      danger: '#FB8A01',
      success: '#44AF69',
      info: '#2D7DD2',
    },

    common: {
      black: '#000',
      white: '#fff',
      grey: '#EEE',
    },

    text: {
      primary: 'rgba(0, 0, 0, 0.97)',
      secondary: 'rgba(255, 255, 255, 0.77)',
      disabled: 'rgba(0, 0, 0, 0.37)',
      hint: 'rgba(0, 0, 0, 0.37)',
    },
  },
});

export default theme;
