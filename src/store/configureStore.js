import { createStore } from 'redux';
import launchesReducer from '../reducers/launches';

const storeCreation = () => {
   const store = createStore(launchesReducer);
   return store;
};

export default storeCreation;
