import React from 'react';
import PropTypes from 'prop-types';

import {
  LogFormModalPaper,
  LogFormModalButton,
  LogFormModalSubtitle,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

import {
  TextField,
  Grid,
  Link,
  Typography,
  Container,
} from '@material-ui/core';

import './LogForms.scss';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';

const SignIn = ({ showForm, formName }) => (
  <>
    {console.log(formName)}
    {formName === 'password' && <ForgotPassword />}
    {formName === 'up' && <SignUp />}
    {formName === 'in' && (
      <LogFormModalPaper id="SignIn">
        <Container component="main" maxWidth="xs">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <img src="src/styles/assets/images/logos/logo-owl.png" alt="O'Track Logo" id="LogFormModalLogo" />
            </Grid>
            <Grid item>
              <Typography component="h1" variant="h5" color="primary">
                Sign in
              </Typography>
            </Grid>
            <Grid item>
              <LogFormModalSubtitle component="h2" variant="subtitle1" color="secondary">
                Welcome back mate !
              </LogFormModalSubtitle>
            </Grid>

            <form noValidate>

              <Grid item>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item>
                <LogFormModalButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Sign in
                </LogFormModalButton>
              </Grid>

              <Grid container direction="row" spacing={3}>
                <Grid item xs>
                  <Link onClick={(event) => showForm(event)} variant="body2" color="secondary">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={(event) => showForm(event)} variant="body2" color="secondary">
                    Don't have an account? Sign up
                  </Link>
                </Grid>
              </Grid>

            </form>

          </Grid>

        </Container>
      </LogFormModalPaper>
    )}
  </>
);

SignIn.propTypes = {
  showForm: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
};

export default SignIn;
