/* eslint-disable no-nested-ternary */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Material UI style provider
import { MuiThemeProvider } from '@material-ui/core';
import { Route, Redirect } from 'react-router-dom';

// == Import : local

// Custom theme
import theme from 'src/styles/materialUi/materialUiTheme/theme';

// Navigation
import Navbar from 'src/containers/Navbar';
import Footer from 'src/containers/Footer';

// Modals & Alerts
import LogFormsModal from 'src/containers/LogForms';
// import Snackbar from 'src/components/Snackbar';

// Main Dynamic Pages
import LandingPage from 'src/containers/LandingPage';
import Homepage from 'src/containers/Homepage';
import Dashboard from 'src/containers/Dashboard';
import Show from 'src/containers/Show';

// Static Pages
import Contact from 'src/containers/Contact';
import Legal from 'src/containers/Legal';
import Team from 'src/containers/Team';

// CSS Styling
import './App.scss';

// == Composant
const App = ({
  // Modal
  handleOpen,
  open,
  // snackOn,
  // Search
  handleSearchInput,
  handleSearchInputSubmit,
  storeSearchInputResult,
  // Authentification
  handleLogOut,
  isLogged,
}) => (
  <MuiThemeProvider theme={theme}>
    <div id="app">


      {/* Snackbar alert
      {snackOn === true && <Snackbar />} */}

      {/* User connected :
        >> no more access to Landing Page
        >>  automatic redirect to dashboard */}
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
        window.location.pathname === ('/' || '/dashboard') ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to={window.location.pathname} />
        )
      )}

      {/* 'open' authorize all Modals to show */}
      {open === true && <LogFormsModal />}

      {/*
        We use the following condition to give the user the possibility
        to search from anywhere with the Navbar's SearchBar.
        If there's a result, he'll be automaticly redirected to the HomePage
        render={() => (
              storeSearchInputResult.length > 0 ? (
          <Redirect to="/search" />
        )
      */}

      {/* Single show route */}
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

      {/* Dashboard route */}
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

      {/* Search (HomePage) route */}
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
  // Modal
  handleOpen: PropTypes.func,
  open: PropTypes.bool,
  // snackOn: PropTypes.bool,
  // Search
  handleSearchInput: PropTypes.func,
  handleSearchInputSubmit: PropTypes.func,
  storeSearchInputResult: PropTypes.array,
  // Authentification
  handleLogOut: PropTypes.func,
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  // Modal
  handleOpen: () => { },
  open: false,
  // snackOn: false,
  // Search
  handleSearchInput: () => { },
  handleSearchInputSubmit: () => { },
  storeSearchInputResult: [],
  // Authentification
  handleLogOut: () => { },
  isLogged: false,
};

// == Export
export default App;
