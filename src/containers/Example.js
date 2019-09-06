/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Example from 'src/components/Example';

// Action Creators
import { doSomething } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  doSomething: () => {
    dispatch(doSomething('Coucou'));
  },
});

// Container
const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);

// == Export
export default ExampleContainer;
