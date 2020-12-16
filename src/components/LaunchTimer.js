import React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';

function NextLaunchTimer(props) {
   const [timeLeft, setTimeLeft] = useState('');
   const launchTime = parseInt(props.launchTime) * 1000;

   const calculateTimeLeft = () => {
      const difference = launchTime - moment().valueOf();
      let timeLeft = {};
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
         <span key={interval} className="time-component">
            {timeLeft[interval]}
            {interval !== 'seconds' ? <span className="timer__semicolon">{' : '}</span> : ''}
         </span>
      );
   });

   return <div className="timer">{timerComponents.length ? timerComponents : <span className="timer__not-available">No new launch data available...</span>}</div>;
}

export default NextLaunchTimer;
