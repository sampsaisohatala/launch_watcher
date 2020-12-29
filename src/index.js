import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { asyncSetLaunchesAndEvents } from './actions/happenings';
import Loadingscreen from './components/Loadingscreen';

// styles
import 'normalize.css/normalize.css';
import './styles/style.scss';

// Create store
const store = configureStore();

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
);

ReactDOM.render(<Loadingscreen />, document.getElementById('root'));

store.dispatch(asyncSetLaunchesAndEvents()).then(() => {
   ReactDOM.render(jsx, document.getElementById('root'));
});
