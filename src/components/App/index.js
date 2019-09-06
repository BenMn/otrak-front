// == Import : npm
import React from 'react';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';

// == Import : local
import Navbar from 'src/containers/Navbar';
import Footer from 'src/containers/Footer';
import LogFormModal from 'src/components/LogForms';

// == Composant
const App = () => (
  <MuiThemeProvider theme={theme}>
    <div id="app">
      <Navbar />
      <LogFormModal />
      <Footer />
    </div>
  </MuiThemeProvider>
);

// == Export
export default App;
