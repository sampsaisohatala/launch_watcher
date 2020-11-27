import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import LaunchTimer from '../components/LaunchTimer';
import { ReactComponent as Logo } from './siluetti.svg';

function LandingView(props) {
   const nextLaunch = useMemo(() => props.nextLaunch, [props.nextLaunch]);

   return (
      <div className="container">
         {/* Next launch information */}
         {
            // solution for the old API
            //nextLaunch && <h1 className="next-launch-information">{`${nextLaunch.rocket.rocket_name} Block ${nextLaunch.rocket.second_stage.block} | ${nextLaunch.mission_name}`}</h1>}
            nextLaunch && <h1 className="landing-view__information">{nextLaunch.name}</h1>
         }

         {/* Next launch heading */}
         <h2 className="landing-view__heading">{nextLaunch ? 'Launch starting in' : 'No data available'}</h2>

         {/* Next launch timer */}
         {nextLaunch && <LaunchTimer nextLaunch={nextLaunch} />}
      </div>
   );
}

export default LandingView;
