/* eslint-disable padded-blocks */
/* eslint-disable no-case-declarations */

// Import NPM
import { isEmpty } from 'lodash'; // Used for Local Storage (setCurrentUser action)

// Local imports : Utils functions
import {
  compareTitle,
  compareRating,
  compareReleaseDate,
  compareLanguage,
} from 'src/utils/index';


// ======================= Initial State =======================

const initialState = {
  // ....................AUTHENTIFICATION....................
  isLogged: false,
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

  // ....................USER GENERAL INFOS....................
  userInfos: {},
  userAvatar: '',

  // ....................USER FOLLOWINGS....................
  userFollowings: [],
  userSingleFollowing: {},
  updatedUserSingleFollowing: {
    status: 'Following',
    rating: undefined,
    startDate: undefined,
    endDate: 'jj/mm/aaaa',
    episode: undefined,
    season: undefined,
    // rewatches: undefined,
    notes: undefined,
  },
  updatedHistoryList: [],

  // ....................SHOWS....................
  showDetail: {},
  trendingList: [],
  nextList: [],

  // ....................SEARCH....................
  searchInputValue: '',
  storeSearchInputResult: [],

  // ....................VIEWS, LOADERS & MODALS....................
  view: '',
  viewModal: '',
  open: false,
  setOpen: false,
  modalName: '',
  loading: false,
  snackOn: false,

};

// =======================  Action Types =======================

// ....................AUTHENTIFICATION....................
export const FETCH_LOGIN_AUTH_INFOS = 'FETCH_LOGIN_AUTH_INFOS';
export const FETCH_REGISTER_AUTH_INFOS = 'FETCH_REGISTER_AUTH_INFOS';
export const STORE_AUTH_INPUT_RESULT = 'STORE_AUTH_INPUT_RESULT';
const UPDATE_AUTH_INPUT = 'UPDATE_AUTH_INPUT';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const STORE_USER_AUTH_INFOS = 'STORE_USER_AUTH_INFOS';
const LOG_OUT = 'LOG_OUT';


// ....................USER GENERAL INFOS....................
export const GET_USER_INFOS = 'GET_USER_INFOS';
export const STORE_NEW_USERNAME = 'STORE_NEW_USERNAME';
const STORE_USER_INFOS = 'STORE_USER_INFOS';
const UPDATE_USERNAME_INPUT = 'UPDATE_USERNAME_INPUT';
const STORE_NEW_USERNAME_INPUT = 'STORE_NEW_USERNAME_INPUT';
// export const AVATAR_UPLOAD_HANDLER = 'AVATAR_UPLOAD_HANDLER';


// ....................USER FOLLOWINGS....................
export const GET_USER_FOLLOWINGS = 'GET_USER_FOLLOWINGS';
export const GET_USER_SINGLE_FOLLOWING = 'GET_USER_SINGLE_FOLLOWING';
export const UPDATE_CURRENT_FOLLOWING_SHOW = 'UPDATE_CURRENT_FOLLOWING_SHOW';
const HANDLE_CHANGE_EDIT_SHOW = 'HANDLE_CHANGE_EDIT_SHOW';
const STORE_USER_FOLLOWINGS = 'STORE_USER_FOLLOWINGS';
const STORE_USER_SINGLE_FOLLOWING = 'STORE_USER_SINGLE_FOLLOWING';
const REMOVE_SHOW_HISTORY_LIST = 'REMOVE_SHOW_HISTORY_LIST';


// ....................ACTIONS ON FOLLOWED SHOW (ICONS)....................
export const START_FOLLOWING_SHOW_AT_THIS_EPISODE = 'START_FOLLOWING_SHOW_AT_THIS_EPISODE';
export const START_FOLLOWING_SHOW_FROM_THE_BEGINNING = 'START_FOLLOWING_SHOW_FROM_THE_BEGINNING';
export const PLANNING_WATCH_SHOW = 'PLANNING_WATCH_SHOW';
export const DELETE_FOLLOWING_SHOW = 'DELETE_FOLLOWING_SHOW';
const STORE_SORTED_ARRAY = 'STORE_SORTED_ARRAY';


