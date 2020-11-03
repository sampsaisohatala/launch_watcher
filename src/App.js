import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// componenets
import Home from './views/Home';
import AllLaunches from './views/AllLaunches';
import Header from './components/Header';

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route path="/all">
               <AllLaunches />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
