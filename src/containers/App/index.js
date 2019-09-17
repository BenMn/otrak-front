// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  view: state.view,
  storeSearchInputResult: state.storeSearchInputResult,
  userAuthToken: state.userAuthToken,
  isLogged: state.isLogged,
});

const mapDispatchToProps = () => ({});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
