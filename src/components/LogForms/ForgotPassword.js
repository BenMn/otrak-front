import React from 'react';

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
} from '@material-ui/core';

import './LogForms.scss';


const ForgotPassword = () => (
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
              id="email"
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

        </form>

      </Grid>
    </Container>
  </LogFormModalPaper>
);

export default ForgotPassword;
