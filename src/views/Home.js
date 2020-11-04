import React from 'react';
import { useEffect, useState } from 'react';
import NextLaunchTimer from '../components/NextLaunchTimer';
import { Spinner } from 'react-bootstrap';

function Home() {
   const nextLaunchUrl = 'https://api.spacexdata.com/v3/launches/next';
   const [nextLaunch, setNextLaunch] = useState(null);

   // fetch next available launch
   useEffect(() => {
      fetch(nextLaunchUrl)
         .then((res) => res.json())
         .then((json) => {
            setNextLaunch(json);
         });
   }, []);

   // return loading screen
   if (nextLaunch == null) {
      return (
         <div className="App">
            <h1> Loading... </h1>
            <Spinner animation="border" />
         </div>
      );
   }

   // return main page
   else {
      return (
         <div className="App">
            <h3>{`${nextLaunch.rocket.rocket_name} Block ${nextLaunch.rocket.second_stage.block} | ${nextLaunch.mission_name}`}</h3>
            <NextLaunchTimer nextLaunch={nextLaunch} />
         </div>
      );
   }
}

export default Home;
