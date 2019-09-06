// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from 'src/components/Footer';

// Action Creators
import { doSomething, openModal } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  view: state.view,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpen: (view) => {
    dispatch(openModal(view));
  },
  doSomething: () => {
    dispatch(doSomething('Coucou'));
  },
});

// Container
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

// == Export
export default FooterContainer;
