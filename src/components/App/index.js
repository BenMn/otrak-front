// == Import : npm
import React from 'react';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';

// == Import : local
import './app.scss';
import Footer from 'src/components/Footer';
// == Composant
const App = () => (
  <MuiThemeProvider theme={theme}>
    <div id="app">
      <Footer />
    </div>
  </MuiThemeProvider>
);

// == Export
export default App;
