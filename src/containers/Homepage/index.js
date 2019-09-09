/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Homepage from 'src/components/Homepage';

// Action Creators
import { doSomething } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  message: state.message,
  drawerOpen: state.drawerOpen,
});

const mapDispatchToProps = (dispatch) => ({
  doSomething: () => {
    dispatch(doSomething('Coucou'));
  },
});

// Container
const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

// == Export
export default HomepageContainer;
