// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from 'src/components/Footer';

// Action Creators

const mapStateToProps = null;

const mapDispatchToProps = () => ({});

// Container
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

// == Export
export default FooterContainer;
