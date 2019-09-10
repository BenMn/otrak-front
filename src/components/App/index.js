// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import Navbar from 'src/containers/Navbar';
import Footer from 'src/containers/Footer';
import LandingPage from 'src/containers/LandingPage';
import SignIn from 'src/components/LogForms/SignIn';
import SignUp from 'src/components/LogForms/SignUp';
import ForgotPassword from 'src/components/LogForms/ForgotPassword';

// == Composant
const App = ({
  handleInput,
  handleInputSubmit,
  view,
  changeView,
}) => (
  <MuiThemeProvider theme={theme}>
    <div id="app">

      {window.location.pathname !== '/' && <Navbar handleInput={handleInput} handleInputSubmit={handleInputSubmit} />}

      <Switch>

        <Route path="/login" exact component={SignIn} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/forgot-password" exact component={ForgotPassword} />

        <Route path="/" exact component={LandingPage} changeView={changeView} />

      </Switch>

      <Footer />

    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  handleInput: PropTypes.func,
  handleInputSubmit: PropTypes.func,
  changeView: PropTypes.func,
  view: PropTypes.string.isRequired,
};

App.defaultProps = {
  handleInput: () => { },
  handleInputSubmit: () => { },
  changeView: () => { },
};

// == Export
export default App;
