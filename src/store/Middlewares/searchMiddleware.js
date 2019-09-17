/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_TRENDING,
  storeTrending,

  FETCH_SEARCH_INPUT_RESULT,
  storeSearchInputResult,

  FETCH_DETAIL_SHOW,
  storeDetailShow,
} from 'src/store/reducers/searchReducer';


const searchMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);

  switch (action.type) {
    case FETCH_TRENDING:
      axios.get('http://localhost:8001/api/shows/aired')
        .then((response) => {
          const { data } = response;
          store.dispatch(storeTrending(data));
        })
        .catch();
      break;

    case FETCH_SEARCH_INPUT_RESULT:
      axios.get(`http://localhost:8001/api/shows/search/${action.searchInputValue}`)
        .then((response) => {
          const { data } = response;
          store.dispatch(storeSearchInputResult(data));
        })
        .catch();
      break;

    case FETCH_DETAIL_SHOW:
      axios.get(`http://localhost:8001/api/shows/${action.idShow}`)
        .then((response) => {
          console.log(response);
          const { data } = response;
          store.dispatch(storeDetailShow(data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};

export default searchMiddleware;
