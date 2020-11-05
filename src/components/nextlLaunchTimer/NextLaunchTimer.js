import React from 'react';
import { useEffect, useState } from 'react';

function NextLaunchTimer(props) {
   const calculateTimeLeft = () => {
      const difference = new Date(props.nextLaunch.launch_date_utc).getTime() - Date.now();
      let timeLeft = {};
      //console.log('calculateTimeLeft');
      if (difference > 0) {
         timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: ('0' + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
            minutes: ('0' + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
            seconds: ('0' + Math.floor((difference / 1000) % 60)).slice(-2),
         };
      }

      return timeLeft;
   };

   const [timeLeft, setTimeLeft] = useState('');

   // call to avoid waiting before updateLoop
   useEffect(() => {
      setTimeLeft(calculateTimeLeft());
   }, []);

   // updateLoop
   useEffect(() => {
      let timer = setTimeout(() => {
         setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => {
         clearTimeout(timer);
      };
   });

   const timerComponents = [];

   Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
         return;
      }

      timerComponents.push(
         <span key={interval}>
            {timeLeft[interval]} {interval}{' '}
         </span>
      );
   });

   return <div>{timerComponents.length ? timerComponents : <span>No new launch data available...</span>}</div>;
}

export default NextLaunchTimer;
