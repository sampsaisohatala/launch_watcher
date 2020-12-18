import React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';

function NextLaunchTimer(props) {
   const [timeLeft, setTimeLeft] = useState('');
   const launchTime = moment(props.launchTime).valueOf();

   const calculateTimeLeft = () => {
      const difference = Math.abs(launchTime - moment().valueOf());
      return {
         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
         hours: ('0' + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
         minutes: ('0' + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
         seconds: ('0' + Math.floor((difference / 1000) % 60)).slice(-2),
      };
   };

   const timeFormat = () => {
      const format = launchTime - moment().valueOf() > 0 ? '-' : '+';
      return (
         <span className="timer__semicolon" key="timeformat">
            T{format}{' '}
         </span>
      );
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

   const timerComponents = [timeFormat()];

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
