/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_LOGIN_AUTH_INFOS,
  FETCH_REGISTER_AUTH_INFOS,

  FETCH_TRENDING,
  storeTrending,

  FETCH_SEARCH_INPUT_RESULT,
  storeSearchInputResult,

  FETCH_DETAIL_SHOW,
  storeDetailShow,
} from 'src/store/reducer';


const ajaxMiddleware = (store) => (next) => (action) => {
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

    case FETCH_LOGIN_AUTH_INFOS:
      axios.post('http://localhost:8001/api/login_check', {
        email: action.email,
        password: action.password,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case FETCH_REGISTER_AUTH_INFOS:
      axios.post('http://localhost:8001/api/users/new', {
        username: action.username,
        email: action.email,
        password: action.password,
        passwordConfirm: action.passwordConfirm,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      break;

      // case AVATAR_UPLOAD_HANDLER:
      //   const formData = new FormData();
      //   formData.append('image', action.newAvatar, action.newAvatar.name);
      //   axios.post('http://localhost:8000/api/users/avatar', formData)
      //     .then((response) => {
      //       console.log(response);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      //   break;

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

export default ajaxMiddleware;
