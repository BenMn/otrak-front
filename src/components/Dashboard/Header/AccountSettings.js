import React from 'react';

import {
  LogFormModalPaper,
  LogFormModalButton,
  LogFormModalSubtitle,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

import {
  Grid,
  Typography,
  Container,
  TextField,
} from '@material-ui/core';

import 'src/components/LogForms/LogForms.scss';

const AccountSettings = () => (
  <LogFormModalPaper id="AccountSettings">
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
            Account Settings
          </Typography>
        </Grid>
        <Grid item>
          <LogFormModalSubtitle component="h2" variant="subtitle1" color="secondary">
            Change your password
          </LogFormModalSubtitle>
        </Grid>

        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="filled"
        />

        <LogFormModalButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Change your password
        </LogFormModalButton>
      </Grid>
    </Container>
  </LogFormModalPaper>
);

export default AccountSettings;
