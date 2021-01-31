import React from 'react';
import LaunchTimer from './LaunchTimer';
import moment from 'moment';

const HappeningCard = ({ happening }) => {
   return (
      <div className="launch-card">
         <div className="launch-card__image-container">
            <img className="launch-card__image" src={happening.image} alt="loading..."></img>
         </div>

         <div className="launch-card__info">
            <div className="launch-card__header">
               <h3>{happening.name}</h3>
               {happening.status && <div className="launch-card__status">{happening.status}</div>}
            </div>

            <LaunchTimer launchTime={happening.net} individual />

            {happening.provider && (
               <p className="launch-card__text">
                  <span>Provider: </span>
                  {happening.provider}
               </p>
            )}
            {happening.location && (
               <p className="launch-card__text">
                  <span>Location: </span>
                  {happening.location}
               </p>
            )}
            {happening.description && (
               <p className="launch-card__text">
                  <span>Description: </span>
                  {happening.description}
               </p>
            )}
            {happening.net && (
               <p className="launch-card__text">
                  <span>Date/time: </span>
                  {moment.utc(happening.net).format('MMMM Do YYYY / HH:mm UTC')}
               </p>
            )}
         </div>
      </div>
   );
};

export default HappeningCard;
