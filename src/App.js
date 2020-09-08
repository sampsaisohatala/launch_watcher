import React from 'react';
import './App.css';
import {  Route, Switch } from "react-router";
import { Link, BrowserRouter } from 'react-router-dom'

import Home from './views/Home'
import AllLaunches from './views/AllLaunches'

function App() {
  return(
    <BrowserRouter>
      <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all">All</Link>
            </li>
          </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/all">
          <AllLaunches />
        </Route>
      </Switch>
      
    </BrowserRouter>
             

  )
}

export default App;
