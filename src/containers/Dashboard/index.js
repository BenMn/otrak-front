// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Dashboard from 'src/components/Dashboard';

// Action Creators
import {
  avatarUploadHandler,
} from 'src/store/reducer';

const mapStateToProps = (state) => {
  console.log(state.userAvatar);
  return ({
    userAvatar: state.userAvatar,
  });
};

const mapDispatchToProps = (dispatch) => ({
  avatarUploadHandler: (event) => {
    event.persist();
    const newAvatar = event.target.files[0];
    dispatch(avatarUploadHandler(newAvatar));
  },
});

// Container
const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

// == Export
export default DashboardContainer;
