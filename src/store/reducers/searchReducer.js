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
};

// ==  Action Types
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';

export const FETCH_SEARCH_INPUT_RESULT = 'FETCH_SEARCH_INPUT_RESULT';
export const STORE_SEARCH_INPUT_RESULT = 'STORE_SEARCH_INPUT_RESULT';

export const FETCH_TRENDING = 'FETCH_TRENDING';
const STORE_TRENDING = 'STORE_TRENDING';

export const FETCH_DETAIL_SHOW = 'FETCH_DETAIL_SHOW';
const STORE_DETAIL_SHOW = 'STORE_DETAIL_SHOW';

const REMOVE_SHOW_HISTORY_LIST = 'REMOVE_SHOW_HISTORY_LIST';


// == Reducer
const searchReducer = (state = initialState, action = {}) => {
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

    case STORE_DETAIL_SHOW:
      return {
        ...state,
        showDetail: action.data,
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

export const fetchSearchInputResult = (searchInputValue) => ({
  type: FETCH_SEARCH_INPUT_RESULT,
  searchInputValue,
});

export const storeSearchInputResult = (data) => ({
  type: STORE_SEARCH_INPUT_RESULT,
  data,
});

export const fetchTrending = () => ({
  type: FETCH_TRENDING,
});

export const storeTrending = (data) => ({
  type: STORE_TRENDING,
  data,
});

export const fetchDetailShow = (idShow) => ({
  type: FETCH_DETAIL_SHOW,
  idShow,
});

export const storeDetailShow = (data) => ({
  type: STORE_DETAIL_SHOW,
  data,
});

export const removeShowHistoryList = (showId) => ({
  type: REMOVE_SHOW_HISTORY_LIST,
  showId,
});


// == Export
export default searchReducer;
