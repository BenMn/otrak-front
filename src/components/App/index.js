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
import Dashboard from 'src/containers/Dashboard';
import Show from 'src/containers/Show';
import Team from 'src/components/StaticPages/Team';
import Legal from 'src/components/StaticPages/Legal';
import Contact from 'src/components/StaticPages/Contact';
import './App.scss';

// == Composant
const App = ({
  handleOpen,
  handleSearchInput,
  handleSearchInputSubmit,
  storeSearchInputResult,
  handleLogOut,
}) => (
  <MuiThemeProvider theme={theme}>
    <div id="app">
      {window.location.pathname !== '/'
        && (
          <Navbar
            handleOpen={handleOpen}
            handleSearchInput={handleSearchInput}
            handleSearchInputSubmit={handleSearchInputSubmit}
            handleLogOut={handleLogOut}
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

      <Route exact path="/show/:name" component={Show} />

      <Route exact path="/search" component={Homepage} />

      <Route exact path="/dashboard" component={Dashboard} />

      {/* Static Pages */}
      <Route exact path="/team" component={Team} />
      <Route exact path="/legal" component={Legal} />
      <Route exact path="/contact" component={Contact} />


      <Footer />
    </div>
  </MuiThemeProvider>
);


App.propTypes = {
  handleOpen: PropTypes.func,
  handleSearchInput: PropTypes.func,
  handleSearchInputSubmit: PropTypes.func,
  storeSearchInputResult: PropTypes.array,
  handleLogOut: PropTypes.func,
};

App.defaultProps = {
  handleOpen: () => { },
  handleSearchInput: () => { },
  handleSearchInputSubmit: () => { },
  handleLogOut: () => { },
  storeSearchInputResult: [],
};

// == Export
export default App;
