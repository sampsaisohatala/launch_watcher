import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// componenets
import Home from './views/home/Home';
import AllLaunches from './views/launches/Launches';
import Navigation from './components/navigation/Navigation';

function App() {
   const [delay, setDelay] = useState(false);

   return (
      <BrowserRouter>
         <Navigation setDelay={setDelay} />
         <Switch>
            <Route exact path="/">
               <Home delay={delay} />
            </Route>
            <Route path="/launches">
               <AllLaunches delay={delay} />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
