/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Show from 'src/components/Show';

// Action Creators

const mapStateToProps = (state) => ({
  showDetail: state.showDetail,
});

const mapDispatchToProps = () => ({
  addToWatchList: () => {
    console.log('addToWatchList');
  },
});

// Container
const ShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Show);

// == Export
export default ShowContainer;
