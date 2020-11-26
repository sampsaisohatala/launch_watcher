import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// styles
import 'normalize.css/normalize.css';
import './styles/style.scss';

// components
import Home from './views/Home';
import AllLaunches from './views/Launches';
import Navigation from './components/Navigation';

// ULRs
const allLaunchUrl = 'https://ll.thespacedevs.com/2.1.0/launch/upcoming/';

function App() {
   const [delay, setDelay] = useState(false);
   //const [launches, setLaunches] = useState(null);
   const [upcomingLaunches, setUpcomingLaunches] = useState(null);
   const [loading, setLoading] = useState(true);

   // fetch launches
   useEffect(() => {
      async function handleDataFetch() {
         try {
            const response = await fetch(allLaunchUrl);
            const data = await response.json();

            if (response.status === 200) {
               setUpcomingLaunches(data.results);
               setLoading(false);
            } else {
               console.log('Response status: ', response.status);
               setLoading(false);
            }
         } catch (err) {
            console.error('Failed to fetch the data');
            setLoading(false);
         }
      }

      handleDataFetch();
   }, []);

   return (
      <BrowserRouter>
         <Navigation setDelay={setDelay} />
         <Switch>
            <Route exact path="/">
               <Home delay={delay} loading={loading} upcomingLaunches={upcomingLaunches} />
            </Route>
            <Route path="/launches">
               <AllLaunches delay={delay} />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
