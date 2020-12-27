import React from 'react';
import LaunchTimer from './LaunchTimer';

const LaunchCard = ({ launch }) => {
   return (
      <div className="launch-card">
         <div className="launch-card__image-container">
            <img className="launch-card__image" src={launch.image} alt="loading..."></img>
         </div>

         <div className="launch-card__info">
            <h3>{launch.name}</h3>
            <LaunchTimer launchTime={launch.net} individual />
            <p>Status: {launch.status}</p>
            <p>Provider: {launch.provider}</p>
            <p>Location: {launch.location}</p>
            {launch.description && <p>Description: {launch.description}</p>}
            <p>{launch.net}</p>
         </div>
      </div>
   );
};

export default LaunchCard;
