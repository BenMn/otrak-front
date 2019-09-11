// == Initial State
const initialState = {
  trendingList: {},
  view: 'landing',
  viewModal: '',
  searchInputValue: '',
  storeSearchInputResult: {},
  storeAuthInputResult: {},
  setOpen: false,
  open: false,
  formName: '',
  userAuthInfos: {
    username: {
      index: 0,
      username: '',
      name: 'username',
      id: 'username',
      label: 'Username',
      autoComplete: 'username',
    },
    email: {
      index: 1,
      email: '',
      name: 'email',
      id: 'email',
      label: 'Email',
      autoComplete: 'email',
    },
    password: {
      index: 2,
      password: '',
      name: 'password',
      id: 'password',
      label: 'Password',
      autoComplete: 'password',
      type: 'password',
    },
    passwordConfirm: {
      index: 3,
      passwordConfirm: '',
      name: 'passwordConfirm',
      id: 'passwordConfirm',
      label: 'Password Confirmation',
      autoComplete: 'passwordConfirm',
      type: 'password',
    },
  },
};

// == Types
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
export const FETCH_SEARCH_INPUT_RESULT = 'FETCH_SEARCH_INPUT_RESULT';
export const STORE_SEARCH_INPUT_RESULT = 'STORE_SEARCH_INPUT_RESULT';

const UPDATE_AUTH_INPUT = 'UPDATE_AUTH_INPUT';
export const STORE_AUTH_INPUT_RESULT = 'STORE_AUTH_INPUT_RESULT';

const STORE_TRENDING = 'STORE_TRENDING';
export const FETCH_TRENDING = 'FETCH_TRENDING';

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_TRENDING:
      return {
        ...state,
        trendingList: action.data,
      };

    case UPDATE_SEARCH_INPUT:
      return {
        ...state,
        searchInputValue: action.searchInputValue,
      };

    case STORE_SEARCH_INPUT_RESULT:
      return {
        ...state,
        storeSearchInputResult: action.storeSearchInputResult,
      };

    case UPDATE_AUTH_INPUT:
      return {
        ...state,
        userAuthInfos: {
          ...state.userAuthInfos,
          [action.name]: {
            ...state.userAuthInfos[`${action.name}`],
            [action.name]: action.value,
          },
        },
      };

    case STORE_AUTH_INPUT_RESULT:
      return {
        ...state,
        storeAuthInputResult: action.storeAuthInputResult,
      };

    case OPEN_MODAL:
      return {
        ...state,
        setOpen: true,
        open: true,
        viewModal: action.viewModal,
        formName: action.formName,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        setOpen: false,
        open: false,
        viewModal: action.viewModal,
        formName: action.formName,
      };

    default:
      return state;
  }
};

// == Action Creators
export const updateSearchInput = (searchInputValue) => ({
  type: UPDATE_SEARCH_INPUT,
  searchInputValue,
});

export const updateAuthInput = (value, name, index) => ({
  type: UPDATE_AUTH_INPUT,
  value,
  name,
  index,
});

export const fetchTrending = () => ({
  type: FETCH_TRENDING,
});

export const storeTrending = (data) => ({
  type: STORE_TRENDING,
  data,
});

export const fetchSearchInputResult = (searchInputValue) => ({
  type: FETCH_SEARCH_INPUT_RESULT,
  searchInputValue,
});

export const storeSearchInputResult = (data) => ({
  type: STORE_SEARCH_INPUT_RESULT,
  data,
});

export const openModal = (viewModal, formName) => ({
  type: OPEN_MODAL,
  setOpen: true,
  open: true,
  viewModal,
  formName,
});

export const closeModal = (viewModal, formName) => ({
  type: CLOSE_MODAL,
  setOpen: false,
  open: false,
  viewModal,
  formName,
});


// == Selectors


// == Export
export default reducer;
