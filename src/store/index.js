// == Import : npm
import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';

// == Import : local

// Reducers
import appReducer from 'src/store/reducers/appReducer';
import searchReducer from 'src/store/reducers/searchReducer';
import userReducer from 'src/store/reducers/userReducer';

// Middlewares
import userMiddleware from 'src/store/Middlewares/userMiddleware';
import searchMiddleware from 'src/store/Middlewares/searchMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    searchMiddleware,
    userMiddleware,
  ),
);

const reducer = combineReducers({
  searchReducer,
  userReducer,
  appReducer,
});

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
