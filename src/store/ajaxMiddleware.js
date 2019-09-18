/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_LOGIN_AUTH_INFOS,
  FETCH_REGISTER_AUTH_INFOS,
  // storeUserAuthInfos,
  // LOG_OUT,
  GET_USER_INFOS,
  getUserInfos,
  storeUserInfos,
  GET_USER_FOLLOWINGS,
  getUserFollowings,
  storeUserFollowings,
  STORE_NEW_USERNAME,
  storeNewUsernameInput,

  FETCH_TRENDING,
  storeTrending,

  FETCH_SEARCH_INPUT_RESULT,
  storeSearchInputResult,

  FETCH_DETAIL_SHOW,
  storeDetailShow,

  closeModal,

  START_FOLLOWING_SHOW,
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
      // eslint-disable-next-line no-case-declarations
      const payload = {
        email: action.email,
        password: action.password,
      };
      // const email = JSON.stringify({ email:action.email });
      // const password = JSON.stringify({ password: action.password })
      axios.post('http://localhost:8001/api/login_check',
        JSON.stringify(payload), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        // email: action.email,
        // password: action.password,
        .then((response) => {
          store.dispatch(getUserInfos(response.data.token));
          store.dispatch(closeModal());
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case GET_USER_INFOS:
      axios.get('http://localhost:8001/api/users/2', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${action.userAuthToken}`,
        },
      })
        .then((response) => {
          store.dispatch(storeUserInfos(response.data));
          store.dispatch(getUserFollowings(response.data.id));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case GET_USER_FOLLOWINGS:
      axios.get(`http://localhost:8001/api/users/${action.userId}/followings`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          store.dispatch(storeUserFollowings(response.data['hydra:member']));
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

    case STORE_NEW_USERNAME:

      const username = {
        username: action.newUsername,
      };

      console.log(action);
      axios.put(`http://localhost:8001/api/users/${action.userId}`,
        JSON.stringify(username), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          store.dispatch(storeNewUsernameInput(response.data.username));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

      // case LOG_OUT:
      //   axios.post('http://localhost:8001/api/users/new', {
      //     username: action.username,
      //     email: action.email,
      //     password: action.password,
      //     passwordConfirm: action.passwordConfirm,
      //   })
      //     .then((response) => {
      //       console.log(response);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      //   break;

      // case AVATAR_UPLOAD_HANDLER:
      //   const formData = new FormData();
      //   formData.append('image', action.newAvatar, action.newAvatar.name);
      //   axios.post('http://localhost:8001/api/users/avatar', formData)
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

    case START_FOLLOWING_SHOW:
      axios.post(`http://localhost:8001/api/followings/new/2/0/${action.idShow}/0/0`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          console.log(response);
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
