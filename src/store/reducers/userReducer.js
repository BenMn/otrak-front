// == Initial State
const initialState = {
  // Authentification
  isLogged: false,
  userAuthToken: '',
  storeAuthInputResult: {},
  userAvatar: null,
  userAuthInfos: {
    username: {
      index: 0,
      username: 'jackiMimiiidu56',
      name: 'username',
      label: 'Username',
      autoComplete: 'username',
    },
    email: {
      index: 1,
      email: '',
      name: 'email',
      label: 'Email',
      autoComplete: 'email',
    },
    password: {
      index: 2,
      password: '',
      name: 'password',
      label: 'Password',
      autoComplete: 'password',
      type: 'password',
    },
    passwordConfirm: {
      index: 3,
      passwordConfirm: '',
      name: 'passwordConfirm',
      label: 'Password Confirmation',
      autoComplete: 'passwordConfirm',
      type: 'password',
    },
  },
};

// ==  Action Types
const UPDATE_AUTH_INPUT = 'UPDATE_AUTH_INPUT';

export const FETCH_LOGIN_AUTH_INFOS = 'FETCH_LOGIN_AUTH_INFOS';
export const FETCH_REGISTER_AUTH_INFOS = 'FETCH_REGISTER_AUTH_INFOS';
export const STORE_AUTH_INPUT_RESULT = 'STORE_AUTH_INPUT_RESULT';

const STORE_NEW_USERNAME = 'STORE_NEW_USERNAME';

export const GET_USER_INFOS = 'GET_USER_INFOS';
const STORE_USER_AUTH_INFOS = 'STORE_USER_AUTH_INFOS';

export const LOG_OUT = 'LOG_OUT';

export const AVATAR_UPLOAD_HANDLER = 'AVATAR_UPLOAD_HANDLER';

// == Reducer
const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_AUTH_INPUT:
      return {
        ...state,
        userAuthInfos: {
          ...state.userAuthInfos,
          [action.name]: {
            ...state.userAuthInfos[`${action.name}`],
            [action.name]: action.value,
          },
        },
      };

    case STORE_AUTH_INPUT_RESULT:
      return {
        ...state,
        storeAuthInputResult: action.storeAuthInputResult,
      };

    case STORE_USER_AUTH_INFOS:
      return {
        ...state,
        userAuthToken: action.token,
        isLogged: true,
      };

    case AVATAR_UPLOAD_HANDLER:
      return {
        ...state,
        userAvatar: action.newAvatar,
      };

    case STORE_NEW_USERNAME:
      return {
        ...state,
        userAuthInfos: {
          ...state.userAuthInfos,
          [action.name]: {
            ...state.userAuthInfos[`${action.name}`],
            [action.name]: action.newUsername,
          },
        },
      };

    default:
      return state;
  }
};

// == Action Creators
export const updateAuthInput = (value, name, index) => ({
  type: UPDATE_AUTH_INPUT,
  value,
  name,
  index,
});

export const fetchLoginAuthInfos = (email, password) => ({
  type: FETCH_LOGIN_AUTH_INFOS,
  email,
  password,
});

export const fetchRegisterAuthInfos = (username, email, password, passwordConfirm) => ({
  type: FETCH_REGISTER_AUTH_INFOS,
  username,
  email,
  password,
  passwordConfirm,
});

export const getUserInfos = (userAuthToken) => ({
  type: GET_USER_INFOS,
  userAuthToken,
});

export const storeUserAuthInfos = (token) => ({
  type: STORE_USER_AUTH_INFOS,
  token,
});

export const storeNewUsername = (newUsername, name) => ({
  type: STORE_NEW_USERNAME,
  newUsername,
  name,
});

export const avatarUploadHandler = (newAvatar) => ({
  type: AVATAR_UPLOAD_HANDLER,
  newAvatar,
});

export const logOut = () => ({
  type: LOG_OUT,
});


// == Export
export default userReducer;
