import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { asyncSetLaunches } from './actions/launches';

// styles
import 'normalize.css/normalize.css';
import './styles/style.scss';

// Create store
const store = configureStore();

function App() {
   store.dispatch(asyncSetLaunches());

   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
}

export default App;
