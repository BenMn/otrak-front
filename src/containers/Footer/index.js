// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from 'src/components/Footer';

// Action Creators
import { openModal } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  viewModal: state.viewModal,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpen: (viewModalName) => {
    const formName = viewModalName.match(/up/g).toString();
    dispatch(openModal(viewModalName, formName));
  },
});

// Container
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

// == Export
export default FooterContainer;
