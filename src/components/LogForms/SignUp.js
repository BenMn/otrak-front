import React from 'react';
import PropTypes from 'prop-types';

import {
  LogFormModalPaper,
  LogFormModalButton,
  LogFormModalSubtitle,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

import {
  TextField,
  Link,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';

import './LogForms.scss';

const SignUp = ({ handleOpen }) => (
  <LogFormModalPaper id="SignUp">
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
            Sign up
          </Typography>
        </Grid>
        <Grid item>
          <LogFormModalSubtitle component="h2" variant="subtitle1" color="secondary">
            Don't be affraid, it's free !
          </LogFormModalSubtitle>
        </Grid>

        <form noValidate>

          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
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
              Create your account
            </LogFormModalButton>
          </Grid>

          <Grid container direction="row" spacing={3}>
            <Grid item xs>
              <Link onClick={(event) => handleOpen(event)} variant="body2" color="secondary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={(event) => handleOpen(event)} variant="body2" color="secondary">
                Already registred ? Sign in
              </Link>
            </Grid>
          </Grid>

        </form>

      </Grid>
    </Container>
  </LogFormModalPaper>
);

SignUp.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default SignUp;
