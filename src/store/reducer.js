// == Initial State
const initialState = {
  message: 'Hello',
  setOpen: false,
  open: false,
  view: '',
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    case OPEN_MODAL:
      return {
        ...state,
        setOpen: true,
        open: true,
        view: action.view,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        setOpen: false,
        open: false,
        view: action.view,
      };

    default:
      return state;
  }
};

// == Action Creators
export const doSomething = (message) => ({
  type: DO_SOMETHING,
  message,
});

export const openModal = (view) => ({
  type: OPEN_MODAL,
  setOpen: true,
  open: true,
  view,
});

export const closeModal = (view) => ({
  type: CLOSE_MODAL,
  setOpen: false,
  open: false,
  view,
});

// == Selectors


// == Export
export default reducer;
