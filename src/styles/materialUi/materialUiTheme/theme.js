import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {

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
  },
});

export default theme;
