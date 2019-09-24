/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable no-console */

// Import NPM
import axios from 'axios';
import jwt from 'jsonwebtoken';

// Reducer imports
import {

  // ....................AUTHENTIFICATION....................
  // Action TYPES
  FETCH_LOGIN_AUTH_INFOS,
  FETCH_REGISTER_AUTH_INFOS,
  // Action CREATORS
  setCurrentUser,
  fetchLoginAuthInfos,
  storeUserAuthInfos,

  // ....................USER GENERAL INFOS....................
  // Action TYPES
  GET_USER_INFOS,
  STORE_NEW_USERNAME,
  // Action CREATORS
  getUserInfos,
  storeUserInfos,
  storeNewUsernameInput,


  // ....................USER FOLLOWINGS....................
  // Action TYPES
  GET_USER_FOLLOWINGS,
  UPDATE_CURRENT_FOLLOWING_SHOW,
  GET_USER_SINGLE_FOLLOWING,
  // Action CREATORS
  getUserFollowings,
  storeUserFollowings,
  storeUserSingleFollowing,

  // ....................ACTIONS ON FOLLOWED SHOW (ICONS)....................
  // Action TYPES
  START_FOLLOWING_SHOW_AT_THIS_EPISODE,
  START_FOLLOWING_SHOW_FROM_THE_BEGINNING,
  PLANNING_WATCH_SHOW,
  DELETE_FOLLOWING_SHOW,


  // ....................ALL SHOWS : LAST UPDATES....................
  // Action TYPES
  FETCH_TRENDING,
  FETCH_NEXT,
  // Action CREATORS
  storeTrending,
  storeNext,


  // ....................SHOW INFOS....................
  // Action TYPES
  FETCH_DETAIL_SHOW,
  // Action CREATORS
  storeDetailShow,


  // ....................SEARCH....................
  // Action TYPES
  FETCH_SEARCH_INPUT_RESULT,
  // Action CREATORS
  storeSearchInputResult,


  // ....................MODAL....................
  closeModal,

} from 'src/store/reducer';

// Local imports : UTILS functions
import {
  transformToInt,
  setAuthorizationToken,
} from 'src/utils';


const ajaxMiddleware = (store) => (next) => (action) => {
  // Switch from development to production urls
  const urlServer = 'http://82.243.9.13';
  const urlLocal = 'http://localhost:8001';
  const url = urlLocal;


  console.log('AJAX MIDDLEWARE - ACTION DETAILS >>> ', action);

  switch (action.type) {
    // ....................AUTHENTIFICATION....................

    case FETCH_LOGIN_AUTH_INFOS:

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
          // Token stored in Local Sotrage
          localStorage.setItem('token', token);
          setAuthorizationToken(token);
          const actionSetCurrentUser = setCurrentUser(jwt.decode(token));
          // New current user set
          store.dispatch(actionSetCurrentUser);
          // get and store User infos
          store.dispatch(getUserInfos());
          store.dispatch(storeUserAuthInfos());
          // Close Auth modal
          store.dispatch(closeModal());
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


      // ....................USER GENERAL INFOS....................

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


      // ....................USER FOLLOWINGS....................

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


    case UPDATE_CURRENT_FOLLOWING_SHOW:

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
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      break;


      // ....................ACTIONS ON FOLLOWED SHOW (ICONS)....................

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


      // ....................ALL SHOWS : LAST UPDATES....................

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


      // ....................SHOW INFOS....................

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


      // ....................SEARCH....................

    case FETCH_SEARCH_INPUT_RESULT:
      axios.get(`${url}/api/shows/search/${action.searchInputValue}`)
        .then((response) => {
          const { data } = response;
          store.dispatch(storeSearchInputResult(data));
        })
        .catch();
      break;


    default:
      next(action);
  }
};

export default ajaxMiddleware;