// ....................ALL SHOWS : LAST UPDATES....................
export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_NEXT = 'FETCH_NEXT';
const STORE_TRENDING = 'STORE_TRENDING';
const STORE_NEXT = 'STORE_NEXT';


// ....................SHOW INFOS....................
export const FETCH_DETAIL_SHOW = 'FETCH_DETAIL_SHOW';
const STORE_DETAIL_SHOW = 'STORE_DETAIL_SHOW';


// ....................SEARCH....................
export const FETCH_SEARCH_INPUT_RESULT = 'FETCH_SEARCH_INPUT_RESULT';
export const STORE_SEARCH_INPUT_RESULT = 'STORE_SEARCH_INPUT_RESULT';
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
const EMPTY_SEARCH_RESULTS = 'EMPTY_SEARCH_RESULTS';


// ....................VIEWS, LOADERS & MODALS....................
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const ACTIVE_LOADING = 'ACTIVE_LOADING';
const OPEN_SNACK_ALERT = 'OPEN_SNACK_ALERT';
const CLOSE_SNACK_ALERT = 'CLOSE_SNACK_ALERT';


// ======================= Reducer =======================
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    // ....................AUTHENTIFICATION....................

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

    case SET_CURRENT_USER:
      return {
        ...state,
        isLogged: !isEmpty(action.user),
        user: action.user,
      };

    case STORE_USER_AUTH_INFOS:
      return {
        ...state,
        isLogged: true,
        loading: false,
      };

    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        user: {},
        userInfos: {},
        storeUserAuthInfos: {},
        userAvatar: '',
        userFollowings: [],
        userSingleFollowing: {},
      };

    case STORE_AUTH_INPUT_RESULT:
      return {
        ...state,
        storeAuthInputResult: action.storeAuthInputResult,
        loading: false,
      };


      // ....................USER GENERAL INFOS....................

    case STORE_USER_INFOS:
      return {
        ...state,
        userInfos: action.userInfos,
        isLogged: true,
        loading: false,
      };

    case UPDATE_USERNAME_INPUT:
      return {
        ...state,
        userInfos: {
          ...state.userInfos,
          username: action.value,
        },
      };

    case STORE_NEW_USERNAME_INPUT:
      return {
        ...state,
        userInfos: {
          ...state.userInfos,
          username: action.newUsername,
        },
      };

      // case AVATAR_UPLOAD_HANDLER:
      //   return {
      //     ...state,
      //     userAvatar: action.newAvatar,
      //   };


      // ....................USER FOLLOWINGS....................

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


      // ....................ACTIONS ON FOLLOWED SHOW (ICONS)....................

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


      // ....................ALL SHOWS : LAST UPDATES....................

    case STORE_TRENDING:
      return {
        ...state,
        trendingList: action.data,
      };

    case STORE_NEXT:
      return {
        ...state,
        nextList: action.data,
      };

      // ....................SHOW INFOS....................

    case STORE_DETAIL_SHOW:
      return {
        ...state,
        showDetail: action.data,
      };

      // ....................SEARCH....................

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

    case EMPTY_SEARCH_RESULTS:
      return {
        ...state,
        storeSearchInputResult: [],
      };


      // ....................VIEWS, LOADERS & MODALS....................

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

    case OPEN_SNACK_ALERT:
      return {
        ...state,
        snackOn: true,
      };

    case CLOSE_SNACK_ALERT:
      return {
        ...state,
        snackOn: false,
      };

    case ACTIVE_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

// ======================= Action Creators =======================

// ....................AUTHENTIFICATION....................

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

export const updateAuthInput = (value, name, index) => ({
  type: UPDATE_AUTH_INPUT,
  value,
  name,
  index,
});

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export const storeUserAuthInfos = (token) => ({
  type: STORE_USER_AUTH_INFOS,
  token,
});

export const logOut = (user) => ({
  type: LOG_OUT,
  user,
});


// ....................USER GENERAL INFOS....................

