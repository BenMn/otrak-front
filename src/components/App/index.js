// == Import : npm
import React from 'react';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';

// == Import : local
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import LandingPage from 'src/containers/LandingPage';
import LogFormModal from 'src/components/LogForms';

// == Composant
const App = ({ view }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <div id="app">
        {view !== 'landing' && <Navbar />}
         <LogFormModal />
        <LandingPage />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

// == Export
export default App;
