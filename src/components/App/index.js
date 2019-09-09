// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';

// == Import : local
import Navbar from 'src/containers/Navbar';
import Footer from 'src/containers/Footer';
import LandingPage from 'src/containers/LandingPage';
// import LogFormModal from 'src/containers/LogForms';

// == Composant
const App = ({
  view,
  handleInput,
  handleInputSubmit,
}) => (
  <MuiThemeProvider theme={theme}>
    <div id="app">
      {view !== 'landing' && <Navbar handleInput={handleInput} handleInputSubmit={handleInputSubmit} />}
      <LandingPage />
      <Footer />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  view: PropTypes.string.isRequired,
  handleInput: PropTypes.func,
  handleInputSubmit: PropTypes.func,
};

App.defaultProps = {
  handleInput: () => { },
  handleInputSubmit: () => { },
};

// == Export
export default App;
