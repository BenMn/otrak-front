// == Initial State
const initialState = {
  trendingList: {},
  inputValue: '',
  storeInputResult: {},
  view: '',
  userAuthInfos: {
    username: 'prout',
    email: '',
    password: '',
    passwordConfirm: '',
  },
};

// == Types
const CHANGE_VIEW = 'CHANGE_VIEW';

const UPDATE_INPUT = 'UPDATE_INPUT';
const UPDATE_AUTH_INPUT = 'UPDATE_AUTH_INPUT';
export const FETCH_INPUT_RESULT = 'FETCH_INPUT_RESULT';
export const STORE_INPUT_RESULT = 'STORE_INPUT_RESULT';

const STORE_TRENDING = 'STORE_TRENDING';
export const FETCH_TRENDING = 'FETCH_TRENDING';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return {
        ...state,
        view: action.view,
      };

    case UPDATE_INPUT:
      return {
        ...state,
        inputValue: action.inputValue,
      };

    case UPDATE_AUTH_INPUT:
      return {
        ...state,
        userAuthInfos: {
          username: action.userAuthInfos.username,
        },
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

    default:
      return state;
  }
};

// == Action Creators

export const changeView = (view) => ({
  type: CHANGE_VIEW,
  view,
});

export const updateInput = (inputValue) => ({
  type: UPDATE_INPUT,
  inputValue,
});

export const updateAuthInput = (username) => ({
  type: UPDATE_AUTH_INPUT,
  userAuthInfos: {
    username,
  },
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

// == Selectors


// == Export
export default reducer;
