// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';

import Navbar from 'src/components/Navbar';

// == Composant
const App = () => (
  <MuiThemeProvider theme={theme}>
    <div id="app">
      <Navbar />
    </div>
  </MuiThemeProvider>
);

// == Export
export default App;
