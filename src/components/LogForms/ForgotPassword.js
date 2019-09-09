import React from 'react';
import PropTypes from 'prop-types';

import {
  LogFormModalButton,
  LogFormModalSubtitle,
  LogFormModalPaper,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

import {
  TextField,
  Grid,
  Typography,
  Container,
  Link,
} from '@material-ui/core';

import './LogForms.scss';


const ForgotPassword = ({ handleOpen }) => (
  <LogFormModalPaper id="Password">
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
            Reset your password
          </Typography>
        </Grid>
        <Grid item>
          <LogFormModalSubtitle component="h2" variant="subtitle1" color="secondary">
            Find your account by email address
          </LogFormModalSubtitle>
        </Grid>

        <form noValidate>

          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email-forgotPassword"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item>
            <LogFormModalButton
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
            >
              Reset password
            </LogFormModalButton>
          </Grid>


          <Grid container direction="row" spacing={3}>
            <Grid item xs>
              <Link onClick={(event) => handleOpen(event)} variant="body2" color="secondary">
                Already registred ? Sign in
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={(event) => handleOpen(event)} variant="body2" color="secondary">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>

        </form>

      </Grid>

    </Container>
  </LogFormModalPaper>
);

ForgotPassword.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default ForgotPassword;
