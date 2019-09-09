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

const SignUp = ({
  handleOpen,
  handleUserAuthInfos,
  handleAuthInput,
  username,
}) => (
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

        <form onSubmit={(event) => handleUserAuthInfos(event)}>
          {console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')}
          {console.log(username)}
          {console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')}
          <Grid item>
            <TextField
              onChange={(event) => {
                handleAuthInput(event.target.value);
              }}
              value={username}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username-signUp"
              label="Username"
              name="username-signUp"
              autoComplete="username"
              autoFocus
            />
            <TextField
              onChange={(event) => handleAuthInput(event.target.value)}
              value="yoyo"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email-signUp"
              label="Email Address"
              name="email-signUp"
              autoComplete="email"
            />
            <TextField
              onChange={(event) => handleAuthInput(event.target.value)}
              value="yoyo"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password-signUp"
              label="Password"
              type="password"
              id="password-signUp"
              autoComplete="current-password"
            />
            <TextField
              onChange={(event) => handleAuthInput(event.target.value)}
              value="yoyo"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm-password-signUp"
              label="Confirm Password"
              type="password"
              id="confirm-password-signUp"
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
        </form>
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
      </Grid>
    </Container>
  </LogFormModalPaper>
);

SignUp.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  handleUserAuthInfos: PropTypes.func.isRequired,
  handleAuthInput: PropTypes.func.isRequired,
  username: PropTypes.string,
};

SignUp.defaultProps = {
  username: '',
};

export default SignUp;
