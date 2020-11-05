import React from 'react';
import { useEffect, useState } from 'react';
import NextLaunchTimer from '../../components/nextlLaunchTimer/NextLaunchTimer';
import './Home.css';
import background from '../../spacex.jpg';

function Home(props) {
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

   return (
      <div className="hero">
         <img src={background} alt=""></img>
         {nextLaunch ? <h1>{`${nextLaunch.rocket.rocket_name} Block ${nextLaunch.rocket.second_stage.block} | ${nextLaunch.mission_name}`}</h1> : ''}
         {nextLaunch ? <NextLaunchTimer className="timer" nextLaunch={nextLaunch} /> : ''}
         <div className={nextLaunch && !props.delay ? 'loading-mask left fade' : 'loading-mask left'} />
         <div className={nextLaunch && !props.delay ? 'loading-mask right fade' : 'loading-mask right'} />
      </div>
   );
}

export default Home;
