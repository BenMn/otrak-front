// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import material UI components
import {
  Grid,
  Link,
  Typography,
  Container,
} from '@material-ui/core';

// Import Material UI custom Components
import {
  LogFormModalPaper,
  LogFormModalButton,
  LogFormModalSubtitle,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

import Field from 'src/components/LogForms/Field';

import './LogForms.scss';

const SignIn = ({
  handleOpen,
  handleAuthInput,
  handleAuthInputSubmit,
  // eslint-disable-next-line react/prop-types
  userAuthInfos,
}) => {
  // Filter for second and third object of userAuthInfos
  // => Email and password fields
  const allowed = [1, 2];

  const userAuthInfosFiltred = Object.keys(userAuthInfos)
    // eslint-disable-next-line react/prop-types
    .filter((fieldName) => allowed.includes(userAuthInfos[fieldName].index))
    .reduce((newObject, key) => {
      newObject[key] = userAuthInfos[key];
      return newObject;
    }, {});

  return (
    <LogFormModalPaper id="SignIn">
      <Container component="main" maxWidth="xs">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {/* Logo */}
          <Grid item>
            <img src="src/styles/assets/images/logos/logo-owl.png" alt="O'Track Logo" id="LogFormModalLogo" />
          </Grid>
          {/* Title */}
          <Grid item>
            <Typography component="h1" variant="h5" color="primary">
              Sign in
            </Typography>
          </Grid>
          {/* Subtitle */}
          <Grid item>
            <LogFormModalSubtitle component="h2" variant="subtitle1" color="secondary">
              Welcome back mate !
            </LogFormModalSubtitle>
          </Grid>
          {/* Log In Submit form */}
          <form onSubmit={(event) => handleAuthInputSubmit(event)} id="form-signIn">

            <Grid item>
              {Object.values(userAuthInfosFiltred).map((field) => (
                <Field
                  key={field.name}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...field}
                  handleAuthInput={handleAuthInput}
                  value={field[field.name]}
                  id={`${field.name}-sign-in`}
                />
              ))}
            </Grid>
            <Grid item>
              {/* Button */}
              <LogFormModalButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign in
              </LogFormModalButton>
            </Grid>
            {/* Other modal links */}
            <Grid container direction="row" spacing={3}>
              <Grid item xs>
                <Link onClick={(event) => handleOpen(event)} variant="body2" color="secondary">
                  Forgot password?
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
};

SignIn.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
};

export default SignIn;
