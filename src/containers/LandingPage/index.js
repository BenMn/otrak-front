// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LandingPage from 'src/components/LandingPage';

// Action Creators
import {
  updateInput,
  fetchTrending,
  fetchInputResult,
  openModal,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  message: state.message,
  trendingList: state.trendingList,
  inputValue: state.inputValue,
  open: state.open,
  formName: state.formName,
});

const mapDispatchToProps = (dispatch) => ({
  getTrending: () => {
    dispatch(fetchTrending());
  },

  handleInput: (newValue) => {
    dispatch(updateInput(newValue));
  },

  handleInputSubmit: (event, inputValue) => {
    event.preventDefault();
    dispatch(fetchInputResult(inputValue));
  },

  handleOpen: (event) => {
    event.preventDefault();

    const viewModalName = event.target.innerHTML;
    let formName = '';
    // Forgot Password Link
    if (viewModalName.match(/password/g)) {
      formName = viewModalName.match(/password/g).toString();
    }
    else if (viewModalName.match(/up/g)) {
      formName = viewModalName.match(/up/g).toString();
    }
    else if (viewModalName.match(/in/g)) {
      formName = viewModalName.match(/in/g).toString();
    }
    dispatch(openModal(formName));
  },
});

// Container
const LandingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);

// == Export
export default LandingPageContainer;
