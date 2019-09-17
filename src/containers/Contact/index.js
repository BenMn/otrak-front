// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Contact from 'src/components/Contact';

// Action Creators
import {
  emptySearchResults,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  storeSearchInputResult: state.userAvstoreSearchInputResulttar,
});

const mapDispatchToProps = (dispatch) => ({
  emptySearchResults: () => {
    dispatch(emptySearchResults());
  },
});

// Container
const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

// == Export
export default ContactContainer;
