// == Initial State
const initialState = {
  message: 'Hello',
  trendingList: {},
  view: 'landing',
  inputValue: '',
  storeInputResult: {},
};

// == Types
const UPDATE_INPUT = 'UPDATE_INPUT';
export const FETCH_INPUT_RESULT = 'FETCH_INPUT_RESULT';
export const STORE_INPUT_RESULT = 'STORE_INPUT_RESULT';

const STORE_TRENDING = 'STORE_TRENDING';
export const FETCH_TRENDING = 'FETCH_TRENDING';

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

// == Selectors


// == Export
export default reducer;
