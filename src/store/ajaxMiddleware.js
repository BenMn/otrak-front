import axios from 'axios';
import { FETCH_TRENDING, storeTrending } from 'src/store/reducer';


const ajaxMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  next(action);

  switch (action.type) {
    case FETCH_TRENDING:
      axios.get('url')
        .then((response) => {
          const { data } = response;
          store.dispatch(storeTrending(data));
        })
        .catch();
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
