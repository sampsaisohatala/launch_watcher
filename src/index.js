import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { asyncSetUpcomingLaunches } from './actions/launches';
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

// Temparary loading screen
ReactDOM.render(<Loadingscreen />, document.getElementById('root'));

store.dispatch(asyncSetUpcomingLaunches()).then(() => {
   ReactDOM.render(jsx, document.getElementById('root'));
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
