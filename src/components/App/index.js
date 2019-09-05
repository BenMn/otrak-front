// == Import : npm
import React from 'react';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';

// == Import : local
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import SpringModal from 'src/components/LogForms';

// == Composant
const App = () => (
  <MuiThemeProvider theme={theme}>
    <div id="app">
      <Navbar />
      <SpringModal />
      <Footer />
    </div>
  </MuiThemeProvider>
);

// == Export
export default App;
