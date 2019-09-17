// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from 'src/components/Footer';

// Action Creators
import { openModal, emptySearchResults } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },
  emptySearchResults: () => {
    dispatch(emptySearchResults());
  },
});

// Container
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

// == Export
export default FooterContainer;
