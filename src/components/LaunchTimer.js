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

   // Create "T- / T+"
   const timeFormat = () => {
      const format = launchTime - moment().valueOf() > 0 ? '-' : '+';
      return (
         <div className={!props.individual ? 'timer__semicolon' : 'timer__semicolon--alt'} key="timeformat">
            T{format}{' '}
         </div>
      );
   };

   const timerComponents = [timeFormat()];

   // Create timer components
   Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
         return;
      }
      timerComponents.push(
         // Add timer unit with number and text
         <div key={interval} className="timer__unit">
            <span className={!props.individual ? 'timer__unit_number' : 'timer__unit_number--alt'}>{timeLeft[interval]}</span>
            <span className={!props.individual ? 'timer__unit_text' : 'timer__unit_text--alt'}>{interval}</span>
         </div>
      );

      if (interval !== 'seconds') {
         timerComponents.push(
            // Add semicolon
            <div key={interval + ':'} className={!props.individual ? 'timer__semicolon' : 'timer__semicolon--alt'}>
               {' : '}
            </div>
         );
      }
   });

   return <div className={!props.individual ? 'timer' : 'timer--alt'}>{timerComponents.length ? timerComponents : <span className="timer__not-available">No new launch data available...</span>}</div>;
}

export default NextLaunchTimer;
