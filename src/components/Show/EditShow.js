/* eslint-disable no-lone-blocks */
// import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Loader from 'src/components/Loader';

// Material UI Components
import {
  Grid,
  MenuItem,
} from '@material-ui/core';

// Material UI custom Components
import {
  LogFormModalEditPaper,
  EditShowField,
  EditShowLargeField,
  EditShowButtons,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

import 'src/components/LogForms/LogForms.scss';
import './show.scss';

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
      handleChangeEditShow,
      updatedUserSingleFollowing,
      handleSubmitEditShow,
    } = this.props;

    const currentFollow = userFollowings.filter((show) => show.tvShow.name === showDetail.name);
    const currentFollowId = Object.keys(currentFollow).map((key) => currentFollow[key].id);

    const status = [
      {
        value: 0,
        label: 'Watching',
      },
      {
        value: 1,
        label: 'Completed',
      },
      {
        value: 2,
        label: 'See next',
      },
      {
        value: 3,
        label: 'Upcoming',
      },
      {
        value: 4,
        label: 'Stopped',
      },
    ];

    if (Object.keys(userSingleFollowing).length < 1) {
      getUserSingleFollowing(currentFollowId[0], userAuthToken);
    }

    if (Object.keys(userSingleFollowing).length > 1) {
      const startDateFormatted = currentFollow[0].startDate.slice(0, 10);
      return (
        <LogFormModalEditPaper>

          <Grid container>

            <Grid item>
              <img src={currentFollow[0].tvShow.poster} alt={currentFollow[0].tvShow.name} id="edit-modal-image" />
            </Grid>

            <Grid item style={{ padding: '3vh 4vw' }}>

              <form
                onSubmit={(event) => handleSubmitEditShow(
                  event,
                  currentFollowId[0],
                  userAuthToken,
                )}
              >

                <Grid
                  container
                  direction="column"
                  spacing={2}
                  style={{ height: '100%' }}
                  justify="space-evenly"
                  alignItems="center"
                >

                  <Grid item>
                    <Grid
                      container
                      spacing={2}
                      style={{ height: '100%' }}
                      justify="space-evenly"
                      alignItems="center"
                    >

                      {/* Status */}
                      <Grid item>
                        <EditShowField
                          name="status"
                          id="status"
                          fullWidth
                          select
                          label="Status"
                          margin="normal"
                          variant="outlined"
                          value={updatedUserSingleFollowing.status}
                          onChange={(event) => handleChangeEditShow(event)}
                        >
                          {status.map((option) => (
                            <MenuItem key={option.value} value={option.label}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </EditShowField>
                      </Grid>

                      {/* Rating */}
                      <Grid item>
                        <EditShowField
                          name="rating"
                          fullWidth
                          variant="outlined"
                          id="rating"
                          label="Rating"
                          type="number"
                          margin="normal"
                          defaultValue="7"
                          value={updatedUserSingleFollowing.rating}
                          onChange={(event) => handleChangeEditShow(event)}
                          InputProps={{ inputProps: { min: 0, max: 10 } }}
                        />
                      </Grid>

                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container spacing={2} justify="space-around">

                      {/* Start date */}
                      <Grid item>
                        <EditShowField
                          name="startDate"
                          fullWidth
                          id="startDate"
                          label="Start date"
                          type="date"
                          defaultValue={startDateFormatted}
                          onChange={(event) => handleChangeEditShow(event)}
                        />
                      </Grid>

                      {/* End date */}
                      <Grid item>
                        <EditShowField
                          name="endDate"
                          fullWidth
                          id="endDate"
                          label="End date"
                          type="date"
                          defaultValue={updatedUserSingleFollowing.endDate}
                          onChange={(event) => handleChangeEditShow(event)}
                        />
                      </Grid>

                    </Grid>
                  </Grid>

                  {/* Episode progress */}
                  <Grid item>
                    <Grid container spacing={2} justify="space-around">

                      <Grid item>
                        <EditShowField
                          name="episode"
                          fullWidth
                          variant="outlined"
                          id="episodeProgress"
                          label="Episode progress"
                          type="number"
                          defaultValue={(currentFollow[0].episode || currentFollow[0].season) ? currentFollow[0].episode.number : '1'}
                          value={updatedUserSingleFollowing.episode}
                          margin="normal"
                          onChange={(event) => handleChangeEditShow(event)}
                          InputProps={{
                            inputProps: { min: 1, max: currentFollow[0].tvShow.nbEpisodes },
                          }}
                        />
                      </Grid>

                      {/* Total rewatches */}
                      <Grid item>
                        <EditShowField
                          name="rewatches"
                          fullWidth
                          variant="outlined"
                          id="rewatches"
                          label="Total rewatches"
                          type="number"
                          defaultValue="0"
                          value={updatedUserSingleFollowing.rewatches}
                          margin="normal"
                          onChange={(event) => handleChangeEditShow(event)}
                        />
                      </Grid>

                    </Grid>
                  </Grid>

                  {/* Personal notes */}
                  <Grid item>
                    <EditShowLargeField
                      name="notes"
                      fullWidth
                      id="personalNotes"
                      label="Notes"
                      placeholder="Add your comment"
                      margin="normal"
                      value={updatedUserSingleFollowing.notes}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(event) => handleChangeEditShow(event)}
                    />
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      spacing={2}
                      justify="space-around"
                    >

                      {/* Button : remove show */}
                      <Grid item>
                        <EditShowButtons fullWidth variant="contained" color="secondary">REMOVE THIS SHOW</EditShowButtons>
                      </Grid>

                      {/* Button : save changes */}
                      <Grid item>
                        <EditShowButtons fullWidth variant="contained" color="primary" type="submit">SAVE CHANGES</EditShowButtons>
                      </Grid>

                    </Grid>
                  </Grid>

                </Grid>
              </form>
            </Grid>
          </Grid>

        </LogFormModalEditPaper>
      );
    }
    return (
      <Loader />
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
  handleChangeEditShow: PropTypes.func.isRequired,
  handleSubmitEditShow: PropTypes.func.isRequired,
  updatedUserSingleFollowing: PropTypes.object,
};

EditShow.defaultProps = {
  userInfos: {},
  showDetail: {},
  userSingleFollowing: {},
  userFollowings: [],
  userAuthToken: '',
  updatedUserSingleFollowing: {},
};

export default EditShow;