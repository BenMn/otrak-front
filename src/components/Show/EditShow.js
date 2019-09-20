// import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {
} from '@material-ui/core';

// Material UI custom Components
import {
  LogFormModalPaper,
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
      userAuthToken,
      getUserSingleFollowing,
    } = this.props;

    const currentFollow = userFollowings.filter((show) => show.tvShow.name === showDetail.name);
    console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°');
    console.log(currentFollow[0]['id']);
    console.log(currentFollow[0].id);
    console.log('°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°');
    // console.log(currentFollow[0].id);
    // getUserSingleFollowing(currentFollow[0].id, userAuthToken);

    return (
      <LogFormModalPaper id="History">
        <div>EDIT SHOW</div>
      </LogFormModalPaper>
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
  getUserFollowings: PropTypes.func.isRequired,
  getUserSingleFollowing: PropTypes.func.isRequired,
};

EditShow.defaultProps = {
  userInfos: {},
  showDetail: {},
  userFollowings: [],
  userAuthToken: '',
};

export default EditShow;
