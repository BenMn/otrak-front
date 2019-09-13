// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

//  Material UI Components
import {
  Grid,
  Typography,
  Container,
  Link,
} from '@material-ui/core';

//  Material UI custom Components
import {
  LogFormModalButton,
  LogFormModalSubtitle,
  LogFormModalPaper,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

import Field from 'src/components/LogForms/Field';

import './LogForms.scss';

const ForgotPassword = ({
  handleOpen,
  handleAuthInput,
  handleAuthInputSubmit,
  // eslint-disable-next-line react/prop-types
  userAuthInfos,
}) => {
  // Filter for second object of userAuthInfos = Email field
  const allowed = [1];

  // Returns the email filed only
  const userAuthInfosFiltred = Object.keys(userAuthInfos)
    // eslint-disable-next-line react/prop-types
    .filter((fieldName) => allowed.includes(userAuthInfos[fieldName].index))
    .reduce((newObject, key) => {
      newObject[key] = userAuthInfos[key];
      return newObject;
    }, {});

  return (
    <LogFormModalPaper id="Password">
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
              Reset your password
            </Typography>
          </Grid>
          {/* Subtitle */}
          <Grid item>
            <LogFormModalSubtitle component="h2" variant="subtitle1" color="secondary">
              Find your account by email address
            </LogFormModalSubtitle>
          </Grid>

          {/* Forgot password Submit form */}
          <form onSubmit={(event) => handleAuthInputSubmit(event)} id="form-forgotPassword">

            <Grid item>
              {Object.values(userAuthInfosFiltred).map((field) => (
                <Field
                  key={field.name}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...field}
                  handleAuthInput={handleAuthInput}
                  value={field[field.name]}
                  id={`${field.name}-forgot-password`}
                />
              ))}
            </Grid>
            <Grid item>
              {/* Button */}
              <LogFormModalButton
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Reset password
              </LogFormModalButton>
            </Grid>

            {/* Other modal links */}
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
};

ForgotPassword.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
};

export default ForgotPassword;
