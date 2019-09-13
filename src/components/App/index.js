// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Material UI style provider
import { MuiThemeProvider } from '@material-ui/core';
import { Route, Redirect } from 'react-router-dom';


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
  handleOpen,
  handleSearchInput,
  handleSearchInputSubmit,
  storeSearchInputResult,
}) => (
  <MuiThemeProvider theme={theme}>
    <div id="app">
      {window.location.pathname !== '/'
        && (
          <Navbar
            handleOpen={handleOpen}
            handleSearchInput={handleSearchInput}
            handleSearchInputSubmit={handleSearchInputSubmit}
          />
        )}
      <LogFormModal />
      <Route
        exact
        path="/"
        render={() => (
          storeSearchInputResult.length > 0 ? (
            <Redirect to="/search" />
          ) : (
            <LandingPage />
          )
        )}
      />

      <Route exact path="/search" component={Homepage} />

      <Footer />
    </div>
  </MuiThemeProvider>
);


App.propTypes = {
  handleOpen: PropTypes.func,
  handleSearchInput: PropTypes.func,
  handleSearchInputSubmit: PropTypes.func,
  storeSearchInputResult: PropTypes.array,
};

App.defaultProps = {
  handleOpen: () => { },
  handleSearchInput: () => { },
  handleSearchInputSubmit: () => { },
  storeSearchInputResult: [],
};

// == Export
export default App;
