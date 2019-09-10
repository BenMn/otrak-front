// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LandingPage from 'src/components/LandingPage';

// Action Creators
import {
  updateInput,
  fetchTrending,
  fetchInputResult,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  trendingList: state.trendingList,
  inputValue: state.inputValue,
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
});

// Container
const LandingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);

// == Export
export default LandingPageContainer;
