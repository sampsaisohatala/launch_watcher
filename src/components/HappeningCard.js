import React from 'react';
import LaunchTimer from './LaunchTimer';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBuilding, faMapMarked, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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
            {happening.net && (
               <div className={'launch-card__text-container'}>
                  <FontAwesomeIcon icon={faClock} className={'launch-card__icon'} />
                  <p className="launch-card__text">{moment.utc(happening.net).format('MMMM Do YYYY / HH:mm UTC')}</p>
               </div>
            )}
            {happening.provider && (
               <div className={'launch-card__text-container'}>
                  <FontAwesomeIcon icon={faBuilding} className={'launch-card__icon'} />
                  <p className="launch-card__text">{happening.provider}</p>
               </div>
            )}
            {happening.location && (
               <div className={'launch-card__text-container'}>
                  <FontAwesomeIcon icon={faMapMarked} className={'launch-card__icon'} />
                  <p className="launch-card__text">{happening.location}</p>
               </div>
            )}
            {happening.description && (
               <div className={'launch-card__text-container'}>
                  <FontAwesomeIcon icon={faInfoCircle} className={'launch-card__icon'} />
                  <p className="launch-card__text">{happening.description}</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default HappeningCard;
