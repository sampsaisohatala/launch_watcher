import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { asyncSetLaunches } from './actions/launches';

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
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(asyncSetLaunches()).then(() => {
   ReactDOM.render(jsx, document.getElementById('root'));
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
