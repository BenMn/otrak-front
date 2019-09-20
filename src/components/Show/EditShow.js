/* eslint-disable no-lone-blocks */
// import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';

// Material UI custom Components
import {
  LogFormModalEditPaper,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

import 'src/components/LogForms/LogForms.scss';

class EditShow extends React.Component {
  componentDidMount() {
    const {
      getDetailShow,
      showId,
      getUserFollowings,
      userInfos,
      userAuthToken,
    } = this.props;
    getDetailShow(showId);
    getUserFollowings(userInfos.id, userAuthToken);
  }

  render() {
    const {
      showDetail,
      userFollowings,
      userSingleFollowing,
      userAuthToken,
      getUserSingleFollowing,
    } = this.props;

    const currentFollow = userFollowings.filter((show) => show.tvShow.name === showDetail.name);
    const currentFollowId = Object.keys(currentFollow).map((key) => currentFollow[key].id);

    if (Object.keys(userSingleFollowing).length < 1) {
      getUserSingleFollowing(currentFollowId[0], userAuthToken);
    }

    return (
      <LogFormModalEditPaper id="History">
        {Object.keys(currentFollow).map((key) => (

          <Grid container>

            <Grid item lg={4}>
              <img src={currentFollow[key].tvShow.poster} alt={currentFollow[key].tvShow.name} />
            </Grid>

            <Grid item lg={8}>
              <Grid
                container
                direction="column"
                spacing={2}
                justify="center"
              >

                <Grid item lg={2}>
                  <Grid container>

                    <Grid item lg={6}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="standard-uncontrolled"
                        label="Uncontrolled"
                        defaultValue="Status"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item lg={6}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                    </Grid>

                  </Grid>
                </Grid>

                <Grid item lg={2}>
                  <Grid container>

                    <Grid item lg={6}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="standard-with-placeholder"
                        label="With placeholder"
                        placeholder="Placeholder"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item lg={6}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="standard-with-placeholder"
                        label="With placeholder"
                        placeholder="Placeholder"
                        margin="normal"
                      />
                    </Grid>

                  </Grid>
                </Grid>

                <Grid item lg={2}>
                  <Grid container>

                    <Grid item lg={6}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                    </Grid>

                    <Grid item lg={6}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                    </Grid>

                  </Grid>
                </Grid>

                <Grid item lg={2}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="standard-bare"
                    defaultValue="Bare"
                    margin="normal"
                    inputProps={{ 'aria-label': 'bare' }}
                  />
                </Grid>

                <Grid item lg={2}>
                  <Grid container>

                    <Grid item lg={6}>
                      <Button fullWidth variant="contained" color="secondary">REMOVE THIS SHOW</Button>
                    </Grid>

                    <Grid item lg={6}>
                      <Button fullWidth variant="contained" color="primary">SAVE CHANGES</Button>
                    </Grid>

                  </Grid>
                </Grid>

              </Grid>
            </Grid>

          </Grid>


        ))}
      </LogFormModalEditPaper>
    );
  }
}

EditShow.propTypes = {
  showId: PropTypes.number.isRequired,
  getDetailShow: PropTypes.func.isRequired,
  userInfos: PropTypes.object,
  showDetail: PropTypes.object,
  userAuthToken: PropTypes.string,
  userFollowings: PropTypes.array,
  userSingleFollowing: PropTypes.object,
  getUserFollowings: PropTypes.func.isRequired,
  getUserSingleFollowing: PropTypes.func.isRequired,
};

EditShow.defaultProps = {
  userInfos: {},
  showDetail: {},
  userSingleFollowing: {},
  userFollowings: [],
  userAuthToken: '',
};

export default EditShow;

// <div>Id : {currentFollow[key].id}</div>
// <div>Type : {currentFollow[key]['@type']}</div>
// <div>Status : {currentFollow[key].status}</div>
// <div>StartDate : {currentFollow[key].startDate}</div>
// <div>Name : {currentFollow[key].tvShow.name}</div>
// <div>Genre : {currentFollow[key].tvShow.genre.map((genre) => genre.name)}</div>
// <div>Rating : {currentFollow[key].tvShow.rating}</div>
// <div>poster : {currentFollow[key].tvShow.poster}</div>
