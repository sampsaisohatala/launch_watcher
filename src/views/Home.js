import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import LaunchTimer from '../components/LaunchTimer';
import { ReactComponent as Logo } from './siluetti.svg';

function Home(props) {
   const upcomingLaunches = useMemo(() => props.upcomingLaunches, [props.upcomingLaunches]);
   const [nextLaunch, setNextLaunch] = useState(null);

   // move this useEffect to app.js
   useEffect(() => {
      if (!upcomingLaunches) return;
      // get the first upcoming launch that hasnt happend yet
      for (let index = 0; index < upcomingLaunches.length; index++) {
         const difference = new Date(upcomingLaunches[index].net).getTime() - Date.now();
         if (difference > 0) {
            setNextLaunch(upcomingLaunches[index]);
            break;
         }
      }
   }, [upcomingLaunches]);

   return (
      <div className="container">
         {/* Next launch information */}
         {
            // solution for the old API
            //nextLaunch && <h1 className="next-launch-information">{`${nextLaunch.rocket.rocket_name} Block ${nextLaunch.rocket.second_stage.block} | ${nextLaunch.mission_name}`}</h1>}
            nextLaunch && <h1 className="next-launch__information">{nextLaunch.name}</h1>
         }

         {/* Next launch heading */}
         <h2 className="next-launch__heading">{nextLaunch ? 'Launch starting in' : 'No data available'}</h2>

         {/* Next launch timer */}
         {nextLaunch && <LaunchTimer className="launch__timer" nextLaunch={nextLaunch} />}
      </div>
   );
}

export default Home;
