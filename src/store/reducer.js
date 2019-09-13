import dataApi from 'src/data/dataApi.json';

// == Initial State
const initialState = {
  trendingList: dataApi,
  searchInputValue: '',
  storeSearchInputResult: [],
  view: 'landing',
  storeAuthInputResult: {},
  setOpen: false,
  open: false,
  modalName: '',
  userAuthInfos: {
    username: {
      index: 0,
      username: 'jackiMimiiidu56',
      name: 'username',
      label: 'Username',
      autoComplete: 'username',
    },
    email: {
      index: 1,
      email: '',
      name: 'email',
      label: 'Email',
      autoComplete: 'email',
    },
    password: {
      index: 2,
      password: '',
      name: 'password',
      label: 'Password',
      autoComplete: 'password',
      type: 'password',
    },
    passwordConfirm: {
      index: 3,
      passwordConfirm: '',
      name: 'passwordConfirm',
      label: 'Password Confirmation',
      autoComplete: 'passwordConfirm',
      type: 'password',
    },
  },
  userAvatar: null,
};

// == Types
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
export const FETCH_SEARCH_INPUT_RESULT = 'FETCH_SEARCH_INPUT_RESULT';
export const STORE_SEARCH_INPUT_RESULT = 'STORE_SEARCH_INPUT_RESULT';

const UPDATE_AUTH_INPUT = 'UPDATE_AUTH_INPUT';
export const STORE_AUTH_INPUT_RESULT = 'STORE_AUTH_INPUT_RESULT';
export const FETCH_LOGIN_AUTH_INFOS = 'FETCH_LOGIN_AUTH_INFOS';
export const FETCH_REGISTER_AUTH_INFOS = 'FETCH_REGISTER_AUTH_INFOS';

const STORE_TRENDING = 'STORE_TRENDING';
export const FETCH_TRENDING = 'FETCH_TRENDING';

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const AVATAR_UPLOAD_HANDLER = 'AVATAR_UPLOAD_HANDLER';
const STORE_NEW_USERNAME = 'STORE_NEW_USERNAME';

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
        modalName: action.modalName,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        setOpen: false,
        open: false,
        modalName: action.modalName,
      };

    case AVATAR_UPLOAD_HANDLER:
      return {
        ...state,
        userAvatar: action.newAvatar,
      };

    case STORE_NEW_USERNAME:
      return {
        ...state,
        userAuthInfos: {
          ...state.userAuthInfos,
          [action.name]: {
            ...state.userAuthInfos[`${action.name}`],
            [action.name]: action.newUsername,
          },
        },
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

export const fetchLoginAuthInfos = (email, password) => ({
  type: FETCH_LOGIN_AUTH_INFOS,
  email,
  password,
});

export const fetchRegisterAuthInfos = (username, email, password, passwordConfirm) => ({
  type: FETCH_REGISTER_AUTH_INFOS,
  username,
  email,
  password,
  passwordConfirm,
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

export const openModal = (modalName) => ({
  type: OPEN_MODAL,
  setOpen: true,
  open: true,
  modalName,
});

export const closeModal = (modalName) => ({
  type: CLOSE_MODAL,
  setOpen: false,
  open: false,
  modalName,
});

export const avatarUploadHandler = (newAvatar) => ({
  type: AVATAR_UPLOAD_HANDLER,
  newAvatar,
});

export const storeNewUsername = (newUsername, name) => ({
  type: STORE_NEW_USERNAME,
  newUsername,
  name,
});

// == Selectors


// == Export
export default reducer;
