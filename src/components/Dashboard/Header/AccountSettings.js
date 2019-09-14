import React from 'react';
import PropTypes from 'prop-types';

import {
  LogFormModalPaper,
  LogFormModalButton,
  LogFormModalSubtitle,
} from 'src/styles/materialUi/materialUiStyles/LogForms';


import {
  DashboardAccountTextField,
  DashboardSettignsIcon,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

import {
  Grid,
  Typography,
  Container,
} from '@material-ui/core';

import PasswordField from './PasswordField';

import 'src/components/LogForms/LogForms.scss';

const AccountSettings = ({
  handleAuthInput,
  handleAuthInputSubmit,
  // eslint-disable-next-line react/prop-types
  userAuthInfos,
}) => {
  const allowed = [2, 3];

  const userAuthInfosFiltred = Object.keys(userAuthInfos)
    // eslint-disable-next-line react/prop-types
    .filter((fieldName) => allowed.includes(userAuthInfos[fieldName].index))
    .reduce((newObject, key) => {
      newObject[key] = userAuthInfos[key];
      return newObject;
    }, {});
  return (
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

          <Grid item>
            <DashboardSettignsIcon />
          </Grid>

          <DashboardAccountTextField
            id="filled-password-input"
            label="Current Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            required
            fullWidth
          />

          <form onSubmit={(event) => handleAuthInputSubmit(event)} id="form-signUp">

            {Object.values(userAuthInfosFiltred).map((field) => (
              <PasswordField
                key={field.name}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...field}
                handleAuthInput={handleAuthInput}
                value={field[field.name]}
                id={`${field.name}-sign-up`}
              />
            ))}

            <LogFormModalButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Change your password
            </LogFormModalButton>

          </form>

          <Typography component="p" color="primary">
            Too angry to stay ? No prob.
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
};

AccountSettings.propTypes = {
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
};

export default AccountSettings;
