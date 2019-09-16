// Local data for testing
// import dataApi from 'src/data/dataApi.json';
// import ShowComplet from 'src/data/showComplet.json';

// == Initial State
const initialState = {
  // Get trending infos
  trendingList: [],
  updatedHistoryList: [],
  // Single show details
  showDetail: {},
  // Search
  searchInputValue: '',
  storeSearchInputResult: [],
  // Views & Modals
  view: '',
  viewModal: '',
  open: false,
  setOpen: false,
  modalName: '',
  // Authentification
  isLogged: true,
  storeAuthInputResult: {},
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

// ==  Action Types
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
export const FETCH_SEARCH_INPUT_RESULT = 'FETCH_SEARCH_INPUT_RESULT';
export const STORE_SEARCH_INPUT_RESULT = 'STORE_SEARCH_INPUT_RESULT';

const UPDATE_AUTH_INPUT = 'UPDATE_AUTH_INPUT';
export const STORE_AUTH_INPUT_RESULT = 'STORE_AUTH_INPUT_RESULT';
export const FETCH_LOGIN_AUTH_INFOS = 'FETCH_LOGIN_AUTH_INFOS';
export const FETCH_REGISTER_AUTH_INFOS = 'FETCH_REGISTER_AUTH_INFOS';
export const LOG_OUT = 'LOG_OUT';

const STORE_TRENDING = 'STORE_TRENDING';
export const FETCH_TRENDING = 'FETCH_TRENDING';

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const AVATAR_UPLOAD_HANDLER = 'AVATAR_UPLOAD_HANDLER';
const STORE_NEW_USERNAME = 'STORE_NEW_USERNAME';

const REMOVE_SHOW_HISTORY_LIST = 'REMOVE_SHOW_HISTORY_LIST';
export const FETCH_DETAIL_SHOW = 'FETCH_DETAIL_SHOW';
const STORE_DETAIL_SHOW = 'STORE_DETAIL_SHOW';


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
        storeSearchInputResult: action.data,
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

    case STORE_DETAIL_SHOW:
      return {
        ...state,
        showDetail: action.data,
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

    case REMOVE_SHOW_HISTORY_LIST:
      return Object.keys(state.updatedHistoryList).length === 0 ? ({
        ...state,
        updatedHistoryList:
          state.trendingList.filter((show) => show.id_tvmaze !== action.showId),
      }) : ({
        ...state,
        updatedHistoryList:
          state.updatedHistoryList.filter((show) => show.id_tvmaze !== action.showId),
      });

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

export const logOut = () => ({
  type: LOG_OUT,
});

// export const updateAuthInput = (username) => ({
//   type: UPDATE_AUTH_INPUT,
//   userAuthInfos: {
//     username,
//   },
// });

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

export const fetchDetailShow = (idShow) => ({
  type: FETCH_DETAIL_SHOW,
  idShow,
});

export const storeDetailShow = (data) => ({
  type: STORE_DETAIL_SHOW,
  data,
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

export const removeShowHistoryList = (showId) => ({
  type: REMOVE_SHOW_HISTORY_LIST,
  showId,
});

// == Selectors


// == Export
export default reducer;
