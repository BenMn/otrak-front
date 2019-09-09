// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from 'src/components/Footer';


const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  viewModal: state.viewModal,
});

const mapDispatchToProps = () => ({
});

// Container
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

// == Export
export default FooterContainer;
