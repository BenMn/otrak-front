// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Navbar from 'src/components/Navbar';

// Action Creators
import { openModal, updateSearchInput, fetchSearchInputResult } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
  searchInputValue: state.searchInputValue,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  handleSearchInput: (newValue) => {
    dispatch(updateSearchInput(newValue));
  },

  handleSearchInputSubmit: (event, searchInputValue) => {
    event.preventDefault();
    dispatch(fetchSearchInputResult(searchInputValue));
  },

  handleOpen: (modalName) => {
    dispatch(openModal(modalName));
  },
});

// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// == Export
export default NavbarContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
*/
