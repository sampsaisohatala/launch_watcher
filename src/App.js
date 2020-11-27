import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// styles
import 'normalize.css/normalize.css';
import './styles/style.scss';

// components
import LandingView from './views/LandingView';
import LaunchesView from './views/LaunchesView';
import Navigation from './components/Navigation';

// ULRs
const allLaunchUrl = 'https://ll.thespacedevs.com/2.1.0/launch/upcoming/';

function App() {
   const [delay, setDelay] = useState(false);
   //const [upcomingLaunches, setUpcomingLaunches] = useState(null);
   const [nextLaunch, setNextLaunch] = useState(null);
   const [loading, setLoading] = useState(true);

   // fetch launches
   useEffect(() => {
      async function handleDataFetch() {
         try {
            const response = await fetch(allLaunchUrl);
            const data = await response.json();

            if (response.status === 200) {
               //setUpcomingLaunches(data.results);
               getNextLaunch(data.results);
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

   // get next launch from upcoming launches
   const getNextLaunch = (upcomingLaunches) => {
      if (!upcomingLaunches) return;
      // get the first upcoming launch that hasnt happend yet
      for (let index = 0; index < upcomingLaunches.length; index++) {
         const difference = new Date(upcomingLaunches[index].net).getTime() - Date.now();
         if (difference > 0) {
            setNextLaunch(upcomingLaunches[index]);
            console.log(upcomingLaunches[index]);
            break;
         }
      }
   };

   return (
      <BrowserRouter>
         <Navigation setDelay={setDelay} />
         <Switch>
            <Route exact path="/">
               <LandingView delay={delay} loading={loading} nextLaunch={nextLaunch} />
            </Route>
            <Route path="/launches">
               <LaunchesView delay={delay} />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
