import React from 'react';
import LaunchTimer from './LaunchTimer';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBuilding, faMapMarked, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core';
import useImagePlaceholder from '../hooks/useImagePlaceholder';

const HappeningCard = ({ happening }) => {
   const [showDialog, setShowDialog] = React.useState(false);
   const [logoSrc, { logoBlur }] = useImagePlaceholder( happening.image );

   const handleDialogVisibility = () => {
      setShowDialog(!showDialog);
   };

   console.log('time', happening.net);
   return (
      <>
         <div className="launch-card">
            <div className="launch-card__image-container">
            <img
                  className="launch-card__image"
                  src={logoSrc}
                  alt=""
                  style={{
                    filter: logoBlur ? 'blur(20px)' : 'none',
                    transition: logoBlur ? 'none' : 'filter 0.3s ease-out',
                  }}
                />
               {/* <img className="launch-card__image" src={happening.image} alt="loading..."></img> */}
            </div>

            <div className="launch-card__info">
               <div className="launch-card__header">
                  <h3>{happening.name}</h3>
                  {happening.status && <div className="launch-card__status">{happening.status}</div>}
               </div>

               <LaunchTimer launchTime={happening.net} individual />
               <div className={'launch-card__subcontainer'}>
                  {happening.net && (
                     <div className={'launch-card__text-container'}>
                        <FontAwesomeIcon icon={faClock} className={'launch-card__icon'} />
                        <p className="launch-card__text">{moment(happening.net).format('MMMM Do YYYY, HH:mm')}</p>
                     </div>
                  )}

                  {happening.location && (
                     <div className={'launch-card__text-container'}>
                        <FontAwesomeIcon icon={faMapMarked} className={'launch-card__icon'} />
                        <p className="launch-card__text">{happening.location}</p>
                     </div>
                  )}
               </div>

               <Button className={'launch-card__button'} color="inherit" variant="contained" onClick={handleDialogVisibility}>
                  More info
               </Button>
            </div>
         </div>
         <Dialog onClose={handleDialogVisibility} open={showDialog}>
            <DialogTitle className={'launch-card__dialog'}>
               <Typography variant="h4">{happening.name}</Typography>
            </DialogTitle>
            <DialogContent className={'launch-card__dialog'}>
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
            </DialogContent>
         </Dialog>
      </>
   );
};

export default HappeningCard;
