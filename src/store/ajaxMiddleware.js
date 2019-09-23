/* eslint-disable no-case-declarations */
/* eslint-disable no-console */

import axios from 'axios';
import jwt from 'jsonwebtoken';

import {
  FETCH_LOGIN_AUTH_INFOS,
  fetchLoginAuthInfos,
  FETCH_REGISTER_AUTH_INFOS,

  GET_USER_INFOS,
  getUserInfos,
  storeUserInfos,
  storeUserAuthInfos,
  GET_USER_FOLLOWINGS,
  getUserFollowings,
  storeUserFollowings,

  setCurrentUser,

  UPDATE_CURRENT_FOLLOWING_SHOW,

  GET_USER_SINGLE_FOLLOWING,
  storeUserSingleFollowing,

  STORE_NEW_USERNAME,
  storeNewUsernameInput,

  FETCH_TRENDING,
  storeTrending,

  FETCH_NEXT,
  storeNext,

  FETCH_SEARCH_INPUT_RESULT,
  storeSearchInputResult,

  FETCH_DETAIL_SHOW,
  storeDetailShow,

  closeModal,

  START_FOLLOWING_SHOW_AT_THIS_EPISODE,

  START_FOLLOWING_SHOW_FROM_THE_BEGINNING,

  PLANNING_WATCH_SHOW,

  DELETE_FOLLOWING_SHOW,
} from 'src/store/reducer';

import {
  transformToInt,
  setAuthorizationToken,
} from 'src/utils';


const ajaxMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line no-unused-vars
  const urlServer = 'http://82.243.9.13';
  const urlLocal = 'http://localhost:8001';
  const url = urlLocal;


  console.log('Je suis le middleware, et je laisse passer cette action: ', action);

  switch (action.type) {
    case FETCH_TRENDING:
      axios.get(`${url}/api/shows/aired`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          const { data } = response;
          store.dispatch(storeTrending(data));
        })
        .catch();
      break;

    case FETCH_NEXT:
      axios.get(`${url}/api/shows/next`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          const { data } = response;
          store.dispatch(storeNext(data));
        })
        .catch();
      break;

    case FETCH_SEARCH_INPUT_RESULT:
      axios.get(`${url}/api/shows/search/${action.searchInputValue}`)
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
      axios.post(`${url}/api/login_check`,
        JSON.stringify(payload), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          const { token } = response.data;
          localStorage.setItem('token', token);
          setAuthorizationToken(token);
          const actionSetCurrentUser = setCurrentUser(jwt.decode(token));
          store.dispatch(actionSetCurrentUser);
          store.dispatch(getUserInfos());
          store.dispatch(storeUserAuthInfos());
          store.dispatch(closeModal());
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case GET_USER_INFOS:
      axios.get(`${url}/api/users/profile`, {
        headers: {
          'Content-Type': 'application/json',
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
      axios.get(`${url}/api/users/${action.userId}/followings`, {
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

    case GET_USER_SINGLE_FOLLOWING:
      axios.get(`${url}/api/followings/${action.followId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response, '<<<<<<<<<<<<< SINGLE SHOW USER FOLLOWING');
          store.dispatch(storeUserSingleFollowing(response.data));
          // store.dispatch(storeUserFollowings(response.data['hydra:member']));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case FETCH_REGISTER_AUTH_INFOS:
      axios.post(`${url}/api/users/new`, {
        username: action.username,
        email: action.email,
        password: action.password,
      })
        .then(() => {
          store.dispatch(fetchLoginAuthInfos(action.email, action.password));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case STORE_NEW_USERNAME:

      const username = {
        username: action.newUsername,
      };

      axios.put(`${url}/api/users/${action.userId}`,
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

      // case AVATAR_UPLOAD_HANDLER:
      //   const formData = new FormData();
      //   formData.append('image', action.newAvatar, action.newAvatar.name);
      //   axios.post('${url}/api/users/avatar', formData)
      //     .then((response) => {
      //       console.log(response);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      //   break;

    case FETCH_DETAIL_SHOW:
      axios.get(`${url}/api/shows/${action.idShow}`)
        .then((response) => {
          console.log(response);
          const { data } = response;
          store.dispatch(storeDetailShow(data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case START_FOLLOWING_SHOW_AT_THIS_EPISODE:
      axios.post(`${url}/api/followings/new/${action.userId}/0/${action.showId}/${action.showSeason}/${action.showEpisode}`, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case START_FOLLOWING_SHOW_FROM_THE_BEGINNING:
      axios.post(`${url}/api/followings/new/${action.userId}/0/${action.showId}/1/1`, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case PLANNING_WATCH_SHOW:
      axios.post(`${url}/api/followings/new/${action.userId}/2/${action.showId}/0/0`, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case UPDATE_CURRENT_FOLLOWING_SHOW:

      // status,
      // rating,
      // startDate,
      // endDate,
      // episodeProgress,
      // rewatches,
      // personalNotes,
      const statusInInt = transformToInt(action.status);

      const updatedFollowedShowDatas = {
        status: statusInInt,
        endDate: action.endDate,
        episode: action.number,
      };

      axios.patch(`${url}/api/followings/${action.followId}`,
        JSON.stringify(updatedFollowedShowDatas), {
          headers: {
            'Content-Type': 'application/vnd.api+json',
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

    case DELETE_FOLLOWING_SHOW:
      axios.delete(`${url}/api/followings/${action.showIdBdd}`, {
        headers: {
          'Content-Type': 'application/json',
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
