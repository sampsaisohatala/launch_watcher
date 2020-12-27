import React from 'react';
import LaunchTimer from './LaunchTimer';

const EventCard = ({ event }) => {
   return (
      <div className="launch-card">
         <div className="launch-card__image-container">
            <img className="launch-card__image" src={event.image} alt="loading..."></img>
         </div>

         <div className="launch-card__info">
            <h3>{event.name}</h3>
            <LaunchTimer launchTime={event.net} individual />
            <p>Location: {event.location}</p>
            {event.description && <p>Description: {event.description}</p>}
            <p>{event.net}</p>
         </div>
      </div>
   );
};

export default EventCard;
