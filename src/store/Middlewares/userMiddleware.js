/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_LOGIN_AUTH_INFOS,
  FETCH_REGISTER_AUTH_INFOS,
  storeUserAuthInfos,
  // LOG_OUT,
  GET_USER_INFOS,
} from 'src/store/reducers/userReducer';


const userMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);

  switch (action.type) {
    case FETCH_LOGIN_AUTH_INFOS:

      // eslint-disable-next-line no-case-declarations
      const payload = {
        email: action.email,
        password: action.password,
      };
      axios.post('http://localhost:8000/api/login_check',
        JSON.stringify(payload), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          store.dispatch(storeUserAuthInfos(response.data.token));
        })
        .catch((error) => {
          console.error(error);
        });
      break;


    case GET_USER_INFOS:
      console.log(action.userAuthToken, '<<<<<< TOKEN');
      axios.get('http://localhost:8000/api/users/1', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${action.userAuthToken}`,
        },
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

    default:
      next(action);
  }
};

export default userMiddleware;
