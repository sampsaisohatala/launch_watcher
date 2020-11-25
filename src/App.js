import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// componenets
import Home from './views/home/Home';
import AllLaunches from './views/launches/Launches';
import Navigation from './components/navigation/Navigation';

const allLaunchUrl = 'https://ll.thespacedevs.com/2.1.0/launch/upcoming/';
//const allPadsUrl = 'https://api.spacexdata.com/v3/launchpads';

function App() {
   const [delay, setDelay] = useState(false);
   //const [launches, setLaunches] = useState(null);
   const [upcomingLaunches, setUpcomingLaunches] = useState(null);
   const [loading, setLoading] = useState(true);

   // fetch launches
   useEffect(() => {
      console.log('effect');
      async function handleDataFetch() {
         try {
            const response = await fetch(allLaunchUrl);
            const data = await response.json();

            if (response.status === 200) {
               setUpcomingLaunches(data.results);
               setLoading(false);
               //setLaunches(data);
               //getNextLaunch(data);
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

   const getNextLaunch = (data) => {
      console.log(data);

      let today = new Date().getTime() / 1000;
      console.log(data[105].launch_date_unix, today);
      console.log(today);
      // get all future flights

      //const upcomingLaunches = data.map((launch) => console.log(today, launch.launch_date_unix));
      //console.log(upcomingLaunches);

      // get closest launch from today
      const nextLaunch = data.reduce((prev, curr) => {
         return Math.abs(curr.launch_date_utc - today) < Math.abs(prev.launch_date_utc - today) ? curr : prev;
      });

      console.log('3');
      console.log('nextlaunch: ', nextLaunch);
      /*
      var counts = [4, 9, 15, 6, 2],
         goal = 5;

      var closest = counts.reduce(function (prev, curr) {
         return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
      });

      console.log(closest);
      */
   };

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
