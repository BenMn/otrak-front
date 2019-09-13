// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LandingPage from 'src/components/LandingPage';

// Action Creators
import {
  fetchTrending,
  updateSearchInput,
  fetchSearchInputResult,
  openModal,
} from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  message: state.message,
  trendingList: state.trendingList,
  searchInputValue: state.searchInputValue,
  setOpen: state.setOpen,
  open: state.open,
  viewModal: state.viewModal,
  modalName: state.modalName,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  getTrending: () => {
    dispatch(fetchTrending());
  },

  handleSearchInput: (newValue) => {
    dispatch(updateSearchInput(newValue));
  },

  handleSearchInputSubmit: (event, searchInputValue) => {
    event.preventDefault();
    dispatch(fetchSearchInputResult(searchInputValue));
  },

  handleOpen: (event) => {
    event.persist();

    const viewModalName = event.target.innerHTML;

    // Forgot Password Link
    if (viewModalName.match(/password/g)) {
      const modalName = viewModalName.match(/password/g).toString();
      dispatch(openModal(viewModalName, modalName));
    }

    // Sign Up Link
    if (viewModalName.match(/up/g)) {
      const modalName = viewModalName.match(/up/g).toString();
      dispatch(openModal(viewModalName, modalName));
    }

    // Sign In Link
    if (viewModalName.match(/in/g)) {
      const modalName = viewModalName.match(/in/g).toString();
      dispatch(openModal(viewModalName, modalName));
    }
  },
});

// Container
const LandingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);

// == Export
export default LandingPageContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
