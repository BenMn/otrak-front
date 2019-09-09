// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';

// == Import : local
import Navbar from 'src/containers/Navbar';
import Footer from 'src/containers/Footer';
import LandingPage from 'src/containers/LandingPage';
import LogFormModal from 'src/containers/LogForms';
import Homepage from 'src/containers/Homepage';

// == Composant
const App = ({ viewLanding }) => (
  <MuiThemeProvider theme={theme}>
    <div id="app">
      {viewLanding !== 'landing' && <Navbar />}
      <LogFormModal />
      {/* <LandingPage /> */}
      <Homepage />
      <Footer />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  viewLanding: PropTypes.string.isRequired,
};

// == Export
export default App;
