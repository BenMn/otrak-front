// == Initial State
const initialState = {
  // Views & Modals
  view: '',
  viewModal: '',
  open: false,
  setOpen: false,
  modalName: '',
};

// ==  Action Types
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';


// == Reducer
const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        setOpen: true,
        open: true,
        modalName: action.modalName,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        setOpen: false,
        open: false,
      };

    default:
      return state;
  }
};

// == Action Creators
export const openModal = (modalName) => ({
  type: OPEN_MODAL,
  setOpen: true,
  open: true,
  modalName,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  setOpen: false,
  open: false,
});


// == Export
export default appReducer;
