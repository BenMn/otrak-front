// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Import Action Creators
import { } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  view: state.view,
  storeSearchInputResult: state.storeSearchInputResult,
  userAuthToken: state.userAuthToken,
  isLogged: state.isLogged,
  open: state.open,
});

const mapDispatchToProps = () => ({});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
