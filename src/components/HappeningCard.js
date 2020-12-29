import React from 'react';
import LaunchTimer from './LaunchTimer';

const HappeningCard = ({ happening }) => {
   return (
      <div className="launch-card">
         <div className="launch-card__image-container">
            <img className="launch-card__image" src={happening.image} alt="loading..."></img>
         </div>

         <div className="launch-card__info">
            <h3>{happening.name}</h3>
            <LaunchTimer launchTime={happening.net} individual />
            {happening.status && <p>Status: {happening.status}</p>}
            {happening.provider && <p>Provider: {happening.provider}</p>}
            {happening.location && <p>Location: {happening.location}</p>}
            {happening.description && <p>Description: {happening.description}</p>}
            <p>{happening.net}</p>
         </div>
      </div>
   );
};

export default HappeningCard;
