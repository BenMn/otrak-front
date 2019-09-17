/* eslint-disable import/no-unresolved */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Legal from 'src/components/Legal';

// Action Creators

const mapStateToProps = null;

const mapDispatchToProps = () => ({});

// Container
const LegalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Legal);

// == Export
export default LegalContainer;
