import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import NextLaunchTimer from '../../components/nextlLaunchTimer/NextLaunchTimer';
import './Home.css';

import { ReactComponent as Logo } from './siluetti.svg';

function Home(props) {
   const upcomingLaunches = useMemo(() => props.upcomingLaunches, [props.upcomingLaunches]);

   const [nextLaunch, setNextLaunch] = useState(null);

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
      <div className="hero">
         <div className="hero-background">
            <img className="top-background" src={process.env.PUBLIC_URL + `/images/moon-bg.jpg`} alt="" />
            <Logo className="cover-background" fill="red" stroke="green" />
            <div className="bottom-background"></div>
         </div>
         {/* Next launch information */}
         {
            // solution for the old API
            //nextLaunch && <h1 className="next-launch-information">{`${nextLaunch.rocket.rocket_name} Block ${nextLaunch.rocket.second_stage.block} | ${nextLaunch.mission_name}`}</h1>}
            nextLaunch && <h1 className="next-launch-information">{nextLaunch.name}</h1>
         }

         {/* Next launch heading */}
         <span className="next-launch-heading">{nextLaunch ? 'Launch starting in' : 'No data available'}</span>

         {/* Next launch timer */}
         {nextLaunch && <NextLaunchTimer nextLaunch={nextLaunch} />}

         <div className={!props.loading && !props.delay ? 'loading-mask left fade' : 'loading-mask left'} />
         <div className={!props.loading && !props.delay ? 'loading-mask right fade' : 'loading-mask right'} />
      </div>
   );
}

export default Home;