export const getUserInfos = () => ({
  type: GET_USER_INFOS,
});

export const storeUserInfos = (userInfos) => ({
  type: STORE_USER_INFOS,
  userInfos,
});

export const updateUsernameInput = (value, name) => ({
  type: UPDATE_USERNAME_INPUT,
  value,
  name,
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

// export const avatarUploadHandler = (newAvatar) => ({
//   type: AVATAR_UPLOAD_HANDLER,
//   newAvatar,
// });


// ....................USER FOLLOWINGS....................

export const getUserFollowings = (userId) => ({
  type: GET_USER_FOLLOWINGS,
  userId,
});

export const storeUserFollowings = (userFollowings) => ({
  type: STORE_USER_FOLLOWINGS,
  userFollowings,
});

export const getUserSingleFollowing = (followId) => ({
  type: GET_USER_SINGLE_FOLLOWING,
  followId,
});

export const storeUserSingleFollowing = (show) => ({
  type: STORE_USER_SINGLE_FOLLOWING,
  show,
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
  seasonProgress,
  // rewatches,
  personalNotes,
  followId,
  userId,
  showId,
) => ({
  type: UPDATE_CURRENT_FOLLOWING_SHOW,
  status,
  rating,
  startDate,
  endDate,
  episodeProgress,
  seasonProgress,
  // rewatches,
  personalNotes,
  followId,
  userId,
  showId,
});

export const removeShowHistoryList = (showId) => ({
  type: REMOVE_SHOW_HISTORY_LIST,
  showId,
});


// ....................ACTIONS ON FOLLOWED SHOW (ICONS)....................

export const storeSortedArray = (typeSort) => ({
  type: STORE_SORTED_ARRAY,
  typeSort,
});

export const startFollowingShowAtThisEpisode = (
  showId,
  showSeason,
  showEpisode,
  userId,
) => ({
  type: START_FOLLOWING_SHOW_AT_THIS_EPISODE,
  showId,
  showSeason,
  showEpisode,
  userId,
});

export const planningWatchShow = (showId, userId) => ({
  type: PLANNING_WATCH_SHOW,
  showId,
  userId,
});

export const DeleteFollowingShow = (showIdBdd, userId) => ({
  type: DELETE_FOLLOWING_SHOW,
  showIdBdd,
  userId,
});

export const startFollowingShowFromTheBeginning = (showId, userId) => ({
  type: START_FOLLOWING_SHOW_FROM_THE_BEGINNING,
  showId,
  userId,
});


// ....................ALL SHOWS : LAST UPDATES....................

export const fetchTrending = () => ({
  type: FETCH_TRENDING,
});

export const storeTrending = (data) => ({
  type: STORE_TRENDING,
  data,
});

export const fetchNext = () => ({
  type: FETCH_NEXT,
});

export const storeNext = (data) => ({
  type: STORE_NEXT,
  data,
});


// ....................SHOW INFOS....................

export const fetchDetailShow = (idShow) => ({
  type: FETCH_DETAIL_SHOW,
  idShow,
});

export const storeDetailShow = (data) => ({
  type: STORE_DETAIL_SHOW,
  data,
});


// ....................SEARCH....................

export const updateSearchInput = (searchInputValue) => ({
  type: UPDATE_SEARCH_INPUT,
  searchInputValue,
});

export const fetchSearchInputResult = (searchInputValue) => ({
  type: FETCH_SEARCH_INPUT_RESULT,
  searchInputValue,
});

export const storeSearchInputResult = (data) => ({
  type: STORE_SEARCH_INPUT_RESULT,
  data,
});

export const emptySearchResults = () => ({
  type: EMPTY_SEARCH_RESULTS,
});


// ....................VIEWS, LOADERS & MODALS....................

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

export const activeLoading = () => ({
  type: ACTIVE_LOADING,
});

export const openSnackAlert = () => ({
  type: OPEN_SNACK_ALERT,
});

export const closeSnackAlert = () => ({
  type: CLOSE_SNACK_ALERT,
});


// ========================= Export =======================
export default reducer;
