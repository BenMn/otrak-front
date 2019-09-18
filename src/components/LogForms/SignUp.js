// *Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Local Import
import Loader from 'src/components/Loader';

// Import material UI custom components
import {
  Link,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';

// Import material UI custom components
import {
  LogFormModalPaper,
  LogFormModalButton,
  LogFormModalSubtitle,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

// import locaux
import Field from 'src/components/LogForms/Field';

import './LogForms.scss';

const SignUp = ({
  handleOpen,
  handleAuthInput,
  handleAuthInputSubmit,
  // eslint-disable-next-line react/prop-types
  userAuthInfos,
  loading,
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
        {/* Logo */}
        <Grid item>
          <img src="src/styles/assets/images/logos/logo-owl.png" alt="O'Track Logo" id="LogFormModalLogo" />
        </Grid>
        {/* Title */}
        <Grid item>
          <Typography component="h1" variant="h5" color="primary">
            Sign up
          </Typography>
        </Grid>
        {/* Subtitle */}
        <Grid item>
          <LogFormModalSubtitle component="h2" variant="subtitle1" color="secondary">
            Don't be affraid, it's free !
          </LogFormModalSubtitle>
        </Grid>

        {loading === false ? (
          <form onSubmit={(event) => handleAuthInputSubmit(event)} id="form-signUp">

            <Grid item>
              {Object.values(userAuthInfos).map((field) => (
                <Field
                  key={field.name}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...field}
                  handleAuthInput={handleAuthInput}
                  value={field[field.name]}
                  id={`${field.name}-sign-up`}
                />
              ))}
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
                <Link onClick={() => handleOpen('password')} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={() => handleOpen('in')} variant="body2">
                  Already registred ? Sign in
                </Link>
              </Grid>
            </Grid>

          </form>
        ) : (
          <Loader />
        )}
      </Grid>
    </Container>
  </LogFormModalPaper>
);

SignUp.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  handleAuthInput: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
};

export default SignUp;
