/* eslint-disable no-case-declarations */

// Local data for testing

// Utils functions
import {
  compareTitle,
  compareRating,
  compareReleaseDate,
  compareLanguage,
} from 'src/utils/index';

// == Initial State
const initialState = {
  // Get trending infos
  trendingList: [],
  updatedHistoryList: [],
  // Single show details
  showDetail: {},
  userFollowings: [],
  userSingleFollowing: {},
  updatedUserSingleFollowing: {
    status: 'Following',
    rating: undefined,
    startDate: undefined,
    endDate: 'jj/mm/aaaa',
    episode: undefined,
    rewatches: undefined,
    notes: undefined,
  },
  // Search
  searchInputValue: '',
  storeSearchInputResult: [],
  // Views & Modals
  view: '',
  viewModal: '',
  open: false,
  setOpen: false,
  modalName: '',
  loading: false,
  // Authentification
  isLogged: false,
  userAuthToken: '',
  storeAuthInputResult: {},
  userAuthInfos: {
    username: {
      index: 0,
      username: '',
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
  userAvatar: '',
  userInfos: {},
};

// ==  Action Types
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
export const FETCH_SEARCH_INPUT_RESULT = 'FETCH_SEARCH_INPUT_RESULT';
export const STORE_SEARCH_INPUT_RESULT = 'STORE_SEARCH_INPUT_RESULT';
const STORE_USER_AUTH_INFOS = 'STORE_USER_AUTH_INFOS';
export const GET_USER_INFOS = 'GET_USER_INFOS';
const STORE_USER_INFOS = 'STORE_USER_INFOS';
export const GET_USER_FOLLOWINGS = 'GET_USER_FOLLOWINGS';
export const GET_USER_SINGLE_FOLLOWING = 'GET_USER_SINGLE_FOLLOWING';
const STORE_USER_SINGLE_FOLLOWING = 'STORE_USER_SINGLE_FOLLOWING';

const EMPTY_SEARCH_RESULTS = 'EMPTY_SEARCH_RESULTS';

const HANDLE_CHANGE_EDIT_SHOW = 'HANDLE_CHANGE_EDIT_SHOW';
export const UPDATE_CURRENT_FOLLOWING_SHOW = 'UPDATE_CURRENT_FOLLOWING_SHOW';

const UPDATE_AUTH_INPUT = 'UPDATE_AUTH_INPUT';
const UPDATE_USERNAME_INPUT = 'UPDATE_USERNAME_INPUT';
const STORE_NEW_USERNAME_INPUT = 'STORE_NEW_USERNAME_INPUT';

export const STORE_AUTH_INPUT_RESULT = 'STORE_AUTH_INPUT_RESULT';
export const FETCH_LOGIN_AUTH_INFOS = 'FETCH_LOGIN_AUTH_INFOS';
export const FETCH_REGISTER_AUTH_INFOS = 'FETCH_REGISTER_AUTH_INFOS';
const LOG_OUT = 'LOG_OUT';

const STORE_TRENDING = 'STORE_TRENDING';
export const FETCH_TRENDING = 'FETCH_TRENDING';

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const ACTIVE_LOADING = 'ACTIVE_LOADING';

export const AVATAR_UPLOAD_HANDLER = 'AVATAR_UPLOAD_HANDLER';
export const STORE_NEW_USERNAME = 'STORE_NEW_USERNAME';

const REMOVE_SHOW_HISTORY_LIST = 'REMOVE_SHOW_HISTORY_LIST';
export const FETCH_DETAIL_SHOW = 'FETCH_DETAIL_SHOW';
const STORE_DETAIL_SHOW = 'STORE_DETAIL_SHOW';
const STORE_USER_FOLLOWINGS = 'STORE_USER_FOLLOWINGS';

export const START_FOLLOWING_SHOW = 'START_FOLLOWING_SHOW';

const STORE_SORTED_ARRAY = 'STORE_SORTED_ARRAY';

export const START_FOLLOWING_SHOW_AT_THIS_EPISODE = 'START_FOLLOWING_SHOW_AT_THIS_EPISODE';

export const PLANNING_WATCH_SHOW = 'PLANNING_WATCH_SHOW';

export const DELETE_FOLLOWING_SHOW = 'DELETE_FOLLOWING_SHOW';

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
        loading: false,
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

    case UPDATE_USERNAME_INPUT:
      return {
        ...state,
        userInfos: {
          ...state.userInfos,
          username: action.value,
        },
      };

    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        userAuthToken: '',
        userInfos: {},
        storeUserAuthInfos: {},
        userAvatar: '',
      };

    case STORE_AUTH_INPUT_RESULT:
      return {
        ...state,
        storeAuthInputResult: action.storeAuthInputResult,
        loading: false,
      };

    case STORE_USER_AUTH_INFOS:
      return {
        ...state,
        userAuthToken: action.token,
        isLogged: true,
        loading: false,
      };

    case STORE_USER_INFOS:
      return {
        ...state,
        userInfos: action.userInfos,
        isLogged: true,
        loading: false,
      };

    case STORE_NEW_USERNAME_INPUT:
      return {
        ...state,
        userInfos: {
          ...state.userInfos,
          username: action.newUsername,
        },
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

    case ACTIVE_LOADING:
      return {
        ...state,
        loading: true,
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

    case REMOVE_SHOW_HISTORY_LIST:
      return Object.keys(state.updatedHistoryList).length === 0 ? ({
        ...state,
        updatedHistoryList:
          state.userFollowings.filter((show) => show.id !== action.showId),
      }) : ({
        ...state,
        updatedHistoryList:
          state.updatedHistoryList.filter((show) => show.id !== action.showId),
      });

    case EMPTY_SEARCH_RESULTS:
      return {
        ...state,
        storeSearchInputResult: [],
      };

    case STORE_USER_FOLLOWINGS:
      return {
        ...state,
        userFollowings: action.userFollowings,
      };

    case STORE_USER_SINGLE_FOLLOWING:
      return {
        ...state,
        userSingleFollowing: action.show,
      };

    case HANDLE_CHANGE_EDIT_SHOW:

      return {
        ...state,
        updatedUserSingleFollowing: {
          ...state.updatedUserSingleFollowing,
          [action.name]: action.value,
        },
      };

    case STORE_SORTED_ARRAY:

      switch (action.typeSort) {
        case 'Title':
          const sortedTiltleArray = [...state.storeSearchInputResult].sort(compareTitle);
          return {
            ...state,
            storeSearchInputResult: sortedTiltleArray,
          };

        case 'Rating':
          const sortedRatingArray = [...state.storeSearchInputResult].sort(compareRating);
          return {
            ...state,
            storeSearchInputResult: sortedRatingArray,
          };

        case 'Release date':
          const sortedReleaseDateArray = [...state.storeSearchInputResult].sort(compareReleaseDate);
          return {
            ...state,
            storeSearchInputResult: sortedReleaseDateArray,
          };

        case 'Language':
          const sortedLanguageArray = [...state.storeSearchInputResult].sort(compareLanguage);
          return {
            ...state,
            storeSearchInputResult: sortedLanguageArray,
          };

        default:
          return state;
      }

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

export const updateUsernameInput = (value, name) => ({
  type: UPDATE_USERNAME_INPUT,
  value,
  name,
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

export const storeUserAuthInfos = (token) => ({
  type: STORE_USER_AUTH_INFOS,
  token,
});

export const getUserInfos = (userAuthToken) => ({
  type: GET_USER_INFOS,
  userAuthToken,
});

export const getUserFollowings = (userId, userAuthToken) => ({
  type: GET_USER_FOLLOWINGS,
  userId,
  userAuthToken,
});

export const storeUserSingleFollowing = (show) => ({
  type: STORE_USER_SINGLE_FOLLOWING,
  show,
});

export const getUserSingleFollowing = (followId, userAuthToken) => ({
  type: GET_USER_SINGLE_FOLLOWING,
  followId,
  userAuthToken,
});

export const storeUserInfos = (userInfos) => ({
  type: STORE_USER_INFOS,
  userInfos,
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

export const storeNewUsername = (newUsername, name, userId) => ({
  type: STORE_NEW_USERNAME,
  newUsername,
  name,
  userId,
});

export const storeNewUsernameInput = (newUsername) => ({
  type: STORE_NEW_USERNAME_INPUT,
  newUsername,
});

export const removeShowHistoryList = (showId) => ({
  type: REMOVE_SHOW_HISTORY_LIST,
  showId,
});

export const emptySearchResults = () => ({
  type: EMPTY_SEARCH_RESULTS,
});


export const storeUserFollowings = (userFollowings) => ({
  type: STORE_USER_FOLLOWINGS,
  userFollowings,
});

export const startFollowingShow = (idShow, token, userId) => ({
  type: START_FOLLOWING_SHOW,
  idShow,
  token,
  userId,
});

export const storeSortedArray = (typeSort) => ({
  type: STORE_SORTED_ARRAY,
  typeSort,
});

export const activeLoading = () => ({
  type: ACTIVE_LOADING,
});

export const startFollowingShowAtThisEpisode = (
  showId,
  showSeason,
  showEpisode,
  userAuthToken,
  userId,
) => ({
  type: START_FOLLOWING_SHOW_AT_THIS_EPISODE,
  showId,
  showSeason,
  showEpisode,
  userAuthToken,
  userId,
});

export const planningWatchShow = (showId, userId, userAuthToken) => ({
  type: PLANNING_WATCH_SHOW,
  showId,
  userId,
  userAuthToken,
});

export const DeleteFollowingShow = (idShow, token) => ({
  type: DELETE_FOLLOWING_SHOW,
  idShow,
  token,
});

export const handleChangeEditShow = (name, value) => ({
  type: HANDLE_CHANGE_EDIT_SHOW,
  name,
  value,
});

export const updateCurrentFollowingShow = (
  status,
  rating,
  startDate,
  endDate,
  episodeProgress,
  rewatches,
  personalNotes,
  followId,
  userAuthToken,
) => ({
  type: UPDATE_CURRENT_FOLLOWING_SHOW,
  status,
  rating,
  startDate,
  endDate,
  episodeProgress,
  rewatches,
  personalNotes,
  followId,
  userAuthToken,
});
// == Selectors


// == Export
export default reducer;
