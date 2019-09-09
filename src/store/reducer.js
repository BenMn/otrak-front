// == Initial State
const initialState = {
  trendingList: {},
  view: 'landing',
  viewModal: '',
  inputValue: '',
  storeInputResult: {},
  setOpen: false,
  open: false,
};

// == Types
const UPDATE_INPUT = 'UPDATE_INPUT';
export const FETCH_INPUT_RESULT = 'FETCH_INPUT_RESULT';
export const STORE_INPUT_RESULT = 'STORE_INPUT_RESULT';

const STORE_TRENDING = 'STORE_TRENDING';
export const FETCH_TRENDING = 'FETCH_TRENDING';

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        inputValue: action.inputValue,
      };

    case STORE_TRENDING:
      return {
        ...state,
        trendingList: action.data,
      };

    case STORE_INPUT_RESULT:
      return {
        ...state,
        storeInputResult: action.storeInputResult,
      };

    case OPEN_MODAL:
      return {
        ...state,
        setOpen: true,
        open: true,
        viewModal: action.viewModal,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        setOpen: false,
        open: false,
        viewModal: action.viewModal,
      };

    default:
      return state;
  }
};

// == Action Creators
export const updateInput = (inputValue) => ({
  type: UPDATE_INPUT,
  inputValue,
});

export const fetchTrending = () => ({
  type: FETCH_TRENDING,
});

export const storeTrending = (data) => ({
  type: STORE_TRENDING,
  data,
});

export const fetchInputResult = (inputValue) => ({
  type: FETCH_INPUT_RESULT,
  inputValue,
});

export const storeInputResult = (data) => ({
  type: STORE_INPUT_RESULT,
  data,
});

export const openModal = (viewModal) => ({
  type: OPEN_MODAL,
  setOpen: true,
  open: true,
  viewModal,
});

export const closeModal = (viewModal) => ({
  type: CLOSE_MODAL,
  setOpen: false,
  open: false,
  viewModal,
});

// == Selectors


// == Export
export default reducer;
