// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from 'src/components/Footer';

// Action Creators
import { openModal } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpen: (viewModalName) => {
    const formName = viewModalName.match(/up/g).toString();
    dispatch(openModal(formName));
  },
});

// Container
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

// == Export
export default FooterContainer;
