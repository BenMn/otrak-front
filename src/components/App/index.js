// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Material UI style provider
import { MuiThemeProvider } from '@material-ui/core';

// == Import : local

// Custom theme
import theme from 'src/styles/materialUi/materialUiTheme/theme';

import Navbar from 'src/containers/Navbar';
import Footer from 'src/containers/Footer';
import LandingPage from 'src/containers/LandingPage';
import LogFormModal from 'src/containers/LogForms';
import Homepage from 'src/containers/Homepage';
import Show from 'src/containers/Show';


// == Composant
const App = ({
  view,
  handleOpen,
  handleSearchInput,
  handleSearchInputSubmit,
}) => (
  <MuiThemeProvider theme={theme}>
    <div id="app">
      {view !== 'landing'
        && (
          <Navbar
            handleOpen={handleOpen}
            handleSearchInput={handleSearchInput}
            handleSearchInputSubmit={handleSearchInputSubmit}
          />
        )}
      <LogFormModal />
      <LandingPage />
      {/* <Homepage /> */}
      {/* <Show /> */}
      <Footer />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  view: PropTypes.string.isRequired,
  handleOpen: PropTypes.func,
  handleSearchInput: PropTypes.func,
  handleSearchInputSubmit: PropTypes.func,
};

App.defaultProps = {
  handleOpen: () => { },
  handleSearchInput: () => { },
  handleSearchInputSubmit: () => { },
};

// == Export
export default App;
