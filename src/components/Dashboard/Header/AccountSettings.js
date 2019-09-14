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
          label="Current Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          required
          fullWidth
          color="primary"
        />


        <TextField
          id="filled-password-input"
          label="New Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          required
          fullWidth
        />

        <TextField
          id="filled-password-input"
          label="Password Confirmation"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          required
          fullWidth
        />

        <LogFormModalButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Change your password
        </LogFormModalButton>

        <Typography component="p" color="primary">
          Too angry to stay ?
        </Typography>

        <LogFormModalButton
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
        >
          Delete your account
        </LogFormModalButton>


      </Grid>
    </Container>
  </LogFormModalPaper>
);

export default AccountSettings;
