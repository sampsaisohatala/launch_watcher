import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import launchesReducer from '../reducers/happenings';
import filtersReducer from '../reducers/filters';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
   // Store creation
   const store = createStore(
      combineReducers({
         happenings: launchesReducer,
         filters: filtersReducer,
      }),
      composeEnchancers(applyMiddleware(thunk))
   );
   return store;
};

export default configureStore;
