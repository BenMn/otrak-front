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
import LogFormsModal from 'src/containers/LogForms';
import Homepage from 'src/containers/Homepage';
import Dashboard from 'src/containers/Dashboard';
import Show from 'src/containers/Show';
import Contact from 'src/containers/Contact';
import Legal from 'src/containers/Legal';
import Team from 'src/containers/Team';

import './App.scss';

// == Composant
const App = ({
  handleOpen,
  handleSearchInput,
  handleSearchInputSubmit,
  storeSearchInputResult,
  handleLogOut,
  isLogged,
  open,
}) => (
  <MuiThemeProvider theme={theme}>
    <div id="app">

      {isLogged === false ? (
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
      ) : (
        <Redirect to="/dashboard" />
      )}

      {open === true && <LogFormsModal />}

      <Route
        exact
        path="/show/:name"
        render={() => (
          storeSearchInputResult.length > 0 ? (
            <Redirect to="/search" />
          ) : (
            <>
              <Navbar
                handleOpen={handleOpen}
                handleSearchInput={handleSearchInput}
                handleSearchInputSubmit={handleSearchInputSubmit}
                handleLogOut={handleLogOut}
              />
              <Show />
            </>
          )
        )}
      />

      <Route
        exact
        path="/dashboard"
        render={() => (
          storeSearchInputResult.length > 0 ? (
            <Redirect to="/search" />
          ) : (
            <>
              <Navbar
                handleOpen={handleOpen}
                handleSearchInput={handleSearchInput}
                handleSearchInputSubmit={handleSearchInputSubmit}
                handleLogOut={handleLogOut}
              />
              <Dashboard />
            </>
          )
        )}
      />

      <Route
        exact
        path="/search"
        render={() => (
          <>
            <Navbar
              handleOpen={handleOpen}
              handleSearchInput={handleSearchInput}
              handleSearchInputSubmit={handleSearchInputSubmit}
              handleLogOut={handleLogOut}
            />
            <Homepage />
          </>
        )}
      />

      {/* Static Pages */}
      <Route
        exact
        path="/team"
        render={() => (
          storeSearchInputResult.length > 0 ? (
            <Redirect to="/search" />
          ) : (
            <>
              <Navbar
                handleOpen={handleOpen}
                handleSearchInput={handleSearchInput}
                handleSearchInputSubmit={handleSearchInputSubmit}
                handleLogOut={handleLogOut}
              />
              <Team />
            </>
          )
        )}
      />


      <Route
        exact
        path="/legal"
        render={() => (
          storeSearchInputResult.length > 0 ? (
            <Redirect to="/search" />
          ) : (
            <>
              <Navbar
                handleOpen={handleOpen}
                handleSearchInput={handleSearchInput}
                handleSearchInputSubmit={handleSearchInputSubmit}
                handleLogOut={handleLogOut}
              />
              <Legal />
            </>
          )
        )}
      />


      <Route
        exact
        path="/contact"
        render={() => (
          storeSearchInputResult.length > 0 ? (
            <Redirect to="/search" />
          ) : (
            <>
              <Navbar
                handleOpen={handleOpen}
                handleSearchInput={handleSearchInput}
                handleSearchInputSubmit={handleSearchInputSubmit}
                handleLogOut={handleLogOut}
              />
              <Contact />
            </>
          )
        )}
      />

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
  isLogged: PropTypes.bool,
  open: PropTypes.bool,
};

App.defaultProps = {
  handleOpen: () => { },
  handleSearchInput: () => { },
  handleSearchInputSubmit: () => { },
  handleLogOut: () => { },
  storeSearchInputResult: [],
  isLogged: false,
  open: false,
};

// == Export
export default App;
