// == Import : npm
import React from 'react';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';

// == Import : local
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import LandingPage from 'src/containers/LandingPage';

// == Composant
const App = ({ view }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <div id="app">
        {view !== 'landing' && <Navbar />}
        <LandingPage />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

// == Export
export default App;
