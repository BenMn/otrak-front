/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_TRENDING,
  FETCH_INPUT_RESULT,
  storeTrending,
  storeInputResult,
} from 'src/store/reducer';


const ajaxMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);

  switch (action.type) {
    case FETCH_TRENDING:
      axios.get('url')
        .then((response) => {
          const { data } = response;
          store.dispatch(storeTrending(data));
        })
        .catch();
      break;

    case FETCH_INPUT_RESULT:
      axios.get(`https://swapi.co/api/planets/${action.inputValue}/`)
        .then((response) => {
          const { data } = response;
          store.dispatch(storeInputResult(data));
        })
        .catch();
      break;

    default:
      next(action);
  }
};

export default ajaxMiddleware;
