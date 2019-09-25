/* eslint-disable radix */
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

// CSS Local Styling
import 'src/components/LogForms/LogForms.scss';
import './show.scss';

class EditShow extends React.Component {
  // On load, get the details of the selected show
  // and a list of all current user's followings
  componentDidMount() {
    const {
      getDetailShow,
      showId,
      getUserFollowings,
      userInfos,
    } = this.props;
    getDetailShow(showId);
    getUserFollowings(userInfos.id);
  }

  // alerto = () => {
  //   const { showDetail, updatedUserSingleFollowing } = this.props;
  //   if (updatedUserSingleFollowing.season !== undefined) {
  //     updatedUserSingleFollowing.episode = showDetail.seasons[
  // parseInt(updatedUserSingleFollowing.season)
  // ].episodes;
  //   }
  //   updatedUserSingleFollowing.episode = showDetail.seasons[0].episodes;
  // }

  render() {
    const {
      // Show infos
      showDetail,
      // User followings
      userFollowings,
      getUserSingleFollowing,
      updatedUserSingleFollowing,
      userSingleFollowing,
      // edit show handlers
      handleChangeEditShow,
      handleSubmitEditShow,
      userInfos,
    } = this.props;

    // To get the right show information displayed on the edition modal
    // we need to compare if the current show name is in the user's following shows
    const currentFollow = userFollowings.filter((show) => show.tvShow.name === showDetail.name);
    // Then, we need to extract his id
    // who'll be used in the 'getUserSingleFollowing' function below
    const currentFollowId = Object.keys(currentFollow).map((key) => currentFollow[key].id);

    // Local array needed for status dropdown (Select)
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

    // If the object userSingleFollowing is empty, then launch getUserSingleFollowing method
    // with the select followed show id in params
    if (Object.keys(userSingleFollowing).length < 1) {
      getUserSingleFollowing(currentFollowId[0]);
    }

    if (Object.keys(userSingleFollowing).length > 1) {
      const startDateFormatted = currentFollow[0].startDate.slice(0, 10);

      const endFollowDate = new Date(currentFollow[0].startDate);
      const endFollowDateBeforeStart = new Date();
      endFollowDateBeforeStart.setDate(endFollowDate.getDate() - 1);

      const endFollowDateBeforeStartFormatted = (endFollowDateBeforeStart
        .toISOString())
        .slice(0, 10);

      return (
        <LogFormModalEditPaper>

          {console.log(showDetail)}
          {console.log(userSingleFollowing.id)}

          <Grid container>

            {/* Show Poster */}
            <Grid item>
              <img src={showDetail.poster} alt={showDetail.name} id="edit-modal-image" />
            </Grid>

            <Grid item style={{ padding: '3vh 4vw' }}>

              {/*
                Edit show form - inputs list :
                - Status
                - Rating
                - Start date
                - End date
                - Episode progress
                - Season progress
                - Total rewatches
                - Personal notes
              */}
              <form
                onSubmit={(event) => handleSubmitEditShow(
                  event,
                  userSingleFollowing.id,
                  userInfos.id,
                  showDetail.id,
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
                          defaultValue={status[showDetail.status].label}
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
                          defaultValue={showDetail.rating === null ? 'Not rated yet' : showDetail.rating}
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
                          defaultValue={endFollowDateBeforeStartFormatted}
                          onChange={(event) => handleChangeEditShow(event)}
                        />
                      </Grid>

                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container spacing={2} justify="space-around">

                      {/* Season Progress */}
                      <Grid item>
                        <EditShowField
                          select
                          name="season"
                          fullWidth
                          variant="outlined"
                          id="season"
                          label="Season progress"
                          type="number"
                          defaultValue={showDetail.seasons.length}
                          value={updatedUserSingleFollowing.season}
                          margin="normal"
                          onChange={(event) => handleChangeEditShow(event)}
                          InputProps={{
                            inputProps: { min: 1, max: showDetail.seasons.length },
                          }}
                        >
                          {showDetail.seasons.map((season, index) => (
                            <MenuItem key={season['@id']} value={showDetail.seasons[index].number}>
                              {showDetail.seasons[index].number}
                            </MenuItem>
                          ))}
                        </EditShowField>
                      </Grid>

                      {/* Episode progress */}
                      <Grid item>
                        <EditShowField
                          select
                          name="episode"
                          fullWidth
                          variant="outlined"
                          id="episodeProgress"
                          label="Episode progress"
                          type="number"
                          // defaultValue={this.alerto}
                          value={updatedUserSingleFollowing.episode}
                          margin="normal"
                          onChange={(event) => handleChangeEditShow(event)}
                          InputProps={{
                            inputProps: { min: 1, max: showDetail.seasons[0].length },
                          }}
                        >
                          {updatedUserSingleFollowing.season === undefined ? (
                            showDetail.seasons[0].episodes.map((episode) => (
                              <MenuItem key={episode['@id']} value={episode.number}>
                                {episode.number}
                              </MenuItem>
                            ))
                          ) : (
                            showDetail.seasons[
                              updatedUserSingleFollowing.season - 1
                            ].episodes.map((episode) => (
                              <MenuItem key={episode['@id']} value={episode.number}>
                                {episode.number}
                              </MenuItem>
                            ))
                          )}
                        </EditShowField>
                      </Grid>

                      {/* Total rewatches */}
                      {/* <Grid item>
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
                      </Grid> */}

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
  // Show infos
  showId: PropTypes.number.isRequired,
  getDetailShow: PropTypes.func.isRequired,
  showDetail: PropTypes.object,
  // User infos
  userInfos: PropTypes.object,
  // User followings
  getUserFollowings: PropTypes.func.isRequired,
  userFollowings: PropTypes.array,
  getUserSingleFollowing: PropTypes.func.isRequired,
  userSingleFollowing: PropTypes.object,
  // edit show handlers
  handleChangeEditShow: PropTypes.func.isRequired,
  updatedUserSingleFollowing: PropTypes.object,
  handleSubmitEditShow: PropTypes.func.isRequired,
};

EditShow.defaultProps = {
  // User infos
  userInfos: {},
  // Show infos
  showDetail: {},
  // User followings
  userFollowings: [],
  userSingleFollowing: {},
  updatedUserSingleFollowing: {},
};

export default EditShow;
