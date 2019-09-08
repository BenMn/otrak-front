// == Initial State
const initialState = {
  message: 'Hello',
  trendingList: {},
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';
export const FETCH_TRENDING = 'FETCH_TRENDING';
const STORE_TRENDING = 'STORE_TRENDING';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    case STORE_TRENDING:
      return {
        ...state,
        trendingList: action.data,
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
export const fetchTrending = () => ({
  type: FETCH_TRENDING,
});
export const storeTrending = (data) => ({
  type: STORE_TRENDING,
  data,
});


// == Selectors


// == Export
export default reducer;
