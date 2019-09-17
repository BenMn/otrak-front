// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Team from 'src/components/Team';

// Action Creators
import {
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  storeSearchInputResult: state.userAvstoreSearchInputResulttar,
});

const mapDispatchToProps = () => ({});

// Container
const TeamContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Team);

// == Export
export default TeamContainer;
